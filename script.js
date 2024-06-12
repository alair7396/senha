
let chaves=['zé']
let usuario=['reizé']
let tentativas=[]

function tentativa(){
    let palavra=document.getElementById('password').value
    let palavra2=document.getElementById('usuario').value
    if(chaves.indexOf(palavra)!=-1 && usuario.indexOf(palavra2)!=-1){
       // window.location.href='about.html'
        window.open('about.html')
    }
    else{
        alert('errou')
       tentativas.push(palavra)
       document.getElementById('lista').innerHTML=tentativas
       document.getElementById('password').value=null

    }
}
function voltar(){
    window.location.href='index.html'
}
