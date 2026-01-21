import app from './app.js';
import {connectDB} from './db.js';

async function startServer() {
    await connectDB();
    app.listen(4000);
    console.log('Server on port', 4000);
}

startServer().catch(console.error);
