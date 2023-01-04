
function getTime(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {
        hour12: false,
        timeZone: "UTC"
    });

}


const cronometro = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let Timer;

function Start(){
    cronometro.classList.remove('pause');
    clearInterval(Timer);
    Timer = setInterval(function(){
        segundos++;
        cronometro.innerHTML = getTime(segundos);
    }, 1000)
}



iniciar.onclick = function(){
    Start();
}


pausar.onclick = function(){
    clearInterval(Timer);
    cronometro.classList.add('pause');
}


zerar.onclick = function(){
    cronometro.classList.remove('pause');
    clearInterval(Timer);
    cronometro.innerHTML = "00:00:00"
    segundos = 0;
}