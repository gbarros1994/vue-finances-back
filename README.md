// ANOTAÇÕES PROJETO

1. CONFIGURAÇÕES DO DOCUMENTO docker-compose.yml
2. INICIALIZAÇÃO DO CONTAINER / comando: docker-compose -up
3. INSTALAÇÃO DO PRISMA / comando: npm i -g prisma@1.28
4. RODAR O PRISMA comando: prisma init --endpoint http://localhost:4466
5. RODAR O PRISMA DEPLOY, comando: prisma deploy

- com prisma em ação já podemos trabalhar com nosso PLAYGROUND
- criar um usuario para teste, seguir o seguinte comando:
  mutation {
  createUser(data: {
  name: "Gerson Alefer de Barros"
  }) {
  id
  name
  }
  }

6. MODELAR DADOS COM DataModel do Prisma
7. GERAR CRUD e Realtime Operations com novo Deploy / comando: prisma deploy
   - Caso haja uma alteração em uma tabela já existente, atentar para campo obrigatório.
8. GERANDO Prisma Client
   - Alteração no arquivo prisma.yml, add generate:
     "- generator: javascript-client
     output: ./generated/prisma-client"
   - Para gerar basta usar o comando: prisma generate
9. INTALAÇÃO PRISMA CLIENTE, comando: npm i -E prisma-client-lib@1.28.3
10. CRIAÇÃO DO index.js
    - importação "prisma-client"
    - criação de usuario para teste
11. INSTALAÇÃO graphql-yoga, comando: npm i -E graphql-yoga@1.17.4
12. CRIAÇÃO DO SCHEMA
    - passando valor do usuario (não obrigatorio retorno)
13. CRIAÇÃO DO RESOLVER NO index.js
14. IMPORTAÇÃO DO graphql-yoga NO index.js
    - criação query consulta
15. CRIAÇÃO PASTA prisma
    - movimentação dos arquivos para a pasta
16. CRIAÇÃO PASTA src
    - movimentação dos arquivos index.js/schema para a pasta
17. CONFIGURAÇÃO prisma.yml, para gerar generate em outro lugar
18. CRIAÇÃO DE SCRIPT START package.json
19. GERAR UM NOVO generate, comando: prisma generate
20. NPM START
21. CRIAÇÃO DO Dockerfile
22. CRIAÇÃO DO .dockerignore
23. APOS TODO PROCESSO, RODAR O comando: docker compose up -d
24. CRIAÇAO .env
25. INSTALAÇÃO nodemon -D -E @1.18.10
    - irá restartar meu container quando atualizado
    - "dev": "npx nodemon --delay 1000ms"
26. command: npm run dev
27. INSTALAÇÃO prisma-binding - Melhorar o desempenho em consultas
28. INSTALAÇÃO jsonwebtoken
29. INSTALAÇÃO bcrypt - configurar bcrypt
    - configurações password
