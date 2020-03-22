const cont = 10;
let time = cont * 60 ;

const countdownEL = document.getElementById('countdown');

var down = setInterval(updateCount,1000);
function updateCount(){
    const min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    sec = sec < 10 ? '0' + sec: sec;
    countdownEL.innerHTML=(`${min}:${sec}`);

    if (time <=0){
        clearInterval(down);
        countdownEL.innerHTML=('Done');
    }
    time--;
}