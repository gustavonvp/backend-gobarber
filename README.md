# modulo-02

## Aplicação GoBarber feita no GoStack(bootcamp) da RocketSeat 
<p align="center">Backend da Aplicação GoBarber feita no Bootcamp GoStack da Rocketseat</p>

- BACKEND - :waxing_gibbous_moon:
- FRONTEND - :new_moon:
- MOBILE - :new_moon:

## Features
- [x] Criar e editar horarios de agendamentos
- [x] Criar e gerenciar barbeiros cadastrados no sistema
- [x] Fila de envio de email 

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com)
- [Node.js](https://nodejs.org/en/)
- [Bee-queue](https://github.com/bee-queue/bee-queue)
- [Nodemailer](https://nodemailer.com)
- [Sequelize](https://sequelize.org/)
- [Mongoose](https://mongoosejs.com/)
- [pg](https://node-postgres.com/)
- [Jsonwebtoken](https://jwt.io/)
- [PostgresSql](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Redis](https://redis.io/)


## Rodando o projeto

$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

$ docker run --name redisbarber -p 6379:6379 -d -t redis:alpine

$ docker run --name mongobarber -p 27017:27017 -d -t mongo  

# Após executar os comandos acima, verificar se as imagens estão rodando no terminal:
$ docker ps

# Caso as imagens estejam paradas/não aparecem no terminal, executar:
$ docker start database
$ docker start redisbarber
$ docker start mongobarber

# Entrar na raiz do projeto e rodar o comando:
$ yarn install

# Ainda na raiz do projeto, rodar o comando:
$ yarn start

- Utilizar o arquivo .env-example para configurar variáveis locais e softwares complementares para testar os endpoints da aplicação

### Softwares para testar o backend

- Imsomnia
- MongoDB Compass
- Postbird


<h4 align="center"> 
	🚧  React Select 🚀 Em construção...  🚧
</h4>

![Badge](https://img.shields.io/github/issues/Rocketseat/unform)
