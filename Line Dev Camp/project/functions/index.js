/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const axios = require("axios");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.webhook = onRequest((request, response) => {
  // logger.info("Hello logs!", {structuredData: true});

  const events = request.body.events;
  for (const event of events) {
    switch (event.type) {
      case "follow":
        console.log(JSON.stringify(event));
        let message = "ยินดีต้อนรับเพื่อนใหม่";
        if (event.follow.isUnblocked) {
          message = "ยินดีต้อนรับ กลับมาอีกครั้ง";
        }
        console.log(message);

        replyMessage(event.replyToken, message);

        break;
      case "message":
        if (event.message.type === "text") {

            if (event.message.text === "สวัสดี") {
                replyMessage(event.replyToken, "สวัสดีครับ");

            }else if (event.message.text === "สวีดัส") {
                replyMessage(event.replyToken, "สวัสดีครับ");
            }
          
        }
        break;

      default:
        break;
    }
  }
  response.end();
});

