// imports for typescript express.
import express, { NextFunction, Application, Request, Response } from 'express'
// card data import
import card_data from './card_data'

const app: Application = express()
// code


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello to Expansion Festival of Legends!')
})

app.get('/:class', (req: Request, res: Response, next: NextFunction) => {
    const class_name: string = req.params.class
    const cards = card_data[class_name]
    // console.log(class_name);
    if (cards) {
        res.json(cards);
    } else {
        res.status(404).send(`No data found for class ${class_name}`);
    }
})


// listen for server
app.listen(5000, () => {
    console.log(`Server running at port: 5000`);

})