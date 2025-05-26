import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
let collection;

async function connectDB() {
    try {
        await client.connect();
        console.log('👍🏼 Connected to MongoDB');
        const db = client.db('kumlungjai');
        collection = db.collection('encouragements');
    } catch(error) {
        console.error("❌ MonogoDB connection failed:", error);
    }
}

app.use(cors());
app.use(express.json());

app.post('/api/encouragements', async (req, res) => {
    try {
        const { type, imageUrl, message } = req.body;

        const newData = {
            type,
            imageUrl,
            message,
            createdAt: new Date(),
        };

        const result = await collection.insertOne(newData);
        res.status(201).json({ message: '🟢 Data saved', id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: '🔴 Failed to save data' })
    }
});

app.get('/api/encouragements/random', async (req, res) => {
    try {
        const randomItem = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
        res.json(randomItem[0]);
    } catch (error) {
        res.status(500).json({ error: '🔴 Failed to fetch data' });
    }
});

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error('Server failed to start', err);
});