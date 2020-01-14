// create a varirable that will take value input from the cli.
//create a loop to iterate through progress.argv
//we need the loop to start at index 2 why? because tehe first element are the name of the file.
//setTime Out 
args = process.argv.slice(2)


for(let i = 0; i < args.length; i++){
  if(args[i] > 0){
     setTimeout(() => {
      process.stdout.write('\x07');
    }, args[i] * 1000)
  }
  
}




