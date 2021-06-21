let pwdCommand = require('./pwd')
const fs = require('fs');
const ls = require('./ls');
const cat = require('./example/cat')

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  

  if (cmd === 'pwd') {
    pwdCommand();
  }

  else if (cmd === "ls" ){
    ls()
  }

  else if (cmd.includes('cat')){
    const fileName = cmd.split(' ').slice(1).join('')
    cat(fileName)
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

