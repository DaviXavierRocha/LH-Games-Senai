//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
}
//Validação de Login
function login(){
    var logado = 0; //Booleano, se for 0(lower case) deslogado
    var usuario = document.getElementsByName('usuario')[0].value;//procurar elemento "usuário"
    usuario = usuario.toLowerCase();//converte as letras para minúsculas
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();//converte as letras para minúsculas
    if(usuario == "admin" && senha == "123456"){ // comparador de usuário e senha
    window.location = "index.html";//ao passar a senha irá voltar para a página inicial
    logado = 1;}//mudar variável "logado" para 1, indicando ao sistema que o usuário está logado
    if(logado == 0){
    alert("Acesso Negado. Dados incorretos");
    }
}
//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}