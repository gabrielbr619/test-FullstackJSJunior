# **Projeto FullstackJS Junior**

![gifContele](https://user-images.githubusercontent.com/79314576/120321044-38a4e100-c2b9-11eb-8326-46e8df5dbf9f.gif)

## *O que é*

Trata-se de um projeto Fullstack que permite a elaboração de um **CRUD** básico, o design foi idealizado no ***[Figma](https://www.figma.com/file/jTXW4TLNvRe0E0nxZWDkka/Contele-Challenge-FullStack?node-id=6%3A27)*** e então transcrito(com alterações) para código, decidi utilizar o padrão **MVC** pela simplicidade do projeto e o foco no Backend, sendo assim optei pelo o **EJS** como View, por creer que este lidaria bem com as necessidades do app, o backend é uma **API Restful** que utiliza Express, o banco de dados é o documento **JSON**, cuja criação era obrigatória.


<br/>

## *Como rodar*

Você pode acessar a versão do app que está hospedado no ***[Heroku](https://contele-challenge-fullstack.herokuapp.com/)*** ou rodar localmente.

Caso queira rodar local, siga os passos

* Clone esse repositório
* **Npm Install** - Instalar dependências do app
* **Npm Start** - Rodar o app
* Acesse a URL ***"http://localhost:3333/"***

Se quiser utilizar uma ferramenta para testes de API de sua preferência. Basta inserir a URL da versão do app que irá usar e então completar com o endpoint desejado, por exemplo "https://contele-challenge-fullstack.herokuapp.com/api/v1/users" <br/> 
<br/> 
Para mais informações, leia abaixo.

<br/>

## *Endpoints*
![image](https://user-images.githubusercontent.com/79314576/120070092-b40b5600-c05f-11eb-9956-f7bf41a7fdf7.png)
<br/>

HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/users |  | Listar todos usuarios
| GET | /api/v1/users/user_id | | Listar único usuário
| POST | /api/v1/users | JSON (name,email,senha) | Criar único usuário
| PUT | /api/v1/users/user_id | JSON (name,email,senha) | Alterar único usuário
| DELETE | /api/v1/users | | Deletar todos usuarios
| DELETE | /api/v1/users/user_id | | Deletar único usuário

<br/>**Mostrar usuários**
----
  Lista todos usuários.

* **URL**

  /api/v1/users

* **Method:**

  `GET`
  
<br/>**Mostrar um usuário**
----
  Lista único usuário.

* **URL**

  /api/v1/users/user_id

* **Method:**

  `GET`

<br/>**Criar usuário**
----
  Criar único usuário.

* **URL**

  /api/v1/users

* **Method:**

  `POST`
*  **BODY**

   **Required:**
 
   `JSON(email,senha)`
   
   **Optional**
   
   `JSON(name,email,senha)`
   
 
<br/>**Alterar usuário**
----
  Alterar único usuário.

* **URL**

  /api/v1/users/user_id

* **Method:**

  `PUT`
*  **BODY**

   **Required:**
 
   `JSON(email,senha)`
   
   **Optional**
   
   `JSON(name,email,senha)`
  
<br/>**Deletar usuários**
----
  Deletar todos usuários.

* **URL**

  /api/v1/users

* **Method:**

  `DELETE`
  
<br/>**Deletar um usuário**
----
  Deleta único usuário.

* **URL**

  /api/v1/users/user_id

* **Method:**

  `DELETE`
