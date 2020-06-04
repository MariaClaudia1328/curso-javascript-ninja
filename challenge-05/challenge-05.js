/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

myArray = ['eu', 2, 'banana', 5, true];



/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction (a){
    return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function funcao (arr, num){
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var aux = [1, 'string', true, undefined, { 'nome': 'meuNome'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(funcao( aux, 0 ));
console.log(funcao( aux, 1 ));
console.log(funcao( aux, 2 ));
console.log(funcao( aux, 3 ));
console.log(funcao( aux, 4 ));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (nameBook){
    var objBook = {
        'name1' : {
            quantidadePaginas : 1,
            autor: 'name1',
            editora: 'name1-e',
        },
        'name2' : {
            quantidadePaginas : 2,
            autor: 'name2',
            editora: 'name2-e',
        },
        'name3' : {
            quantidadePaginas : 3 ,
            autor: 'name3',
            editora: 'name3-e',
        }
    };


    return !nameBook ? objBook : objBook[ nameBook];
    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
'O livro [NOME_DO_LIVRO] tem [X] páginas!'
*/
var bookName = 'name1';
console.log('O livro '+ bookName + ' tem ' + book(bookName).quantidadePaginas + ' paginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
'O autor do livro [NOME_DO_LIVRO] é [AUTOR].'
*/

console.log('O autor do livro '+ bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
'O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA].'
*/

console.log('O livro '+ bookName + ' foi publicado pela editora '+ book(bookName).editora + '.');