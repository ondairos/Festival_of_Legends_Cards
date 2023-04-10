// imports for typescript express.
import express, { NextFunction, Application, Request, Response } from 'express'

const app: Application = express()
// code

const add = (a: number, b: number): number => a + b

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5, 5));
    res.send('Hello')
})



// listen for server
app.listen(5000, () => {
    console.log(`Server running at port: 5000`);

})