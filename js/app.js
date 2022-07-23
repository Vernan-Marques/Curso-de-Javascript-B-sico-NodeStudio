/*                                      O BÁSICO
//Cria uma janela de diálogo com a frase 'Olá mundo'
window.alert("Olá mundo")
*/

/*
//Impussiona coisas p/ o console do Inspencionador
window.console.log(
    //Pega o elemento (pelo Id) mas não o exibe
    //window.document.getElementById("titulo")

    //Pega o elemento e exibe seu conteúdo 
    window.document.getElementById("titulo").innerHTML
)
*/

/*
//Manda o valor da largura da janela p/ o elemento 'div' através do Id do div.
//Ou seja, será exibido na tela do navegador o valor da largura da janela.
document.getElementById("largura").innerHTML = screen.width
*/

//______________________________________________________________________________________
//                         ENTENDENDO O 'BOM'(Browser Object Model)

/*
window.console.log(
    //                              *** SCREEN ***
    //screen.:acessa todos os métodos possiveis que estão abaixo dele na hierarquia. 
    //Neste caso acessa a largura da janela pelo método 'width'
    //exibindo o valor da largura no console.
    //screen.width

    //exibe o valor da altura da janela no console.
   //screen.height

   //Exibe o objeto em questão, os métodos q estão sendo aplicados e seus respectivos valores.
   //screen.orientation

   //Volta a landscape primária.
   //screen.orientation.type

   //                               *** NAVEGATOR ***
   //Exibe informações do navegador.
   //navigator

   //Ex: .language exibe qual idioma é sendo utilizado.
   //navigator.language

   //                               ***LOCATION***
   //Exibe a localização da página como url, pasta, host etc.
  //location

  //                                *** HISTORY ***
  // 'history' tem alguns métodos como por exemplo: back = volta p/ pág anterior,
  //forward = vai p/ próxima página.
  //history
  )
  */

  //Exemplo p/ demonstrar os métodos de 'history', neste caso, (back e forward).
  /*
  //A função 'voltar' vinculada a um botão na pág html, tem função de retornar a pág anterior.
  function voltar() {
      history.back()
  }

  //Já a função 'adiantar' também vinculada a um botão na pág html, tem função de ir p/ a próxima pág.
  function adiantar() {
      history.forward()
  }
  */

  //______________________________________________________________________________________

  //                         ENTENDENDO O 'DOM'(Document Object Model)
  //            O DOM é responsável por acessar os elementos html como div, p, img.

  /*            ____________________*** getElementById ***____________________
  // Ex: 1
  //            Acessando o conteúdo do elemento div pelo seu id 'fruta'.
  console.log(
      document.getElementById("fruta").innerHTML
  )
  */

  /*            ____________________*** getElementsByClassName ***____________________
  // Ex: 2
  // Acessando o elemento div atravéz da sua classe(ou class) 'carro'
 console.log(
     document.getElementsByClassName("carro")
 )
 */

 /*
 // Acessando o conteúdo do elemento div, informando (dentro das chaves []) qual conteúdo será exibido 
 // pelo seu índice. (Exibindo o conteúdo no console)
 console.log(
    document.getElementsByClassName("carro")[0].innerHTML
 )
 */

 /*            ____________________*** getElementsByTagName ***____________________
 // EX: 3
    Ele tem a função de pegar um ou vários elementos apenas informando o nome da tag.
    OBS: Retornará um 'colection' no console.

//  Pegando todos os elementos div.
console.log(
    document.getElementsByTagName("div")
)

// Retorna o conteúdo do primeiro elemento div (informado pelo índice '0'). Esse retorno ocorre pelo 'innerHTML'
console.log(
    document.getElementsByTagName("div")[0].innerHTML
)
 */

/*            ____________________*** querySelector ***____________________
// EX: 4
    Ele pega o primeiro elemento da sequência. Ele pode pegar pela tag, id ou classe.
    OBS: Não retornará um 'colection' no console como no getElementsByTagName.

// Pegando o elemento pelo id 'p2'.
console.log(
    document.querySelector("#p2")
)

// Pegando o elemento pela classe 'div2'.
console.log(
    document.querySelector(".div2")
)
*/

/*            ____________________*** querySelectorAll ***____________________
//EX: 5
    Retorna um objeto nodelist representando todos os elementos do documento q correspode 
    ao valor especificado

// Aqui, a função pegará todos os elementos div de uma só vez pelas suas classes. Nesse caso 'times'.
//Retornará no console o 'Nodelist'.
console.log(
    document.querySelectorAll(".times")
)

// Aqui é selecionado todos os 'times europeus' informando o id 'futebol-europeu'(elemento pai) e 
// informando a classe 'times'(elementos filho) q corresponde aos times
console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")
)
 */

/*            ____________________*** innerHTML, style e Atributos ***____________________
// EX: 6
    innerHTML = exibir o conteúdo do elemento.

// Maneiras de usar o **innerHTML**

// 1) Apenas exibe o conteúdo do elemento 'p' no console.
console.log(
    document.getElementById("p1").innerHTML
)

// 2) Redefiniu o conteúdo do elemento 'p' atribuindo a ele um novo conteúdo. 
// Nesse caso, "Novo conteúdo".
document.getElementById("p1").innerHTML = "Novo conteúdo"

// 3) Redefiniu o conteúdo do elemento 'p' agora atribuindo uma função à variável 'paragrafo'
// em seguida acessa o innerHTML pela variável 'paragrafo', acesso o objeto style e suas 
// propriedades: color, backgroundColor, height.
var paragrafo = document.getElementById("p1")
paragrafo.innerHTML = "Novo conteúdo"

paragrafo.style.color = "red"
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "400px

// 4) Acessa os atributos do elemento 'img' atribuindo uma função à variável "imagem".
// Em seguida acessa os atributos do elemento: src, alt e width, informando seus valores respectivamente.
var imagem = document.getElementById("imagem")
imagem.src = "comp-code-7.jpg"
imagem.alt = "teste de imagem"
imagem.width = "1250"

*/

/*            ____________________*** createElement ***____________________
 A função do createElement é de fato criar elementos html pelo javascript, como div, a, p, img, etc.
// EX: 7

 // Cria o elemento div. O elemento pode ser observado no console.
console.log(
    document.createElement("div")
)

// Cria o elemento 'img' e seleciona a imagem pela propriedade src. No final mostra os elementos
// selecionados no console.
var imagem = document.createElement("img")
imagem.src = "TI-3.jpg"

// Cria o elemento 'p' e adiciona um conteúdo a ele o exibindo no console.
var paragrafo = document.createElement("p")
paragrafo.innerHTML = "Olá pessoal"

console.log(
    imagem, paragrafo
)
 */

/*            ____________________*** appendChild e removeChild ***____________________
// EX: 8

// primeiro: cria elemento 'p' e 'img' adicionando conteúdo neles;
// segundo: adiciona esses elementos dentro do elemento pai informando o id do pai em seguida informa
// o nome do elemento filho;
// Terceiro: remove o elemento filho do elemento pai.
var p = document.createElement("p")
p.innerHTML = "appendChild e removeChild"

var img = document.createElement("img")
img.src = "TI-3.jpg"

// Adiciona o elemento filho ao pai
document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

// remove o elemento filho do pai
document.getElementById("conteudo").removeChild(img)
*/

/*            ____________________*** childNodes ***____________________
// Retorna o último elemento node filho, da página html, nesse caso o elemento 'body'. É possivel ve-lo no console.
console.log(
    document.documentElement.lastChild
)

// Retorna o primeiro elemento node filho, da página html, nesse caso o elemento 'head'. É possivel ve-lo no console.
console.log(
    document.documentElement.firstChild
)

// childNodes retorna todos os nós filhos do 'body' exibindo uma lista "NodeList" no console.
// OBS: o NodeList é uma lista ordenada de nós.
console.log(
    document.body.childNodes
)

// Retorna quantidade de nós dessa lista atravéz do 'length'
var lista = document.body.childNodes
alert(lista.length)

// Retorna o conteúdo do índice 35. Nesse caso o elemento 'h1' e 'p' e seus respectivos conteúdos.
var lista = document.body.childNodes
alert(lista[35].innerHTML)
 */

/*            ____________________*** nodeName, nodeType e nodeValue ***____________________

console.log(
    document.body.childNodes
)

// ** NodeName **
// NodeName retorna o nome do elemento nó da árvore, neste caso, o elemento DIV.
var lista = document.body.childNodes
alert(lista[35].nodeName)

// ** NodeType **
___________________________________________

// NodeType retorna o tipo de nó.
// OBS:
// 1 = nó de elemento, 
// 2 = nó de atributo, 
// 3 = nó de texto, 
// 8 = nó de comentário.
console.log(
    document.body.childNodes
)
// Aqui ele retornará 8 porque o índice 1 é um comentário
var lista = document.body.childNodes
alert(lista[1].nodeType)

// ** NodeValue **
___________________________________________

// Retorna: 
// 1)'null' p/ nós de elelementos;
// 2) um 'atributo' p/ nós de atributo; 
// 3) ou um 'conteúdo' em nós de texto.

console.log(
    document.body.childNodes
)
// Retornará no alert o valor 'Botão'
var lista = document.body.childNodes
alert(lista[31].nodeValue)

console.log(
    document.body.childNodes
)
// alert(lista[35].childNodes[3].childNodes[0].nodeValue)

// passo 1: Lista os nós filhos do objeto 'body', depois e exibe o objeto 'DIV' (índice 35);
// passo 2: exibe o objeto 'p' (índice 3);
// passo 3: exibe o objeto 'texto' (índice 0);
// passo 4: exibe o valor do objeto 'texto', ou seja, exibe seu conteúdo.
var lista = document.body.childNodes
alert(lista[35].childNodes[3].childNodes[0].nodeValue)
*/

/*            ____________________*** parentNode ***____________________
// ParentNode retorna o elemento pai de um elemento qualquer.

// retorna o elemento 'amapa' que é pai do elemento 'laranjal'
console.log(
    document.getElementById("laranjal").parentNode
)

// Retornará o elemento pai dois niveis acima da hierarquia nesse caso 'brasil'.
console.log(
    document.getElementById("laranjal").parentNode.parentNode
)
*/
/*            ____________________***getAttribute, setAttribute e removeAttribute***____________________

// setAttribute atribui um atributo ao h1.
// 1) Nesse caso ele irá setar uma cor ao h1.
document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class", "red")
})

// 2) Irá remover o que foi atribuido no h1.
document.getElementById("btn-remove").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})

// 3) Mostrará no 'p' a cor que foi atribuido ao 'h1' depois de ter clicado no botão set ou remove.
document.getElementById("btn-get").addEventListener("click", function(){
    var value = document.getElementById("title").getAttribute("class")
    document.getElementById("class").innerHTML = value
})
*/

/*            ____________________***createTextNode e textContent***____________________

var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer.")

titulo.appendChild(texto)

titulo.textContent = "Um novo texto"
*/

/*            ____________________***children e insertBefore***____________________
// ** children ** ____________________

// Primeiro caso: usando children
// Retorna todos os itens que fazem parte da lista "ul". No htlm colection aparecerá dois indices '0' e '1',
// cada indice representa um bloco 'ul'.
var lista = document.getElementsByTagName("ul")
console.log(lista)

// Segundo Caso: usando children
// Retorna o bloco da primeira lista.
var lista = document.getElementsByTagName("ul")[0]
console.log(lista)

// Terceiro caso: usando children
// Retorna os elementos da primeira lista.
var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children
console.log(lista)

// ** insertBefore ** _____________________

// Retorna os elementos da primeira lista. Depois adiciona um novo item atribuido seu conteúdo a variável 'novoIten'
// e inserindo antes do indice 0.
var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children

var novoInten = document.createElement("li")
novoInten.textContent = "Suco de laranja"

lista.insertBefore(novoInten, itens[0])

console.log(lista)
*/

/*                           *** replaceChild *** 
// Substitui o conteúdo de um elemento por um novo conteúdo.

var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children

var novoItem = document.createElement("li")
novoItem.textContent = "Suco de laranja"

lista.insertBefore(novoItem, itens[2])

var lista2 = document.getElementsByTagName("ul")[1]
var itens2 = lista2.children
var novoItem2 = document.createElement("li")
novoItem2.textContent = "Margarina"

lista2.replaceChildren(novoItem2, itens2[2])

console.log(lista2)
*/

//______________________________________________________________________________________

 /*                          *** Tipos de Dados *** 

// * String *
var nome = "Vernan"
_____________________

// * Number *
var idade = 14
_____________________

// * Boolean *( verdadeiro ou falso)
var solteiro = false
_____________________

// * Array *
var frutas = ["goiaba", "maçã", "banana"]
_____________________

// * Object *
var carro = new Object()
carro.fabricacao = "2025"
carro.cor = "amarelo"
_____________________

// * Function *
var soma = function(a, b) {return a+b}
// alert (soma(6, 7))
alert (typeof(soma(6, 7))) // retorna 'number'

// typeof retorna o tipo de dado de uma variável
alert(typeof(carro))
*/

/*            ____________________ *** VARIÁVEIS (VAR, LET, CONST E ESCOPO) *** ____________________ 

// Escopo global, Escopo local
// var: indicado p/ Escopo Global;
// let: indicado p/ escopo Local;
// const : a variável não poderá ser mudada pois terá um valor fixo.

_____________________

// * VAR *
// É possivel rescrever a variável nome q/ inicialmente seu valor 
// era "Pedro" mudando posteriormente p/ "Sara"
var nome = "Pedro"
if(true) {
nome = "Sara"
}
console.log(nome)

_____________________


// * LET *
// A variável let só pode ser acessível no escopo local (dentro da função)
// EX: 
// 
var nome = "pedro "
if(true){
    let idade = 30
    console.log(nome, idade)
}
_____________________

// * CONST *
// O valor da variável 'a' será mantido
const a = 1
var b, c
b = 2
c = a + b
console.log(c) // Imprime o resulyado de a + b = 3

c = c + 1 // É acrescentado 1 ao resultado da variável c
console.log(c)
*/

/*            ____________________ *** ARRAYS EM JAVASCRIPT *** ____________________

// Um ARRAY é uma estrutura q/ pode armazenar uma coleção de elementos. Ou seja, 
// é uma  variá vel que podemos adicionar varios valores sendo esses valor numéricos, string,
// outros arrays, etc.

// Atribuimos os valores dentro dos colchetes
// Será retornado os as strings 'água' e 'gato'
let meuArray = ['água', 'gato']
console.log(meuArray)

// Retorna o tamanho do array, ou seja, a quantidade de itens nele
let meuArray = ['água', 'gato']
console.log(meuArray.length)

// Recebe um objeto ( os valores q/ estão dentro das chaves '{}')
// e depois recebe o valor do indice 2 que é '{memoria: '8gb'}'
let meuArray = ['água', 156, {memoria: '8gb'}]
console.log(meuArray[2])

// Acessa o valor do objeto (indice 2)
let meuArray = ['água', 156, {memoria: '8gb', HD: '100gb'}]
console.log(meuArray[2].memoria)

// * Array dentro de um  Array *
// Acessa o valor do (indice 3) depois o valor dele (indice 1)
let meuArray = [
    'água',
     156,
    {memoria: '8gb', HD: '100gb'},
    ['notebook apple', 'modelo 2020']
]
console.log(meuArray[3][1])
*/
/*____________________ *** OBJETOS EM JAVASCRIPT *** ____________________

// OBJETO: É uma coleção de propriedades, e uma propriedade é uma associação
// entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma
// função, que é então considerada a um método do objeto.

// o objeto 'pessoa' possui as seguintes propriedades: nome, idade, solteiro 
// e pets.
let pessoa = {
    nome: "Diego",
    idade: "17",
    solteiro: true,
    pets: ["cachorro", "gato"]
}
// Para informa o valor de certa propriedade basta informa o nome da proprie-
// dade precedido de um ponto exemplo console.log(pessoa.nome). Será retornado 
// "Diego".
// Para acessar um array basta informa o nome do array e o indice do valor que
// deseja acessar, por exemplo: console.log(pessoa.pets[1])
console.log(pessoa)

// Atribuindo novos valores às propriedade "nome" e "pets"
let pessoa = {
    nome: "Diego",
    idade: "17",
    solteiro: true,
    pets: ["cachorro", "gato"]
}
pessoa.nome = "Fernanda"
pessoa.pest = "papagaio"
console.log(pessoa.nome)
console.log(pessoa.pets[1])

// ** OBJETO DENTRO DO OBJETO **

// Temos os objetos "camaro" e "uno" ambos são propriedades do objeto "carro".
// O objeto "carro" é propriedade do objeto "pessoa".
let pessoa = {
    nome: "Diego",
    idade: "17",
    solteiro: true,
    pets: ["cachorro", "gato"],
    carro: {
        camaro: {
            placa: "12345",
            cor: "amarelo"
        },
        uno: {
            placa: "65432",
            cor: "preto"
        }
    }
}

// Acessando a propriedade "cor" pertencente ao objeto "uno"
console.log(pessoa.carro.uno.cor)

// Métodos como propriedade do objeto
let pessoa = {
    nome: "Diego",
    idade: "17",
    solteiro: true,
    pets: ["cachorro", "gato"],
    carro: {
        camaro: {
            placa: "12345",
            cor: "amarelo"
        },
        uno: {
            placa: "65432",
            cor: "preto"
        }
    },
    andar: function(km){
        alert(pessoa.nome + " andou " + km + "km")
    }
}

// Chamando o método "andar"
pessoa.andar(20)
*/

/*____________________ *** Operadores Aritméticos*** ____________________ 

let a = 10
let b = 5

let soma = a + b
let subtracao = a - b
let multiplicacao = a * b
let divisao = a / b
let resto = a % b
let exponenciacao = b**b

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)
console.log(exponenciacao)
*/
/*____________________ *** OPERADORES DE ATRIBUIÇÃO *** ____________________

// = ,-=, +=, /=, *=, %=, ++, --

let x = 5
let y = 2

// x = x + y ou x += y
x += y

console.log(x)
 */

/*____________________ OPERADORES LÓGICOS, COMPARAÇÃO E TERNÁRIO ____________________

// ** COMPARAÇÃO ** operadores: ==, ===, >, <, <=, >=, !=, !==

let x = 5
let y = 2

// x é igual 5?
console.log(x == 5) // retorna 'true'

// o tipo x é igual ao tipo "5"?
console.log(x === "5") // retorna false pois o sinal '===' compara o tipo de dado
____________________

// ** LÓGICO operadores ** : && (e), || (ou)

let media = 8
let frequencia = 80

// EXEMPLO1: Para q um aluno seja aprovado a media dele tem q ser maior ou igual a 7
// e (&&) frequencia maior a 80. Ou seja as duas condiçoes devem ser satisfeitos p/
// q haja a aprovação.
// Retornará true 
console.log(media >= 7 && frequencia >= 80)

// EXEMPLO2: Para q um aluno seja aprovado basta q uma das condições seja verdadeira
// Retornará true 
console.log(media >= 7 && frequencia >= 80)

____________________

// ** OPERADOR TERNARIO **

//EXEMPLO 1

let idade = 16
// Caso a condição resulte em verdadeiro será imprimido "pode votar". Se for falto "Não pode votar"
let eleitor = (idade >= 16) ? "Pode votar" : "Não pode votar" //o primeiro é verdadeiro o segundo falso
console.log(eleitor)

// EXEMPLO 2

let idade = 12
// Caso a condição resulte em verdadeiro será imprimido "pode votar". Se for falto "Não pode votar"
let eleitor = !(idade <= 16) ? "Pode votar" : "Não pode votar" //o primeiro é verdadeiro o segundo falso
console.log(eleitor)
 */
/* ____________________*** CONDICIONAIS (IF, ELSE, SWITCH) ***____________________
// IF ELSE
EX 1:

// Se a condição for  verdadeiro será executado o 'if' se não será executado 'else'
let pais = "brasil"
if(pais == "brasil"){
    console.log("Sou brasileiro")
} else{
    console.log("Sou gringo")
}

EX 2:

let pais = "brasil"
let estado = "pa"
if(pais == "eua"){
    console.log("Sou brasileiro")
} else if(estado == "pa"){
    console.log("Sou paraense")
}else{
    console.log("Sou gringo")
}
____________________

// ** SWITCH CASE **
let pais = "eua"

switch(pais) {
    case 'brasil':
        console.log("Sou brasileiro")
        break
    case 'eua':
        console.log("Sou americano")
        break
    default:
        console.log("Padrão")
        break
}
*/
