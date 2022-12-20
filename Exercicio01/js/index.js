function Form() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        Pessoa = {
            Nome: nome.value,
            Sobrenome: sobrenome.value,
            Peso: peso.value,
            Altura: altura.value,
        };

        pessoas.push(Pessoa);
        console.log(pessoas);
        resultado.innerHTML += `<p>${Pessoa.Nome} ${Pessoa.Sobrenome} ${Pessoa.Peso}kg ${Pessoa.Altura}m</p>`;
    });
}

Form();
