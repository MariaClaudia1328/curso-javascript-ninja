
//AULA 08
console.log("AULA 08");
/* funções nomeadas
    --> deixar sem nome apenas qnd for explicito que nao precisa*/
var func = function(){
    return 'hi';
}

console.log(func());
console.log(func.name);

var func2 = function func2(){
    return 'hello';
}

console.log(func2.name);

/* functional programming 
    - funções são objetos/cidadãos de primeira classe : mesmo tratamento dos objetos em js

*/

/* função retornando função*/
function adder(x){
    return function(y){
        return x + y;
    };
}

var add = adder(2);
console.log(add(3)); 

console.log(adder(4)(2));

function adder2(x){
    function addOther(y){
        return x + y;
    }

    return addOther;
}

/*função com objetos como parametros */

var car = {
    'color': 'yellow'
}

function getCarColor(myCar){
    return myCar.color;
}

console.log(getCarColor(car));

/* funcao com funcao como parametro */

function showOtherFunction(func){
    return func();
}

//notação sem function()
var aux1 = () => {
    return 'Functional JS Ninja!';
};

console.log(showOtherFunction(aux1));
console.log('   ');
console.log('   ');

//AULA 09
console.log("AULA 09");

/*escopo de funções*/

function myFunction() {
    function sum(){
        return 1+2;
    }

    return sum();
}

console.log(myFunction());
//console.log(sum());

// Hoisting 
//função literal vale para todo o escopo da função independente da ordem
///função literal é aquela que não é atribuída a uma variavel

function myFunction() {
    var var1 = 1;
    var var2 = 2;

    return sum();

    function sum(){
        return var1+var2;
    }    
}

console.log(myFunction());

function myFunction(){
    console.log( 'antes', number1);
    var number1 = 10;
    console.log('depois', number1);
}

//IIFE - immediately-invoked function expression
// função auto executável

function sum(){
    return 1+2;
}
console.log(sum());

var sum2 = function() {
    return 3 +2;
}

console.log(sum2());

var sum3 = function otherSum(){
    return 4+3;
}

console.log(sum3());
//console.log(otherSum()); //otherSum existe somente no escopo de sum3

//nao tem como executar funções anonimas
//IIFE 

//não consigo executar a função literal daí transformo ela em expressão
(function(){
    console.log( 1 + 2);
})(); //função auto executável --> cria pequenos escopos / escopo local

(function(){
    console.log( 1 + 2);
}()); //função auto executável









