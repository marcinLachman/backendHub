import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db_url = process.env.DB_URL_CONNECTION;

mongoose.set('strictQuery', true);
const connect = function() {
  mongoose.connect(db_url)
    .then(() => {
      console.log('Data connected');
    })
    .catch ((error) => {
      console.error(`Błąd połączenia z baza ${error}`);
    })
};

export default connect;