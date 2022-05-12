module.exports =  {
    menu,
    saude,
    esporte,
    futboolEsporte,
    receita,
    lazer,
    classificados,
    eletronicos,
    contato

}

function menu (req, res){
    res.render('noticias/frm_noticiasMenu.ejs',
        {title: 'Noticias',
            autor: '2º DSM - WEB II'
        })
}

function saude (req, res){
    res.render('noticias/frm_saudeIndex.ejs',
        {title: 'Saude',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function esporte (req, res){
    res.render('noticias/frm_esporteIndex.ejs',
        {title: 'Esporte',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function futboolEsporte (req, res){
    res.render('noticias/frm_futboolIndex.ejs',
        {title: 'Futbool',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function receita (req, res){
    res.render('receita/frm_ReceitaMenu.ejs',
        {title: 'Receita',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function lazer (req, res){
    res.render('lazer/frm_lazerindex.ejs',
        {title: 'Lazer',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function classificados (req, res){
    res.render('classificados/frm_classificadosIndex.ejs',
        {title: 'Classificados',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function eletronicos (req, res){
    res.render('eletronicos/frm_eletronicosIndex.ejs',
        {title: 'Eletronicos',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}

function contato (req, res){
    res.render('contatos/frm_contatosIndex.ejs',
        {title: 'Contatos',
            autor: 'Guilherme de Almeida M. Ferreira'
        })
}