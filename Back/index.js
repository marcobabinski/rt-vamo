const express = require('express')
const db = require('./db-conection')
const app = express()
let id;
  // Primary path
  app.get('/', (request, response) => {
    response.send("Primary page")
  })

  // Get all films
  app.get('/films', async (request, response) => {
    try {
        const result = await db.query('SELECT * FROM films');
        response.json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error'); 
    }
  });

  app.get('/films/:id', async (request, response) => {
    try {
        const result = await db.query(`SELECT * FROM films where i_film=${request.params.id}`);
        response.json(result.rows);
    } catch (error) {
        console.error(error);                                                     
        response.status(500).send('Internal Server Error'); 
    }
  });

  app.get('/genre/:genre', async (request, response) => {
    try {
        const genre = await db.query(`SELECT i_genre FROM genres where name='${request.params.genre}'`);
        const films = await db.query(`SELECT * FROM films where i_film=${genre.rows[0].i_genre}`)

        response.json(films.rows);  
    } catch (error) {
        console.error(error);                                                     
        response.status(500).send('Internal Server Error'); 
    }
  });

  app.get('/genre', async (request, response) => {
    try {
      const result = await db.query(`SELECT * FROM genres`);

      response.json(result.rows);
    } catch (error) {
      console.error(error);                                                     
      response.status(500).send('Internal Server Error'); 
    }
  })

  app.get('/reviews', async (request, response) => {
    try {
        const result = await db.query('SELECT * FROM reviews');
        response.json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error'); 
    }
  });

  app.get('/films/:id', async (request, response) => {
    try {
        console.log(`the id is: ${request.params.id}`);
        const result = await db.query(`SELECT * FROM films where i_film=${request.params.id}`);
        response.json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error'); 
    }
  });

  const PORT = 8000
  app.listen(PORT, () => {
    console.log(`Project run in port: ${PORT}`)
  })