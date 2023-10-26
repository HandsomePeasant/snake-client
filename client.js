const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', function(data) {
    console.log(data);
  })

  conn.on('connect', function() {
    console.log('Successfully connected to game server');
    conn.write('Name: ADM');
    // setInterval(() => conn.write('Move: up'), 50); // Sends a message to the server to move up one square, every 50ms
  })

  return conn;
};

module.exports = {connect};