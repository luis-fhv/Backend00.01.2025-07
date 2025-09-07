
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const api = axios.create({ timeout: 10000 });
const sendError = (res, err) => {
  console.error(err?.message || err);
  const status = err?.response?.status || 500;
  res.status(status).json({ error: err?.response?.data || "Error externo" });
};



// GitHub
app.get("/api/github/:username", async (req, res) => {
  try {
    const r = await api.get(`https://api.github.com/users/${req.params.username}`);
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Clima 
app.get("/api/weather", async (req, res) => {
  try {
    const { city } = req.query;
    const r = await api.get("https://api.openweathermap.org/data/2.5/weather", {
      params: { q: city, appid: process.env.OPENWEATHER_API_KEY, units: "metric" }
    });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Tipo de cambio 
app.get("/api/exchange/usd-pen", async (req, res) => {
  try {
    const r = await api.get("https://api.frankfurter.app/latest", {
      params: { from: "USD", to: "PEN" }
    });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Lista Pokemones
app.get("/api/pokemon", async (req, res) => {
  try {
    const r = await api.get("https://pokeapi.co/api/v2/pokemon", { params: { limit: 20 } });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Detalle de un Pokémon
app.get("/api/pokemon/:name", async (req, res) => {
  try {
    const r = await api.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Rick and Morty personajes
app.get("/api/rick/characters", async (req, res) => {
  try {
    const r = await api.get("https://rickandmortyapi.com/api/character");
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Rick and Morty detalle
app.get("/api/rick/character/:id", async (req, res) => {
  try {
    const r = await api.get(`https://rickandmortyapi.com/api/character/${req.params.id}`);
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Top 10 Cocktails
app.get("/api/cocktails/top10", async (req, res) => {
  try {
    const list = await api.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
    const top = list.data.drinks.slice(0, 10);
    const details = await Promise.all(
      top.map(d => api.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${d.idDrink}`))
    );
    res.json(details.map(d => d.data.drinks[0]));
  } catch (err) { sendError(res, err); }
});

//Productos 
app.get("/api/products", async (req, res) => {
  try {
    const r = await api.get("https://fakestoreapi.com/products");
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Fotos 
app.get("/api/photos", async (req, res) => {
  try {
    const { query = "random" } = req.query;
    const r = await api.get("https://api.unsplash.com/search/photos", {
      params: { query, per_page: 10 },
      headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` }
    });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Citas 
app.get("/api/quotes", async (req, res) => {
  try {
    const r = await api.get("https://api.quotable.io/random");
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Usuario falso
app.get("/api/randomuser", async (req, res) => {
  try {
    const r = await api.get("https://randomuser.me/api/");
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Películas en estrenO
app.get("/api/movies/now", async (req, res) => {
  try {
    const r = await api.get("https://api.themoviedb.org/3/movie/now_playing", {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

//Detalle de película
app.get("/api/movies/:id", async (req, res) => {
  try {
    const r = await api.get(`https://api.themoviedb.org/3/movie/${req.params.id}`, {
      params: { api_key: process.env.TMDB_API_KEY }
    });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

// Datos de Marte
app.get("/api/mars/photos", async (req, res) => {
  try {
    const r = await api.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos", {
      params: { sol: 1000, api_key: process.env.NASA_API_KEY }
    });
    res.json(r.data);
  } catch (err) { sendError(res, err); }
});

app.listen(PORT, () => console.log(`🚀 Backend corriendo en http://localhost:${PORT}`));
