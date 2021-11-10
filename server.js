const http = require('http');
const express = require('express');
const RED = require("node-red");
const Discord = require('discord.js');
const client = new Discord.Client();

// DISCORD --------------------------------------------------------------
// https://v12.discordjs.guide/creating-your-bot/#creating-the-bot-file
client.once('ready', () => {
  console.log('Ready!');
  client.send("asdf")
});
client.login('OTA4MDk5NDQ3Nzk4NTMwMDQ4.YYwzhA.SSs79K-qpbXcDssRaJl8IDu061U');


// END DISCORD --------------------------------------------------------------

const port = process.env.PORT || 8080;

console.log(`running on port ${port}`);

const app = express();
 
app.use(express.static('public'));

const server = http.createServer(app);

const settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir:".nodered/",
    functionGlobalContext: { }    // enables global context
};

RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

app.get('/', function (req, res) {
  res.status(302).send('index.html')
})
 
server.listen(port);

// Start the runtime
RED.start();

function sendMessage(msg) {
  console.log("INSIDE HOST: " + msg);
  client.channels.cache.get('908100679191650406').send(msg);
  console.log("sent");


}
console.sendMessage = sendMessage;

