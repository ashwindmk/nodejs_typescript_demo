import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('Sum: ' + add(2, 3));
    res.send('Hello Typescript');
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on post ' + PORT));
