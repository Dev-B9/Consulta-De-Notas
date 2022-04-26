const nota1 = document.getElementById ("nota1")
const nota2 = document.getElementById ("nota2")





const falta = document.getElementById ("falta")
const btncalculo = document.getElementById ("calculo")
const btnrecupe = document.getElementById("recuperar")
const btnhonor = document.getElementById("cuadro")

const total = document.getElementById ("ganar")
const recupe = document.getElementById("recupe")
const honor = document.getElementById("honor")



btncalculo.addEventListener("click", enviarcalculo)
btnrecupe.addEventListener("click", enviarcalculo)
btnhonor.addEventListener("click", enviarcalculo)


function enviarcalculo(){
    
    if(nota1.value === null || nota1.value=== ''){
        alert("Campo Vacio Nota 1")
        location.reload()
    }
    if(nota2.value === null || nota2.value=== ''){
        alert("Campo Vacio Nota 2")
        location.reload()
    }

    
    return false
}



function verificar1(){
    
    let valor2 = Number(nota2.value)
    if((valor2 < 1 || valor2 >5) ){
        alert("Solo Numeros Del 1 al 5")
        location.reload()
      }
}

function verificar(){
    let valor = Number(nota1.value)
    
    
      if((valor < 1 || valor >5) ){
            alert("Solo Numeros Del 1 al 5")
            location.reload()
            
      }
    
}




function ganarMateria(){
   
    

    let data1 = Number(nota1.value) * 0.30
    let data2 = Number(nota2.value)* 0.30
    let final=  data1 + data2
    
    let nFinal = 3.5 - final
    let nFinal1 = nFinal / 0.40
    total.textContent = nFinal1.toFixed(1)
    
    
    if(nFinal1 >5){
        total.textContent = "Llorelo " + nFinal1.toFixed(1)
    }
    
    
}

function recuperar(){
    let data1 = Number(nota1.value) * 0.30
    let data2 = Number(nota2.value)* 0.30
    let final=  data1 + data2
    
    let nFinal = 2.0 - final 
    let nFinal1 = nFinal / 0.40
    recupe.textContent = nFinal1.toFixed(1)

    if(nFinal1 < 0){
        recupe.textContent = "Ya se enuentra en el rango"
    }

}


function cuadro(){
    let data1 = Number(nota1.value) * 0.30
    let data2 = Number(nota2.value)* 0.30
    let final=  data1 + data2
    
    let nFinal = 4.0 - final
    let nFinal1 = nFinal / 0.40
    honor.textContent = nFinal1.toFixed(1)

    if(nFinal <0){
        honor.textContent = "Ya estas en el"
    }if(nFinal1 >5){
        honor.textContent = "Llorelo " + nFinal1.toFixed(1)
    }
}



function changeColor(){
    let color = document.getElementById("color").value

    document.body.style.background = color;

}

