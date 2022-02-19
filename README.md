# Boas vindas ao repositório do Desafio Capgemini!

O objetivo dessa etapa é testar os conhecimentos em lógica de programação. Para isso, foi apresentada três questões com diferentes níveis de dificuldade. A resoluçao das questões foi feita em Javascript e os testes realizados com o Jest.

---

# Sumário
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Instruções para rodar a aplicação](#instruções-para-rodar-a-aplicação)
  - [Antes de começar a testar](#antes-de-começar-a-testar)
  - [Execução de testes unitários](#execução-de-testes-unitários)
  - [Execução de testes de usabilidade](#execução-de-testes-de-usabilidade)

# Tecnologias utilizadas

Para a resolução dos desafios propostos foram utilizados:
 - [Javascript](https://nodejs.org/en/download/)
 - [Jest](https://jestjs.io/pt-BR/)

Para a implementação do frontend de teste de usabilidade, foram utilizados:

  - [React](https://pt-br.reactjs.org/) para a criação das interfaces;
  - [React Router](https://pt-br.reactjs.org/) para o roteamento entre as interfaces;
  - [Styled Components](https://styled-components.com/) para a estilização das interfaces;
  - [GitHub Pages](https://github.com/gitname/react-gh-pages) para disponibilizar o frontend em produção no Github;

# Instruções para rodar a aplicação:


## ANTES DE COMEÇAR A TESTAR:

1. Certifique de conter o node instalado em sua maquina
    ```sh
    node --version
    ```
    * Caso não retorne algum resultado ou retorne um erro, instalar por meio official do [Node](https://nodejs.org/en/download/).

2. Clone o repositório
    ```sh
    git clone https://github.com/maximilianoalvarenga/desafio-capgemini.git
    ```
  * Entre na pasta do repositório que você acabou de clonar:
    ```sh
    cd desafio-capgemini
    ```

3. Instale as dependências
    ```sh
    npm install
    ```

## Execução de testes unitários

Foi utilizado o Jest para criar os testes, use o comando a seguir para executar todos os testes: 

```sh
npm test
```

Caso queira executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `desafioCampgemini/__tests__/req01.test.js`:

```sh
npm test desafioCampgemini/__tests__/req01.test.js
```
ou
```sh
npm test req01
```

## Execução de testes de usabilidade

Foi construido uma aplicação em [React Js](https://pt-br.reactjs.org/) para a realização dos testes de usabilidade e/ou execução dos desafios de modo livre.

Caso queira executar os testes de usabilidades, é necessário rodar a aplicação localmente por meio do comando:

```sh
npm start
```

ou, acessar a aplicação disponibilizada no Github pages por meio do link:

  * [Desafio Campgemini](https://maximilianoalvarenga.github.io/desafio-capgemini/)

---
