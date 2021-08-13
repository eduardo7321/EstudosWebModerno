const bodyParse = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParse.urlencoded({ extended: true}))
app.use(bodyParse.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/teste', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Executando...start'))



/*const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/teste', (req, res) => res.send('OK'))
app.listen(8080, () => console.log('Executando...start'))*/



//app.use(express.urlencoded({ extended: true}))
//app.use(express.json())
/*
//teste
//const express = require('express');
const consign = require('consign');

module.exports = () => {    
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    consign()
        .include('controllers')
        .into(app)
    return app;
}
//teste
*/