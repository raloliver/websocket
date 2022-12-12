/*
 * File: server.js
 * Project: websocket-nodejs-mongodb
 * Created: Monday, December 12th 2022, 4:34:29 am
 * Last Modified: Monday, December 12th 2022, 4:48:16 am
 * Copyright © 2022 AMDE Agência
 */

import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';

const app = express();
const port = process.env.port || 3000;
const currentPath = url.fileURLToPath(import.meta.url);
const publicPath = path.join(currentPath, '../..', 'public');
const httpServer = http.createServer(app);

app.use(express.static(publicPath));
httpServer.listen(port, () => console.info(`Server init on ${port}`));
