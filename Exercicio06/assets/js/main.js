
function Calculadora(){
    this.display = document.querySelector('.display');
    this. btnClear = document.querySelector('.btn-clear');

    this.inicia = function(){
        this.cliques();
        this.enter();
    };

    this.enter = function(){
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 13){
                this.resultado();   
            }
        });
    };



    this.cliques = function(){
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
    };

    this.digitarNum = function(num){
        this.display.value += num;
    };

    this.clearDisplay = function(){
        this.display.value = "";
    };

    this. clear = function(){
        this.display.value = this.display.value.slice(0, -1);
    };

    this.resultado = function(){
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
    };
    

}

const calculadora = new Calculadora();

calculadora.inicia();