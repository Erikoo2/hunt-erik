const Discord = require("discord.js");
const myid = ['ID'];
const prefix = ['$'];
const client = new Discord.Client();



//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.login(process.env.TOKEN);


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client.on('ready', async() => {
var server = "904599157350744074"; 
var channel = " 904600119079489566 ";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(' $hunt gods ')
    },6000);
});
          
