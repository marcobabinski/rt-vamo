const express = require('express')
const db = require('./db-conection')
const app = express()
let id;
  // Primary path
  app.get('/', (request, response) => {
    response.send("Primary page")
  })

  // Get all products
  app.get('/api/products', async (request, response) => {
    try {
        const result = await db.query('SELECT * FROM produto');
        response.json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error'); 
    }
  })

  // app.get(`api/product/id`), async (request, response) => {
  //   try {
  //     const result = await db.query('SELECT * FROM produto');
  //     response.json(result.rows);
  //   } catch (error){
  //     console.error(error)
  //   }
  // }

  const PORT = 8000
  app.listen(PORT, () => {
    console.log(`Project run in port: ${PORT}`)
  })