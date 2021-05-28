let botaoCalcular = document.getElementById("btnCalcular");

function calcularIMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");
  
   if(altura !== "" && peso !== ""){
    
     let imc = (peso / (altura ** 2)).toFixed(1);
     let mensagem = ""
     
     if(imc < 18.5){
       mensagem = "Você está abaixo do peso!"
     }else if(imc < 25){
       mensagem = "Parabéns. Você está com o peso ideal!"
     }else if(imc < 30){
       mensagem = "Você pode estar levemente acima do peso."
     }else if(imc<35){
       mensagem = "Cuidado. Você pode estar com Obesidade Grau I! Visite seu médico."
     }else if(imc<40){
       mensagem = "Cuidado. Você pode estar com Obesidade Grau II! Visite seu médico."
     }else{
       mensagem = "Cuidado. Você pode estar com Obesidade Grau III! Visite seu médico."
     }
   
   resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;
     
   }else{
     resultado.textContent = "Preencha todos os campos para obter o resultado.";
   }
}

botaoCalcular.addEventListener('click', calcularIMC);

