// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

app.on('ready', function () {
  let telefone = "5511976892209";
  let mensagem = 'testando envio de mensagens';
  let  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(`https://web.whatsapp.com/send?phone=${telefone}&text=${mensagem}`,
  {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'});
  win.webContents.executeJavaScript(" let sended = false; function setTimeSend() { let btn = document.querySelector('._3M-N-'); let input = document.querySelector('._3u328'); if (input.textContent && !sended) { btn.click(); sended = true; } } setInterval(setTimeSend, 3000);"); 
});



