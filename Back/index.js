const express = require('express')
const db = require('./db-conection')
const app = express()
let id;

  //create the middleware
  const corsValidation = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next(); // Calling this function invokes the next middleware function in the app 
  }

  app.use(corsValidation);

  // Primary path
  app.get('/', (request, response) => {
    response.send("Primary page")
  })

  // Get all films
  app.get('/films/:pagina?', async (request, response) => {
    try {
      let params = 0;
      if (request.params.pagina !== undefined) {
        params = request.params.pagina;
      }

      const result = await db.query(`SELECT title, cover, i_film FROM films LIMIT 12 offset ${params * 12}`);

      response.json({ page: params, result: result.rows });
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error'); 
    }
  });

  app.get('/film/:id', async (request, response) => {
    try {
        const result = await db.query(`SELECT * FROM films where i_film=${request.params.id}`);
        response.json(result.rows);
    } catch (error) {
        console.error(error);                                                     
        response.status(500).send('Internal Server Error'); 
    }
  });


  // Genres
  app.get('/genre/:genre', async (request, response) => {
    try {
        const films = await db.query(`SELECT title, cover, films.i_film FROM films JOIN genre_film ON films.i_film = genre_film.i_film JOIN genres ON genre_film.i_genre = genres.i_genre WHERE genres.name = '${request.params.genre}' LIMIT 10`);

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
  });

  app.get('/featured', async (request, response) => {
    try {
      const result = await db.query(`SELECT * FROM films ORDER BY RANDOM() LIMIT 3;`);

      response.json(result.rows);
    } catch {
      console.error(error);                                                     
      response.status(500).send('Internal Server Error'); 
    }
  })


  // Reviews
  app.get('/reviews', async (request, response) => {
    try {
        const result = await db.query('SELECT * FROM reviews');
        response.json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error'); 
    }
  });

  const PORT = 8000
  app.listen(PORT, () => {
    console.log(`Project run in port: ${PORT}`)
  });