


function verificar(){
let nmr = document.getElementById('nmrhr')
let res = document.getElementById('resul')
let num = Number(nmr.value)
res.innerHTML= ''
if(num == '' && num == 0){
    window.alert('Por Favor Insira Um Numero.')
    
}else if(num <= 2){
res.innerHTML += `Você Joga ${num} Horas Por Dia Isso é Normal Continue Assim.`
}else{

if(num == 3){
    res.innerHTML += `Você Joga ${num} Horas Por Dia Isso é Bom Mas um Pouco Elevado.`
}else{  
if(num >= 4 && num <= 5){ 
           res.innerHTML+= `Você Joga ${num} Horas Por Dia Isso é Muito, Preucupe-se Um Pouco.`
}else{
   if(num >= 6 && num <= 7){
    res.innerHTML +=`Você Joga ${num} Horas Por Dia Isso é Muito Preocupante, Recomendo Que Procure Ajuda.`
   }else{
   if(num >= 8 && num <= 9){
res.innerHTML += `Você Joga ${num} Horas Por Dia Esse Numero é Muito Alto, é Necessario Que Você Procure Ajuda Urgente.`
   }
}
}     
}

}


}
let res = document.getElementById('dica1')
function dica1(){
    
    res.innerHTML = ''
    res.innerHTML += `<strong>Coma Menos Açucar!</strong>`
    res.style.color = 'rgb(0, 255, 0)'
     res1.innerHTML = ''
     res2.innerHTML = ''
     res3.innerHTML =''
  
    
}
let res1 = document.getElementById('dica2')
function dica2(){
   
   res1.innerHTML = ''
   res1.innerHTML += `<strong>Faça Mais Exercicios!</strong>`
   res1.style.color = 'rgb(0, 255, 0)'
   res.innerHTML = ''
   res2.innerHTML = ''
  res3.innerHTML= ''
}
let res2 = document.getElementById('dica3')
function dica3(){
    res2.innerHTML = ''
    res2.innerHTML += `<strong> Tenha Uma Boa Noite De Sono!</strong>`
    res2.style.color = 'rgb(0, 255, 0)'
    res.innerHTML = ''
    res1.innerHTML = ''
    res3.innerHTML = ''
    

}
let res3 = document.getElementById('dica4')
function dica4(){
    res3.innerHTML = ''
    res3.innerHTML+= `<strong>Crie Uma Agenda Onde Você Colocara Seus Horarios Para Dormir,Jogar e Estudar.`
    res3.style.color = 'rgb(0, 255, 0)'
    res.innerHTML= ''
    res1.innerHTML = ''
    res2.innerHTML= ''
}
function retorno(){
    res.innerHTML =''
    res1.innerHTML =''
    res2.innerHTML = ''
    res3.innerHTML = ''
}

