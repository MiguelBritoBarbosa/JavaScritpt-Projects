const form = document.querySelector('#form');


function IMC(){

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');
       
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso || peso <= 0 || peso > 300){
            setResultado("Peso inválido", false);
            console.log("teste")
            return;
        }
        else if (!altura || altura < 0.30 || altura > 2.50){
            setResultado("Altura inválido", false);
            return;
        }
        const imc = getIMC(peso, altura);
        const saude = getSaude(imc);

        const msg = `Seu IMC é ${imc} você está com ${saude}`;

        setResultado(msg);
    })
}

function getSaude(imc){
    const nivel = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau 1",
        "Obesidade grau 2",
        "Obesidade grau 3"
    ];

    if (imc >=39.9)  return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];


}


function getIMC(peso, altura){
    return (peso/altura**2).toFixed(2);
}


function setResultado(msg, isvalid=true){
    const resultado = document.querySelector('#resultado');
    
    if (isvalid){
        resultado.innerHTML = `<p class='paragrafo-resultado'>${msg}</p>`;
    }
    else{
        console.log(resultado)
        resultado.innerHTML = `<p class='paragrafo-resultado-invalido'>${msg}</p>`;
    }
}

IMC()