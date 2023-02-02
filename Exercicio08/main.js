class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, "cpfLimpo", {
            value: cpfEnviado.replace(/\D+/g, ""),
            writable: false,
            enumerable: false,
            configurable: false
        });
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) == this.cpfLimpo;
    }

    static Digitos(cpf){
        let total = 0;
        let reverso = cpf.length + 1;
        for (let num of cpf) {
            total+= reverso * Number(num);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }

    geraCpf(){
        const cpf = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.Digitos(cpf);
        const digito2 = ValidaCPF.Digitos(cpf + digito1);
        this.novoCPF = cpf + digito1 + digito2;


    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== "string") return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraCpf();
        return this.novoCPF == this.cpfLimpo;


    }



}

const validaCpf = new ValidaCPF("563.703.288-20");

if (validaCpf.valida()){
    console.log("CPF válido");
}
else{
    console.log("CPF inválido");
}