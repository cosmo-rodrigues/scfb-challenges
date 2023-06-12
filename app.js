/**

  - Alterei o module.exports de todos os testes, para ficarem todo iguais
  - Alterei 3 rotas, inserindo id nelas, para todas a busca mais assertiva
  - Adicionei middleware de error para pegar todos os erros da aplicação e
  garantir que não haverá interrupção na execução da api
  - Inseri validações em todas as requisições, para garantir a integridade
  dos dados

 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const handleError = require('./middleware/handleError');

const teste1 = require('./teste1');
const teste2 = require('./teste2');
const teste3 = require('./teste3');
const teste4 = require('./teste4');
const teste5 = require('./teste5');
const userRole = require('./middleware/userRole');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function (_req, res) {
  res.send(`get users/id </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/id </br>
  put users/access/id </br>
  `);
});

app.get('/users/:id', teste1.getUser);
app.get('/users', teste1.getUsers);
app.post('/users', teste2.createUser);
app.delete('/users', userRole, teste3.deleteUser);
app.put('/users/:id', userRole, teste4.updateUser);
app.get('/users/access/:id', teste5.getUserAccessCount);
app.use(handleError);

const port = 3000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
