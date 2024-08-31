const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const url = 'https://api.5metrics.dev/getServer';
const data = { id: '7a398a' };  

const config = {
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'tr-TR,tr;q=0.6',
    'Content-Type': 'application/json',
    'Origin': 'https://5metrics.dev',
    'Referer': 'https://5metrics.dev/',
    'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Gpc': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  }
};

app.get('/servercount', async (req, res) => {
  try {
    const response = await axios.post(url, data, config);
    const playerCount = response.data.server.players;
    res.send(`${playerCount}`);
  } catch (error) {
    res.status(500).send('Hata: Veriler alınamadı.');
  }
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor, http://localhost:${port}/servercount adresinden erişilebilir.`);
});
