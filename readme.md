# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificações nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user

Possuímos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possível melhorar.
Veja o que pode deixar ele melhor escrito e mais performático.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluído e deixe o código mais performático.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Defina uma forma de criar permissão para o usuário, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.
