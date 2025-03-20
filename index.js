import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

app.post('/compare', async (req, res) => {
  const { breed1, breed2 } = req.body;

  if (!breed1 || !breed2) {
    return res.status(400).json({ error: 'Please provide two breeds to compare.' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Compare the following dog breeds: ${breed1} and ${breed2}. Provide a detailed on their strengths and weaknesses be clear use bold text on breed  `,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const comparisonText = completion.choices[0].message.content.trim();
    res.json({ comparison: comparisonText });
  } catch (error) {
    console.error('Error generating comparison:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to generate comparison' });
  }
});

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
