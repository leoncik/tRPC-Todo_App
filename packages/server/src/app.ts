import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use(cors());
app.use('/', () => {
    console.log("It works again.");    
});

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
});
