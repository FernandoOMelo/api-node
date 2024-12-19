import "dotenv/config";
import app from './src/app.js';

const PORT = 2001;

app.listen(PORT, () => {
    console.log('API rodando na porta 2001.');
});