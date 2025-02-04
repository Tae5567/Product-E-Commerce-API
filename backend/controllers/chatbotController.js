import { OpenAI } from 'openai';
import Product from '../models/Product.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const handleChat = async (req, res) => {
  const { message } = req.body;

  try {
    // Get product categories from database
    const categories = await Product.findAll({
      attributes: ['category'],
      group: ['category']
    });

    // System prompt with product data
    const systemPrompt = `
      You are an e-commerce assistant for a luxury shoe brand
      Available product categories: ${categories.map(c => c.category).join(', ')}.
      
      RULES:
      1. Recommend products only from existing categories
      2. Always include direct URL links in format: /products?category={category}
      3. Keep responses under 3 sentences
      4. If unsure, ask clarifying questions
    `;

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
    
  } catch (error) {
    res.status(500).json({ error: "Chatbot error" });
  }
};