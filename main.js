const { app, BrowserWindow, ipcMain, ipcRenderer, remote } = require('electron')
const path = require('path')
const appExpress = require('./config/server');
const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagem'); 

app.on('ready', function () {
  let win = new BrowserWindow({
    width: 800, height: 600, webPreferences: {
      nodeIntegration: true
    }
  });

  ipcMain.on('para', (event, arg) => {
    if (arg.status) {
      win.hide();
    }
  })

  appExpress.get('/whats', (req, res) => { 
    let msg = req.query.msg;
    let nome = req.query.nome; 
    let contato = req.query.contato;
    console.log(req.query);
    Mensagem.create(req.query);       
    send(nome, contato,msg);
    res.send("sua mensagem foi enviada! por favor aguarde nosso contato");
  });

  function send(nome, contato, msg) {
    let telefone = "5511988991561";
    let url = `https://web.whatsapp.com/send?phone=${telefone}&text=Nome: ${nome} %0aTelefone: ${contato}  %0a${msg}`;
    win.loadURL( url ,
      { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36' });
    win.webContents.executeJavaScript(" let {ipcRenderer, remote} = require('electron'); let sended = false; function setTimeSend() { let btn = document.querySelector('._3M-N-'); let input = document.querySelector('._3u328'); if (input.textContent && !sended) { btn.click(); sended = true; } else if (sended){ ipcRenderer.send('para', {status: true}); sended = false; } } setInterval(setTimeSend, 3000);");
  }

  appExpress.listen(3001);

});



