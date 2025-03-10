function login(){
    // pegando os valores digitados nos input (mesma coisa que getElementById)
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    // condicional que se existir nome e senha e se os valores forem iguais a admin e 1234
    if(nome && senha && nome === "admin" && senha === "1234"){
        // cria um objeto com as informações de nome, a data gerada com javascript e um id com Math.random
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000),
        }
        // seta no local storage o objeto criado acima
        localStorage.setItem("usuario", JSON.stringify(user))
        // manda para pagina da loja via href
        window.location.href = "../Loja"
    }else{
        // pinta de rosa os inputs caso haja erro e faz aparecer o modal de erro
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid lightpink"
        document.getElementById("senha").style.border = "2px solid lightpink"
    }
}

function fecharError(){
    // volta as cores originais dos inputs e desaparece com o modal de erro
    document.getElementById("nome").style.border = "2px solid aliceblue"
    document.getElementById("senha").style.border = "2px solid aliceblue"
    document.getElementById("error-modal").style.display = "none"
}

function showPassword(){
    // pega o input com id senha
    var inputSenha = document.querySelector("#senha")
    // condicional que se o atributo tipo do input for senha entao muda pra texto
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
}