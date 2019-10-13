# project_node
Projeto Node usando migrations 

yarn init -y  

yarn add express

yarn add sequelize

yarn add sequelize add -D /*dependencia de desenvolvimento*/

yarn sequelize --init

yarn add pg pg-hstore

yarn sequelize migration:create --name=create-users

Docker 
docker run --name database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres:9.3


yarn dev para rodar o projeto
