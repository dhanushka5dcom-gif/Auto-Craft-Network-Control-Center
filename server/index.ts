import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import http from 'http';
import path from 'path';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Create HTTP Server for WebSocket
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Start Server
server.listen(PORT, HOST as string, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  Auto Craft Network Control Center v1.0                   ║
║  Enterprise Local Network Edition                         ║
╠════════════════════════════════════════════════════════════╣
║  Server running on: http://${HOST}:${PORT}
║  Environment: ${process.env.NODE_ENV || 'development'}
║  WebSocket: ws://${HOST}:${PORT}/ws
╚════════════════════════════════════════════════════════════╝
  `);
});

export { app, server, wss };
