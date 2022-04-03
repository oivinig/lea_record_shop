# Lea Record Shop

A Lea Record Shop é uma loja de discos fictícia. O objetivo deste projeto é disponibilizar APiS que possibilitem a interação com o Catálogo de Discos da Loja, Cadastro de Clientes e Criação de Pedidos.

---

## Stack do Projeto

    - node.js;
    - MySQL;
    - Docker.

---

## Quick Start

Para efetuar a execução deste projeto será necessário utilizar o [Docker](https://www.docker.com/get-started/) e o [Postman](https://www.postman.com/downloads/).

---

### Passo 1

Efetuar o clone do repositório ou download do zip.

```
    git clone https://github.com/oivinig/lea_record_shop.git
```

Aguardar a instalação do projeto.

---

### Passo 2

Com o projeto instalado, acessar a pasta raiz do projeto via gerenciador de comandos.
Executar o comando:
```
    docker-compose up
```
Aguardar a conclusão da criação do container.

---

### Passo 3

Quando o container concluir a instalação/criação do projeto, aparecerá a seguinte mensagem:

> App listening on port 3000

Essa mensagem significa que a aplicação está pronta para ser "chamada" via APIs.

---

### Passo 4

No aplicativo "Postman", efetuar a importação da [Collection](https://github.com/oivinig/lea_record_shop/blob/main/postman-collection/lea_records_api.postman_collection.json) do projeto.

Serão criadas as pastas com todas as APIs disponíveis do projeto, separadas por entidade:

- Catálogo:
    - Incluir discos no catálogo;
    - Remover discos do catálogo;
    - Obter discos do catálogo;
    - Obter discos do catálogo (Por Artista);
    - Obter discos do catálogo (Por Título);
    - Obter discos do catálogo (Por Ano);
    - Obter discos do catálogo (Por Estilo Musical);

- Clientes:
    - Incluir clientes;
    - Obter clientes;
    - Obter clientes (Por CPF);
    - Alterar status de cliente (ativar/inativar cadastro);

- Pedidos:
    - Incluir pedido;
    - Obter pedidos;
    - Obter pedidos (Por Periodo);
    - Obter pedidos (Por CPF).
