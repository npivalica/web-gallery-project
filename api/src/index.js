import http from 'http';
import cors from 'cors';
import express from 'express';

let app = express();
app.server = http.createServer(app);

// 3rd party middlewares
app.use(cors({}));
export default app;