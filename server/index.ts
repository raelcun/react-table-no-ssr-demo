import express from 'express';
import cors from 'cors';
import { MockResult } from './types';

const app = express();

app.use(cors());

const createMockResult = (): MockResult => ({
    randomString: Math.random()
        .toString(36)
        .substring(2, 15),
    randomNumber: Math.random(),
});

app.get('/items', (req, res) => {
    const count = req.query.count;
    console.log(req.query);
    const mockData = Array(Number(count))
        .fill(0)
        .map(() => createMockResult());
    console.log(count, mockData);

    setTimeout(() => {
        res.send(mockData);
    }, 2000);
});

app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
});
