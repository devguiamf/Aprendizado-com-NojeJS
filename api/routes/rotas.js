const controller = require('../controllers/controllers.js')

app.get('/', controller.rotaRaiz);

app.get('/cursos/:cursoid', controller.cursoGetById);

app.get('/cep/:cepid', controller.cepGetById);

app.get('/moedas/:moedasid', controller.moedasGetById);

app.get('/github/:perfilid', controller.githubGetById);

app.get('/sabesp/:dataid', controller.sabespGetById);