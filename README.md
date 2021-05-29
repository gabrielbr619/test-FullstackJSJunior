# **Projeto FullstackJS Junior**

![image](https://user-images.githubusercontent.com/79314576/120045271-fc862d80-bfe5-11eb-9377-0eac68b0cffb.png)

## *O que é*

Trata-se de uma API RESTFUL que permite a elaboração de um CRUD básico, decidi utilizar a menor quantidade de libs pela simplicidade do projeto, então tornei o documento JSON, cuja criação era obrigatória, o banco de dados da aplicação. 

<br/>

## *Como rodar*

* Clone esse repositório
* **Npm Install** - Instalar dependências do app
* **Npm Start** - Rodar o app

Então utilize a ferramenta para testes de API da sua preferência.

<br/>

## *Endpoints*
![image](https://user-images.githubusercontent.com/79314576/120070092-b40b5600-c05f-11eb-9956-f7bf41a7fdf7.png)
<br/>

HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/users |  | Listar todos usuarios
| GET | /api/v1/users/user_id | | Listar único usuário
| POST | /api/v1/users | JSON (email,senha) | Criar único usuário
| PUT | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário
| DELETE | /api/v1/users | | Deletar todos usuarios
| DELETE | /api/v1/users/user_id | | Deletar único usuário
