require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Allows JSON requests


app.get("/api/payments/", (req, res) => {
  res.send("🌍 API Proxy Server is Running...");
});

app.post("/api/payment", async (req, res) => {
  console.log(req)
  try {
    const response = await axios.post("https://demo.ezetap.com/api/3.0/p2padapter/pay",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.API_KEY}`, // Store API key in .env
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});
app.get("/api/status", (req, res) => {
  res.send("🌍 API Proxy Server is Running...");
});

app.post("/api/status/", async (req, res) => {
  console.log(req)
  try {
    const response = await axios.post("https://demo.ezetap.com/api/3.0/p2padapter/status",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.API_KEY}`, // Store API key in .env
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.get("/api/cancels/", (req, res) => {
  res.send("🌍 API Proxy Server is Running...");
});

app.post("/api/cancel", async (req, res) => {
  console.log(req)
  try {
    const response = await axios.post("https://demo.ezetap.com/api/3.0/p2p/cancel",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.API_KEY}`, // Store API key in .env
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
