let sended = false;

function setTimeSend() {
    let btn = document.querySelector('._3M-N-');
    let input = document.querySelector('._3u328');
    if (input.textContent && !sended) {
        btn.click();
        sended = true;
    }
}
setInterval(setTimeSend, 3000);
