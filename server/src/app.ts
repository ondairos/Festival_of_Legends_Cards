// imports for typescript express.
import express, { NextFunction, Application, Request, Response } from 'express'


const app: Application = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello')
})

app.listen(5000, () => {
    console.log(`Server running at port: 5000`);

})