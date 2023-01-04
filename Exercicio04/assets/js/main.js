const inputTarefa = document.querySelector(".tarefa");
const btnTarefa = document.querySelector(".adicionar");
const tarefas = document.querySelector(".tarefas");



function criarTarefa(tarefa) {
    const li = document.createElement("li");
    li.innerHTML = tarefa;
    tarefas.appendChild(li);
    btnApagar(li);
    inputTarefa.value = "";
    inputTarefa.focus();
    salvarTarefas();

}

function apagarTarefa(tarefa){
    tarefa.remove();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll("li");
    const listaTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Excluir", "");
        tarefaTexto = tarefaTexto.trim();
        listaTarefas.push(tarefaTexto);
    }
    
    const json = JSON.stringify(listaTarefas);
    localStorage.setItem("tarefas",json);


}


function btnApagar(li){
    li.innerHTML += " ";
    const btnApagar = document.createElement("button");
    btnApagar.innerText = "Excluir";
    btnApagar.setAttribute("class", "apagar");
    btnApagar.setAttribute("title", "Excluir está tarefa");
    li.appendChild(btnApagar);

}


inputTarefa.addEventListener("keypress", function (e){

    if (e.keyCode === 13){
        if (!inputTarefa.value) {
            return;
        }
        criarTarefa(inputTarefa.value);
    }
});




btnTarefa.onclick = function(){
    
    if (!inputTarefa.value) {
        return;
    }

    criarTarefa(inputTarefa.value);

}


document.addEventListener("click", function(e){
    const element = e.target;
    if (element.classList.contains("apagar")) {
        apagarTarefa(element.parentElement); 
        salvarTarefas();
    }

})

function carregarTarefas(){
    const tarefas = localStorage.getItem("tarefas");   
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas){
        criarTarefa(tarefa);
    }

}
carregarTarefas()