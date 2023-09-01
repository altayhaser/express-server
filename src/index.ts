import express, { Request, Response } from 'express';
// const express = require("express");

const app = express();
const host = 'localhost';
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('hi from server');
});

app.get('/items', (req, res) => {
    res.json(data);
});

app.get('/items/:id', (req, res) => {
    res.json(data);
});

const data = [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' },
  ];

app.post('/items', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.json(newItem);
  });

  app.put('/items/:id', (req, res) => {
    res.status(200).send('updated items')
    const id = req.params.id;
    const data = req.body
    
    const existingItemIndex = data.findIndex((item) => item.id === id );

    if (existingItemIndex === -1) {
        res.status(404).send('Item not found');
        return;
    }

    const updatedItem = req.body;
    data[existingItemIndex] = updatedItem;
    res.json(updatedItem);
});

app.delete('/items/:id', (req, res) => {
    res.status(200).send('deleted items')
    const id = req.params.id;

    const existingItemIndex = data.findIndex((item) => item.id === id );

    if (existingItemIndex === -1) {
        res.status(404).send('Item not found');
        return;
    }

    const filteredItems = data.filter((item) => item.id !== id),

});
  


app.listen(port, host, () => {
    console.log(`server is running on port ${port}`)
});