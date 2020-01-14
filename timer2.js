// we need to check if the user press b beep.

const stdin = process.stdin;
stdin.setRawMode(true)
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  
  if (key === '\u0062'){
    process.stdout.write('\x07')
  }
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit()
  }
  
  
  const keyCode = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039'];
  const keyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for(let i = 0; i < keyCode.length; i++){
    if(key === keyNum[i]){
      console.log(`setting timer for ${keyNum} seconds`)
      setTimeout(() =>{
        process.stdout.write('\x07');
      }, keyCode[i] * 1000);
    }
  
  }
  


})