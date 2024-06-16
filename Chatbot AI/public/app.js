require('.env').config();

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    wishMe();
    speak("I'm Daniel...How may I help you?");
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    const chatbox = document.getElementById('chatbox');
    const userMessage = document.createElement('p');
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    chatbox.appendChild(userMessage);

    const response = await getResponseFromGPT(userInput);

    const botMessage = document.createElement('p');
    botMessage.innerHTML = `<strong>DANIEL:</strong> ${response}`;
    chatbox.appendChild(botMessage);

    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function getResponseFromGPT(userInput) {
    const apiKey = ''; // ใส่ API Key ของคุณที่นี่
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userInput }],
        max_tokens: 150,
        temperature: 0.7
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const result = await response.json();
        return result.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error fetching the API:', error);
        return 'Sorry, I am having trouble connecting to the server. Please try again later.';
    }
}

// การเชื่อมต่อปุ่มส่งข้อความกับฟังก์ชัน sendMessage
document.querySelector('.send').addEventListener('click', sendMessage);

// การเชื่อมต่อปุ่มกด Enter กับฟังก์ชัน sendMessage
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
