// ANOTAÇÕES PROJETO

1. CONFIGURAÇÕES DO DOCUMENTO docker-compose.yml
2. INICIALIZAÇÃO DO CONTAINER / comando: docker-compose -up
3. INSTALAÇÃO DO PRISMA / comando: npm i -g prisma@1.28
4. RODAR O PRISMA comando: prisma init --endpoint http://localhost:4466
5. RODAR O PRISMA DEPLOY, comando: prisma delpoy

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
