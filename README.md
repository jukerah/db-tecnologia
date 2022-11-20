# DB Tecnologia

<img src="preview/front-end.png"/>

<br>

Sumário
=================
<!--ts-->
   * [Descrição do Projeto](#about)
   * [Deploy do Projeto](#demo-project)
   * [Features](#features)
   * [Pré-requisitos e instalação do projeto](#pre-req)
<!--te-->

<hr/>

<h2 id="about">Descrição do Projeto</h2>
<br />

> Este projeto é um site institucional para a agência DB Tecnologia. O site possui informações sobre a agência e detalhes sobre cada serviço prestado.

<br />

### Funcionalidades:

* Gerenciamento de usuário (cadastrar, editar e autenticar).
* Gerenciamento dos projetos (Listar, cadastrar, editar e deletar).
* Gerenciamento dos colaboradores (Listar, cadastrar, editar e deletar).

#### Páginas do projeto:

* Página Início.
* Página Serviços.
  * Página sobre Crição de Sites.
  * Página sobre Criação de Aplicativos.
  * Página sobre Crição de Jogos.
  * Página sobre IA - Inteligência Artificial.
  * Página sobre Crição de Bots.
  * Página sobre Suporte.
* Página Portfólio (listar os projetos).
* Página Quem Somos (listar os colaboradores).
* Página Login.
* Página Admin Panel.
* Página para gerenciamento dos Projetos.
* Página para gerenciamento da equipe.

<br />

### Tecnologias e dependências utilizadas no projeto:

* <strong>Figma</strong>
* <strong>TypeScript</strong>
* <strong>Next.js</strong>
* <strong>Styled Components</strong>
* <strong>Axios</strong>
* <strong>Nookies</strong>
* <strong>React Icons</strong>
* <strong>React Toastify</strong>
* <strong>React Modal</strong>
* <strong>Node.js</strong>
* <strong>MySQL</strong>
* <strong>Express</strong>
* <strong>Prisma</strong>
* <strong>Cors</strong>
* <strong>Bcryptjs</strong>
* <strong>Dotenv</strong>
* <strong>Jsonwebtoken</strong>
* <strong>Multer</strong>
* <strong>Cors</strong>
* <strong>Nodemailer</strong>
* <strong>Generate Password</strong>

<hr/>

<h2 id="demo-project">Deploy do Projeto</h2>

### Design da interface com Figma:
<a align="left" href="https://www.figma.com/file/ruAZwcJL6omgoaiV01d3JV/DB-Tecnologia?node-id=1%3A621">https://www.figma.com/file/ruAZwcJL6omgoaiV01d3JV/DB-Tecnologia?node-id=1%3A621</a>

### Deploy front-end:
<a align="left" href="#" target="_blank">Em breve...</a>

### Deploy back-end:
<a align="left" href="#" target="_blank">Em breve...</a>

### Deploy database:
<a align="left" href="#" target="_blank">Em breve...</a>

<hr/>

<h2 id="features" align="center">Features</h2>

<br />

> O projeto ainda está em desenvolvimento e os próximos passos serão atualizados abaixo:

<br>

### UI Design:
- [X] Página de início.
- [X] Página de serviços.
  - [X] Página sobre crição de sites.
  - [] Página sobre criação de aplicativos.
  - [] Página sobre crição de jogos.
  - [] Página sobre IA - inteligência artificial.
  - [] Página sobre crição de Bots.
  - [] Página sobre suporte.
- [X] Página portfólio.
- [X] Página cadastrar usuário.
- [X] Página recuperar senha.
- [X] Página login.
- [X] Página dados do usuário.
  - [X] Modal alterar usuário.
  - [X] Modal alterar email.
  - [X] Modal alterar senha.
- [X] Página admin panel.
  - [X] Página para gerenciamento dos projetos.
    - [X] Modal cadastrar projeto.
    - [X] Modal editar projeto.
    - [X] Modal deletar projeto.
  - [X] Página para gerenciamento da equipe.
    - [X] Modal cadastrar colaborador.
    - [X] Modal editar colaborador.
    - [X] Modal deletar colaborador.

### Front-end:
- [] Página de início.
- [] Página de serviços.
  - [] Página sobre crição de sites.
  - [] Página sobre criação de aplicativos.
  - [] Página sobre crição de jogos.
  - [] Página sobre IA - inteligência artificial.
  - [] Página sobre crição de Bots.
  - [] Página sobre suporte.
- [] Página portfólio.
- [] Página cadastrar usuário.
- [] Página recuperar senha.
- [] Página login.
- [] Página dados do usuário.
  - [] Modal alterar usuário.
  - [] Modal alterar email.
  - [] Modal alterar senha.
- [] Página admin panel.
  - [] Página para gerenciamento dos projetos.
    - [] Modal cadastrar projeto.
    - [] Modal editar projeto.
    - [] Modal deletar projeto.
  - [] Página para gerenciamento da equipe.
    - [] Modal cadastrar colaborador.
    - [] Modal editar colaborador.
    - [] Modal deletar colaborador.

### Back-end:
- [X] Cadastrar usuário.
  - #### Método:
    > POST

  - #### Rota:
    > /user

  - #### Json:
  > Enviar no exemplo abaixo:
  
    ``` json
      {
        "username": "username",
        "email": "exemplo@exemplo.com",
        "password": "exemplo123456"
      }
    ```

- [X] Editar usuário.
  - #### Método:
    > PUT

  - #### Rota:
    > /user

  - #### Json:
    > Enviar apenas 1, sendo eles: username, email ou password. Exemplo:

    ``` json
      {
        "id_user": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "username": "username"
      }
    ```

    ``` json
      {
        "id_user": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "email": "exemplo@exemplo.com"
      }
    ```

    ``` json
      {
        "id_user": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "password": "exemplo123456"
      }
    ```

- [X] Login.
  - #### Método:
    > POST

  - #### Rota:
    > /session

  - #### Json:
    > Enviar no exemplo abaixo:

    ``` json
      {
        "username": "username",
        "password": "exemplo123456"
      }
    ```

    > Exemplo de resposta:

    ``` json
      {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "username": "username",
        "email": "exemplo@exemplo.com",
        "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    ```

- [X] Recuperar senha.
  - #### Método:
    > POST

  - #### Rota:
    > /password-recovery

  - #### Json:
  > Enviar no exemplo abaixo:
  
    ``` json
      {
        "email": "exemplo@exemplo.com",
      }
    ```

  - #### Exemplo de email enviado:
    #### Assunto: Recuperação de Senha DB Tecnologia

    <h2>Recuperação de Senha</h1>
    <br>
    <p>Caro "Username", foi solicitado a recuperação da sua conta, segue abaixo seus dados para acessar o sistema.</p>
    <p><strong>Usuário:</strong> username</p>
    <p><strong>Nova senha:</strong> password</p>
    <a href="#">Fazer login</a>
    <br>
    <br>
    <p>Atenciosamente,</p>
    <p><strong>Equipe DB Tecnologia</strong></p>
    <a href="#">https://www.exemplo.com</a>

- [X] Cadastrar colaborador.
  - #### Método:
    > POST

  - #### Rota:
    > /employee

  - #### Multipart:
    > Enviar no exemplo abaixo:

    - #### <strong>name:</strong> Nome de Exemplo

    - #### <strong>linkedin:</strong> https://www.linkedin.com/in/username

    - #### <strong>file:</strong> photo.png

- [X] Listar colaboradores.
  - #### Método:
    > GET

  - #### Rota:
    > /employees

  - #### Json:
    > Exemplo de resposta:

    ``` json
      [
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "name": "Nome de Exemplo",
          "linkedin": "https://www.linkedin.com/in/username",
          "photo": "772a85193ac0a129b9a4918f72e86579-1.png"
        },
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "name": "Nome de Exemplo",
          "linkedin": "https://www.linkedin.com/in/username",
          "photo": "78a6s7dbvbasdac0a129b65as67d5asd-1.png"
        }
      ]
    ```

- [X] Editar colaborador.
  - #### Método:
    > PUT

  - #### Rota:
    > /employee

    - #### Multipart:
    > Enviar no exemplo abaixo:

    - #### <strong>id_employee:</strong> xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    - #### <strong>name:</strong> Nome de Exemplo

    - #### <strong>linkedin:</strong> https://www.linkedin.com/in/username

    - #### <strong>file:</strong> photo.png

- [X] Deletar colaborador.
  - #### Método:
    > DELETE

  - #### Rota:
    > /employee

  - #### Json:
    > Enviar no exemplo abaixo:

    ``` json
      {
        "id_employee": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    ```

- [X] Cadastrar projeto.
  - #### Método:
    > POST

  - #### Rota:
    > /project

  - #### Multipart:
    > Enviar no exemplo abaixo:

    - #### <strong>name:</strong> Nome do projeto

    - #### <strong>banner_url:</strong> https://www.projeto.com

    - #### <strong>file:</strong> banner.png

- [X] Listar projetos.
  - #### Método:
    > GET

  - #### Rota:
    > /projects

  - #### Json:
    > Exemplo de resposta:

    ``` json
      [
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "name": "Project name",
		      "project_url": "https://www.example.com",
		      "banner": "af5a212eb8b3ceca4ab7c280ef3fbdbc-banner.jpg"
        },
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "name": "Project name",
		      "project_url": "https://www.example.com",
		      "banner": "af5a212eb8b3ceca4ab7c280ef3fbdbc-banner.jpg"
        }
      ]
    ```

- [X] Editar projeto.
  - #### Método:
    > PUT

  - #### Rota:
    > /project

  - #### Multipart:
    > Enviar no exemplo abaixo:

    - #### <strong>id_project:</strong> xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

    - #### <strong>name:</strong> Nome do projeto

    - #### <strong>banner_url:</strong> https://www.projeto.com

    - #### <strong>file:</strong> banner.png

- [X] Deletar projeto.
  - #### Método:
    > DELETE

  - #### Rota:
    > /project

  - #### Json:
    > Enviar no exemplo abaixo:

    ``` json
      {
        "id_project": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    ```

<br>

### Database:
  - [X] Modelagem do banco de dados.
  <img src="preview/database_model.png"/>

  - [X] Criação do banco de dados.

<hr/>

<h2 id="pre-req">Pré-requisitos e instalação do projeto</h2>

- ### Front-end
  - ### Instalação:
    * #### db-tecnologia\front-end> `npm install`

    <br>

  - ### Executando:
    * #### db-tecnologia\front-end> `yarn dev`

<br>

- ### Back-end:
  - ### Instalação:
    * #### db-tecnologia\back-end> `npm install`

    <br>

  - ### Executando:
    * #### db-tecnologia\back-end> `yarn dev`

<br>

- ### Database:

  > Para o banco de dados será necessário a criação de um banco de dados MySQL.

  <br>

  - #### Banco de dados localhost:

      - Instalar MySQL.
      - Abrir o MySQL Workbench no localhost.
      - Executar as queries abaixo:

        ``` sql
        CREATE DATABASE db_name;
        ```

        ``` sql
        USE db_name;
        ```

  - ### Configurando variavel de ambiente em desenvolvimento:
    * #### Arquivo: `db-tecnologia/back-end/.env`
    * #### Alterador o valor da variável DATABASE_URL com usuário, senha, host, porta e nome do banco de dados.
    * #### Exemplo: `DATABASE_URL="mysql://user:password@host:port/db_name"`

    <br>

  - ### Configurando variavel de ambiente em produção:
    * #### Criar variável com nome: `DATABASE_URL`
    * #### Inserir o valor: `mysql://user:password@host:port/db_name`

    <br>

  - ### Criando a Migrate em desenvolvimento:
    * #### db-tecnologia\back-end> `yarn prisma migrate dev`

    <br>

  - ### Criando a Migrate em produção:
    * #### db-tecnologia\back-end> `yarn prisma migrate deploy`

<hr/>

<h2 align="center">Autor</h2>

<a href="https://marioelvio.com" target="_blank">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81795443?v=4" width="100px;" alt=""/>
</a> <a href="https://marioelvio.com" title="Mario Elvio" target="_blank"></a>

<p>Desenvolvido por <a href="https://marioelvio.com">Mario Elvio</a>.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Mario_Elvio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marioelvio/)](https://www.linkedin.com/in/marioelvio/)

