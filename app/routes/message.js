module.exports = app => {

    app.get('/form', (req, res) => {
        res.render('sendMessage');
    })

}