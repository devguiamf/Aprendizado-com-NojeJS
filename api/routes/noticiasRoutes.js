const controllerNoticias = require('../controllers/noticiasControllers.js')

app.get('/noticias/noticiasMenu', controllerNoticias.menu)

    app.get('/noticias/noticiasMenu/saude', controllerNoticias.saude)

    app.get('/noticias/noticiasEsporte/Esporte', controllerNoticias.esporte)
        app.get('/noticias/noticiasEsporte/Esporte/futbool', controllerNoticias.futboolEsporte)

app.get('/receita/receitaMenu', controllerNoticias.receita)

app.get('/lazer/lazerMenu', controllerNoticias.lazer)

app.get('classificados/classificadosMenu', controllerNoticias.classificados)

app.get('/eletronicos/eletronicosMenu', controllerNoticias.eletronicos)

app.get('/contatos/contatosMenu', controllerNoticias.contato)











