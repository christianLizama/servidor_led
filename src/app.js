import config from './config.js';
import express from 'express';
import cors from 'cors';

import initRoute from './routes/initRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',initRoute);

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});