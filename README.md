# Cadastro de Usuários

Este é um projeto básico de cadastro de usuários usando **Node.js** no backend, **React** no frontend, e **MySQL** como banco de dados.

## Sumário
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Configuração do Projeto](#configuração-do-projeto)
- [Rodando o Projeto](#rodando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:
- [Node.js](https://nodejs.org) (v14.0 ou superior)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Git](https://git-scm.com/)

## Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/d-broder/user-registry.git
cd user-registry
```

### 2. Instale as dependências do projeto:

```bash
# Pasta raiz
npm install

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

```

## Configuração do Banco de Dados

Abra o MySQL Workbench ou outro cliente de sua escolha.

Crie o banco de dados e a tabela `users`. No MySQL Workbench, vá até a aba de query e execute o seguinte script SQL. Este script também está disponível no arquivo `setup.sql` na raiz do projeto.

```sql
CREATE DATABASE IF NOT EXISTS user-registry;

USE user-registry;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    UNIQUE (email)
);
```

### Configure as credenciais do MySQL:

Crie um arquivo `.env` na pasta `backend` com as credenciais do seu banco de dados:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SuaSenhaAqui
DB_NAME=user-registry
```

## Rodando o Projeto

### 1. Inicie o backend e frontend simultaneamente:

Na pasta raiz do projeto, execute o seguinte comando para iniciar o backend (Node.js) e o frontend (React) ao mesmo tempo:

```bash
npm start
```

Isso iniciará:

- O backend em `http://localhost:5000`
- O frontend em `http://localhost:3000`

Se preferir rodar os dois de forma independente, use os comandos abaixo:

```bash
# Iniciar backend (na pasta /backend)
npm run server

# Iniciar frontend (na pasta /frontend)
npm run client
```

### 2. Acessar a aplicação:

Abra o navegador e vá até:

```bash
http://localhost:3000
```

Você verá a tela de cadastro de usuários e a lista de usuários cadastrados.

## Estrutura do Projeto

```plaintext
user-registry/
│
├── backend/              # Código backend (Node.js)
│   ├── node_modules/     # Dependências do Node.js
│   ├── server.js         # Configuração do servidor e rotas
│   ├── package.json      # Dependências e scripts
│   └── .env              # Variáveis de ambiente (não incluído no Git)
│
├── frontend/             # Código frontend (React.js)
│   ├── node_modules/     # Dependências do React
│   ├── src/              # Código fonte React (App.js, components, etc.)
│   ├── public/           # Arquivos estáticos (index.html, etc.)
│   └── package.json      # Dependências e scripts
│
├── setup.sql             # Script SQL para configuração do banco de dados
├── .gitignore            # Arquivos ignorados no repositório Git (.env, node_modules, etc.)
└── README.md             # Documentação do projeto
```

## Funcionalidades

- **Cadastro de usuários**: Adicione usuários com nome e email.
- **Exibição de usuários**: Veja uma lista de usuários cadastrados em uma tabela no frontend.
- **Integração com MySQL**: O backend salva e recupera os dados de um banco de dados MySQL.

## Contribuição

Sinta-se à vontade para abrir um pull request ou reportar bugs via Issues.