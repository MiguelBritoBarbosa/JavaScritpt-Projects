class ValidaFormulario{
    constructor() {	
        this.formulario = document.querySelector('.formulario');
        this.eventos();


    }

    eventos(){
        
        for (let campo of this.formulario.querySelectorAll('.required')){
            campo.addEventListener("keyup", e => {
                this.isValid(campo);
            });
        }

        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let validação = this.isValid();
        console.log(validação);
        if (validação){
            alert("Formulário enviado");
        };
    }

    removeError(campo){
        if (document.querySelector(`div.${campo.name}`)){
            const div = document.querySelector(`div.${campo.name}`);
            div.remove();
            campo.classList.remove("errorBorder");
        }
    }

    isEmpty(campo){
        const label = campo.previousElementSibling.innerText.slice(0, -1);
        this.createError(campo, `"${label}" não pode estar em branco`);
        return false;
    }

    cpfValidate(campo){
        const validaCpf = new ValidaCPF(campo.value);
        if(!validaCpf.valida()){
            const label = campo.previousElementSibling.innerText.slice(0, -1);
            this.createError(campo, `${label} inválido`);
            return false;
        }
    }

    userValidate(campo){
        if (campo.value.length < 3  || campo.value.length > 12 || !campo.value.match(/^[a-zA-Z0-9]+$/g)){
            const label = campo.previousElementSibling.innerText.slice(0, -1);
            this.createError(campo, `Digite um ${label} válido`);
            return false;
        }
    }

    passwordValidate(campo){
        if (campo.value.length < 6 || campo.value.length > 12){
            const label = campo.previousElementSibling.innerText.slice(0, -1);
            this.createError(campo, `A ${label} precisa ter entre 6 a 12 caracteres`);
            return false;
        }
    }

    comparePasswords(campo){
        const senha = this.formulario.querySelector("#senha");
        if(campo.value !== senha.value){
            this.createError(senhaR, `As senhas precisam ser idênticas`);
            return false;
        }
    }


    fieldValidate(field){
        let valid = true;
        this.removeError(field);

        if (!field.value){
            this.isEmpty()
        }
        else if (field.name === "nome" || field.name === "sobrenome"){
                
            if (field.value.length < 3){
                valid = this.isEmpty(field);
            }
        }
        else if(field.name === "cpf"){
            this.cpfValidate(field);
        }
        else if(field.name === "usuario"){
            this.userValidate(field);
        }
        else if(field.name === "senha"){
           this.passwordValidate(field);
        }
        else if (field.name === "senhaR"){
            this.comparePasswords(field);
        }
        if (valid) this.removeError(field);

        return valid;
    }


    isValid(campo = null){

        let valid = true;
        
        if (campo){
            valid = this.fieldValidate(campo);
        }
        else{
            for(let errors of this.formulario.querySelectorAll(".error")){
                errors.remove();
            }
    
            for (let campo of this.formulario.querySelectorAll(".required")){
                campo.classList.remove("errorBorder");
            }
    
            for (let campo of this.formulario.querySelectorAll('.required')){
                valid = this.fieldValidate(campo)
            }
        }

        return valid;
    }



    createError(campo, message){
        campo.classList.add("errorBorder")
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add("error");
        div.classList.add(`${campo.name}`);
        campo.insertAdjacentElement("afterend", div);

    }




}


const validação = new ValidaFormulario();