const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('funcionando'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});


//probar db
const sequelize = require('./config/database');
const User = require('./models/User');

sequelize.sync().then(() => {
    console.log('DB sincronizada');
});
