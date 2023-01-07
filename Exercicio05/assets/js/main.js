function criarCalculadora(){
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia(){
            this.cliques();
            this.enter();
        },

        enter(){
            this.display.addEventListener("keyup", (e) => {
                if(e.keyCode === 13){
                    this.resultado();   
                }
            });
        },

        cliques(){
            document.addEventListener("click", (e) =>{
                const el = e.target;
                if (el.classList.contains("btn-num")){
                    this.digitarNum(el.innerText);

                }
                if (el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }
                if (el.classList.contains("btn-del")){
                    this.clear();
                }
                if (el.classList.contains("btn-eq")){
                    this.resultado();
                }

            });
        },

        digitarNum(num){
            this.display.value += num;
        },

        clearDisplay(){
            this.display.value = "";
        },

        clear(){
            this.display.value = this.display.value.slice(0, -1);
        },

        resultado(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if (!conta){
                    alert("Conta inválida!");   
                    return;
                }
                this.display.value = String(conta);
            }catch{
                alert("Conta inválida!");  
                return;
            }
        }

    };
}

const calculadora = criarCalculadora();

calculadora.inicia();