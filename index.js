const express = require('express')
const path = require('path');


const app = express()


// Middleware para manejar datos de formularios y archivos estáticos
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


    
  


app.get('/', (req, res)=>{
   
    res.locals.inicio= '/'
    res.render('index.ejs')

})

app.get('/sobremi', (req, res)=>{
   
    res.locals.inicio= '/'
    res.render('sobre-mi.ejs')

})
app.get('/servicios', (req, res)=>{
   
    res.locals.inicio= '/'
    res.render('servicios.ejs')

})



app.get('/tour', (req, res)=>{
    res.locals.selecionado= 'tour'
    res.render('index.ejs')
 
})
app.get('/prod', (req, res)=>{
    res.locals.selecionado= 'prod'

    res.render('index.ejs')
 
})
app.get('/features', (req, res)=>{
    res.locals.selecionado= 'features'

    res.render('index.ejs')
 
})

app.get('/contacto', (req, res)=>{
    res.locals.selecionado= 'contacto'

    res.render('index.ejs')
 
})

 

app.listen(3000, ()=>{
    console.log('exch')
})

