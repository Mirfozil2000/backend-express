import express from 'express';
import serverless from 'serverless-http';
const app = express();
app.get('/', (req,res) => {
    res.send('<h1>My first backend project in netlify</h1>')
})
app.get('/about', (req,res) => {
    res.json({
        'name': 'Mirfozil',
        'hobby': {
            '1': 'Programming',
            '2': 'Workout',
            '3': 'Music'
        }
    })
})
app.get('/express', (req,res) => {
    res.send('<h1>My website ended</h1>')
})
export const handler = serverless(app);
