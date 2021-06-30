function botao (){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
    

    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://google.com");
}

function trocar(elemento){
    /*document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";*/
    elemento.innerHTML = "Obrigado por passar"
    //alert("você passou o mouse")
}

function voltar(elemento){
    /*document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; */
    elemento.innerHTML = "Passe"
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function validaIdade (idade){
    
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("idade");
alert(validaIdade(idade));
*/

/*var n1 = prompt("n1");
var n2 = prompt("n2");

alert(soma(n1, n2))

function soma (n1, n2){
    return n1+n2;
}
*/


/*var data = new Date ;
alert(data.getMonth());
console.log(getDat)
*/
/*var count;
for(count = 0; count<5; count++){
    console.log(count);
}
*/

/*var count = 0;
while(count<=5){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade?")

if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"pera", cor:"verde"}];
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.nome);
*/

/*var lista = ["Maça", "Pera", "Laranja"];
lista.push("Morango");
lista.pop();
console.log(lista.toString());
console.log(lista.length);
console.log(lista);
console.log(lista[1]);
console.log(lista.join(" - "))
*/

/*var nome = "Paulo Rubens";
var n1 = 21;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem "+ idade + " anos");
//alert(idade+idade2);
console.log(nome);
console.log(frase.toLowerCase());
console.log(frase.replace("Japão", "Brasil"))
console.log(n1*n2);
//alert(frase.replace("Japão", "Brasil"));
*/