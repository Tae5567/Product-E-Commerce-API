//routes/chatbot.js
import express from 'express';
import { handleChat } from '../controllers/chatbotController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

router.post('/chat', authMiddleware, handleChat);

export default router;