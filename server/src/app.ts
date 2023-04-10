// imports for typescript express.
import express, { NextFunction, Application, Request, Response } from 'express'
import axios from 'axios'
// add @types/cors for TypeScript
import cors from 'cors'
// card data import
import card_data from './card_data'
// imported types from card_data
import { Card, CardData } from './card_data'

const PORT: string | number = process.env.PORT || 5000;

const app: Application = express()
// for json and urlencoded usage in app
app.use(express.urlencoded({ extended: true }));
// cross origin 
app.use(cors())



app.get('/api', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello to Expansion Festival of Legends!')
})

app.get('/api/:class', (req: Request, res: Response, next: NextFunction) => {
    const class_name: string = req.params.class
    const cards: Card[] = card_data[class_name]
    // console.log(class_name);
    if (cards) {
        res.json(cards);
    } else {
        res.status(404).send(`No data found for class ${class_name}`);
    }
})


// listen for server
app.listen(PORT, () => {
    console.log(`Server running at port: 5000`);

})