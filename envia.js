let {ipcRenderer, remote} = require('electron');
let sended = false;
function setTimeSend() {
    let btn = document.querySelector('._3M-N-');
    let input = document.querySelector('._3u328');
    if (input.textContent && !sended) {
        btn.click();
        sended = true;
    } else if (sended){
        ipcRenderer.send('address's, {status: true}); 
        sended = false; 
    }
}
setInterval(setTimeSend, 3000);
