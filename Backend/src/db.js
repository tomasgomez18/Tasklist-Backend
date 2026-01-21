import mongoose from 'mongoose';

export const connectDB = async() =>{
    console.log('Intentando conectar a MongoDB...');
    try {
        await mongoose.connect('mongodb+srv://tomasgomezzi36_db_user:PascualNina11@clustertomas.ldluhmp.mongodb.net/merndb?retryWrites=true&w=majority', {
            serverSelectionTimeoutMS: 5000, // 5 segundos timeout
        })
        
        console.log('✅ DB connected successfully!');
        
    } catch (error) {
        console.log('❌ DB connection error:', error.message);
        console.log('Posibles causas:');
        console.log('1. IP no está en whitelist de Atlas');
        console.log('2. Credenciales incorrectas');
        console.log('3. Problema de red');
    }
}