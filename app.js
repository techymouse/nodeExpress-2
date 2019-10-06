
//Node Progaming Start

//First Program to generate a non-remembable password with lenght of 20 and starting with 'nice-pass-'


/*
let passwordGenerator = require('password-generator');
let password  = passwordGenerator(20, false, '', 'nice-pass-');
console.log(password);
*/

/*
//Second node program to generate one liner joke

let joke = require('one-liner-joke');
console.log(joke.getRandomJoke());

let repeat = require('repeat-string');
console.log(repeat('Hello',3));

*/



//First Express program and Route 


let express = require('express');

let app = express();

app.get('/shop/:categoty',function(request,response){
    response.send(`<h1>Homepage</h1>`);
})

app.get('/About',function(request,response){
    response.send('<h1>This is first site in express</h1>');

})

app.get('/Contact',function(request,response){
    response.send('<h1>+91-7678194647</h1>');
})

app.get('*',function(request,response){
    response.send('<h1>400 Not Found</h1>');
})

app.listen(3000,function(){
    console.log('Listening Port 3000 ....');
})




