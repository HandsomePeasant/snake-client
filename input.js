const { stdin } = require("process");
const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, HELLO, GOODBYE } = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT) {
    connection.write('Move: right');
  }
  if (key === HELLO) {
    connection.write('Say: Howdy');
  }
  if (key === GOODBYE) {
    connection.write('Say: Ciao');
  }
}

module.exports = {setupInput};