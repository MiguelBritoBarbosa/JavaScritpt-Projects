

function ValidaCPF(cpfEnviado){

    Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, "");
        }
    });

}


ValidaCPF.prototype.valida = function(){
    
    if (typeof this.cpfLimpo === undefined) return false;

    if (this.cpfLimpo.length !== 11) return false;

    if (this.Sequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    let digito1 = this.Digitos(cpfParcial);
    digito2 = this.Digitos(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};


ValidaCPF.prototype.Digitos = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1;

    total = cpfArray.reduce((ac, val) =>{
        ac += (contador * Number(val));
        contador--;
        return ac
    }, 0)

    digito = 11 - (total % 11);
    
    return digito > 9 ? '0' : String(digito);


};

ValidaCPF.prototype.Sequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;

};


const cpf = new ValidaCPF("563.703.288-20");

if (cpf.valida()){
    console.log("CPF válido");
}
else{
    console.log("CPF inválido");
}