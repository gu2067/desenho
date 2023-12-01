var canvas=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
var cor="black"

function circulo(x,y){
    ctx.beginPath()
    ctx.strokeStyle=cor
    ctx.lineWidth=tamanho
    ctx.arc(x,y,100,0,2*Math.PI)
    ctx.stroke()
}
canvas.addEventListener("mousedown",mousedown)
function mousedown(e){
    cor=document.getElementById("cor").value
    tamanho=document.getElementById("numero").value
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    circulo(mousex,mousey)
    clicado=true
}
function limpar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
canvas.addEventListener("mousemove",mousemovie)
function mousemovie(e){
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    if(clicado){
        ctx.beginPath()
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(mousex,mousey) 
        ctx.stroke()   
    
    }
    lastx=mousex
    lasty=mousey
}
canvas.addEventListener("mouseup",mouseup)
function mouseup(e){
    clicado=false
}