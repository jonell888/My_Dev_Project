import express from 'express'
import chalk from 'chalk';
import createDebug from 'debug'
const debug = createDebug('app')
import morgan from 'morgan';

const app = express();
const  port = 3001;

app.use(morgan("combined"));

app.get("/", (req, res) =>{
    res.send('Hello World!');
});

//addition route

app.listen(port, ()=>{
  debug("Server is running on port" + ":" + chalk.red(port));
});
