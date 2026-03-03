import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;


export async function mongoConnection(){
    if(!MONGO_URL){
        throw new Error('Não foi possível se conectar ao MongoDB')
    }
    try{
        await mongoose.connect(process.env.MONGO_URL!)
        console.log('Conexão ao MongoDB estabelecida com sucesso!');
    } catch (e) {
        console.error('Erro ao conectar ao banco de dados', e)
        process.exit(1);
    }


}