const express = require('express');
const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Crear la carpeta 'processed' si no existe
const processedDir = path.join(__dirname, 'processed');
if (!fs.existsSync(processedDir)) {
    fs.mkdirSync(processedDir);
}

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/process-image', async (req, res) => {
    const imageUrl = req.body.imageUrl;

    try {
        const image = await Jimp.read(imageUrl);
        const processedImageName = `${uuidv4().split('-')[0]}.jpg`;
        const processedImagePath = path.join(processedDir, processedImageName);

        image
            .resize(350, Jimp.AUTO)
            .greyscale()
            .write(processedImagePath, () => {
                res.send(`/processed/${processedImageName}`);
            });
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).send('Error processing image');
    }
});

app.use('/processed', express.static(processedDir));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
