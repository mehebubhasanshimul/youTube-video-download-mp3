// MP3 ডাউনলোড লিংক পাওয়ার রাউট
app.get('/api/get-mp3/:videoId', async (req, res) => {
    const videoId = req.params.videoId;
    const quality = req.query.quality || 'low';
    
    try {
        const response = await axios.get(`https://youtube-mp3-audio-video-downloader.p.rapidapi.com/get_mp3_download_link/${videoId}?quality=${quality}&wait_until_the_file_is_ready=false`, {
            headers: {
                'x-rapidapi-key': 'b3ad11e41cmshb18121f061df58ep1b5c61jsnd7a63dda9d56',
                'x-rapidapi-host': 'youtube-mp3-audio-video-downloader.p.rapidapi.com'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'MP3 লিংক আনতে সমস্যা হয়েছে', details: error.message });
    }
});

// M4A ডাউনলোড লিংক পাওয়ার রাউট
app.get('/api/get-m4a/:videoId', async (req, res) => {
    const videoId = req.params.videoId;
    
    try {
        const response = await axios.get(`https://youtube-mp3-audio-video-downloader.p.rapidapi.com/get_m4a_download_link/${videoId}`, {
            headers: {
                'x-rapidapi-key': 'b3ad11e41cmshb18121f061df58ep1b5c61jsnd7a63dda9d56',
                'x-rapidapi-host': 'youtube-mp3-audio-video-downloader.p.rapidapi.com'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'M4A লিংক আনতে সমস্যা হয়েছে', details: error.message });
    }
});
