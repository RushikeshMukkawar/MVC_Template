const express = require('express');

const { ServerConfig, Logger } = require('./config'); //Dont need to mention index.js, its by default
const apiRoutes = require('./routes');

const app = express(); 

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, function exec(){
    console.log(`Server is running on PORT : ${ServerConfig.PORT}`);
    // Logger.info('Successfully started the server', 'root', {});
});