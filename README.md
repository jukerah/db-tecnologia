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
- [X] Página de Início.
- [X] Página de Serviços.
  - [X] Página sobre Crição de Sites.
  - [] Página sobre Criação de Aplicativos.
  - [] Página sobre Crição de Jogos.
  - [] Página sobre IA - Inteligência Artificial.
  - [] Página sobre Crição de Bots.
  - [] Página sobre Suporte.
- [X] Página Portfólio.
- [X] Página Login.
- [X] Página Admin Panel.
- [X] Página para gerenciamento dos Projetos.
- [X] Página para gerenciamento da Equipe.

### Front-end:
- [] Página de Início.
- [] Página de Serviços.
  - [] Página sobre Crição de Sites.
  - [] Página sobre Criação de Aplicativos.
  - [] Página sobre Crição de Jogos.
  - [] Página sobre IA - Inteligência Artificial.
  - [] Página sobre Crição de Bots.
  - [] Página sobre Suporte.
- [] Página Portfólio.
- [] Página Login.
- [] Página Admin Panel.
- [] Página para gerenciamento dos Projetos.
- [] Página para gerenciamento da Equipe.

### Back-end:
- [X] Cadastrar usuário.
- [X] Editar usuário.
- [X] Login.
- [] Recuperar senha.
- [X] Cadastrar colaborador.
- [X] Listar colaboradores.
- [X] Editar colaborador.
- [] Deletar colaborador.
- [] Cadastrar projeto.
- [] Listar projetos.
- [] Editar projeto.
- [] Deletar projeto.

<br>

### Database:
- [X] Modelagem do banco de dados.
<img src="preview/database_model.png"/>

- [] Criação do banco de dados.

<hr/>

<h2 id="pre-req">Pré-requisitos e instalação do projeto</h2>

- ### Front-end
### Instalação:
#### db-tecnologia\front-end>
`npm install`

<br>

### Executando:
#### db-tecnologia\front-end>
`yarn dev`

<br>

- ### Back-end:
### Instalação:
#### db-tecnologia\back-end>
`npm install`

<br>

### Executando:
#### db-tecnologia\back-end>
`yarn dev`

<br>

- ### Database:

> Para o banco de dados será necessário a criação de um banco de dados PostgreSQL.

<br>

### Configurando variavel de ambiente em desenvolvimento:
#### Arquivo: `db-tecnologia/back-end/.env`
#### Alterador o valor da variável DATABASE_URL com usuário, senha, host, porta e nome do banco de dados.
#### Exemplo: `DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"`

<br>

### Configurando variavel de ambiente em produção:
#### Criar variável com nome: `DATABASE_URL`
#### inserir o valor: `postgresql://user:password@host:port/db_name?schema=public`

<br>

### Criando a Migrate em desenvolvimento:
#### db-tecnologia\back-end>
`yarn prisma migrate dev`

<br>

### Criando a Migrate em produção:
#### db-tecnologia\back-end>
`yarn prisma migrate deploy`

<hr/>

<h2 align="center">Autor</h2>

<a href="https://marioelvio.com" target="_blank">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81795443?v=4" width="100px;" alt=""/>
</a> <a href="https://marioelvio.com" title="Mario Elvio" target="_blank"></a>

<p>Desenvolvido por <a href="https://marioelvio.com">Mario Elvio</a>.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Mario_Elvio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marioelvio/)](https://www.linkedin.com/in/marioelvio/)

