var cont = 10;
function timerDec(){
    if(cont >=0){
        console.log(cont);
        cont--;
    }else{
        clearInterval(desafio);
        console.log('Fim do intervalo');
    }
}

var desafio = setInterval(timerDec,1000);
