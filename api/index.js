const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// API রুট
app.get('/api/get-languages/:videoId', async (req, res) => {
    const videoId = req.params.videoId;
    
    try {
        const response = await axios.get(`https://youtube-mp3-audio-video-downloader.p.rapidapi.com/language_list/${videoId}?response_mode=default`, {
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY || 'b3ad11e41cmshb18121f061df58ep1b5c61jsnd7a63dda9d56',
                'x-rapidapi-host': 'youtube-mp3-audio-video-downloader.p.rapidapi.com'
            }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ডেটা ফেচ করতে সমস্যা হয়েছে', details: error.message });
    }
});

module.exports = app;
