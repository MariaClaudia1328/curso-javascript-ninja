
//AULA 08
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

  



