# Front-End com Vue.js

---


Vue.js é um framework JavaScript moderno e progressivo que oferece muitas vantagens para o desenvolvimento de aplicações web. Neste texto, vamos explorar as principais razões pelas quais você deve considerar o uso do Vue.js em seus projetos.

1. Fácil aprendizado: Uma das principais vantagens do Vue.js é a facilidade de aprendizado. O framework tem uma sintaxe simples e intuitiva, e é fácil de integrar com outras bibliotecas e frameworks.
2. Performance: O Vue.js é extremamente rápido e eficiente. Ele utiliza uma técnica de renderização reativa para atualizar apenas as partes da página que mudam, em vez de renderizar a página inteira a cada atualização.
3. Componentização: O Vue.js oferece uma arquitetura de componentes reutilizáveis, o que torna a criação e manutenção de interfaces de usuário complexas muito mais fácil.
4. Flexibilidade: O Vue.js é flexível e pode ser usado em diferentes tipos de projetos, desde pequenos aplicativos até grandes projetos empresariais.
5. Escalabilidade: O Vue.js é escalável e pode ser facilmente expandido para lidar com projetos maiores e mais complexos.
6. Documentação abrangente: O Vue.js possui uma documentação abrangente e bem organizada, o que facilita o aprendizado e uso do framework.
7. Comunidade ativa: O Vue.js tem uma comunidade ativa e crescente de desenvolvedores, o que significa que há muitos recursos disponíveis para ajudá-lo a aprender e solucionar problemas.
8. Compatibilidade: O Vue.js é compatível com diferentes navegadores e pode ser usado em diferentes plataformas, incluindo desktop e mobile.
9. Ecossistema: O Vue.js tem um ecossistema robusto de plugins e bibliotecas que ajudam a estender suas funcionalidades e melhorar a produtividade do desenvolvedor.
10. Aplicações que utilizam Vue.js: O Vue.js é utilizado por muitas empresas, incluindo Alibaba, Xiaomi, GitLab e Nintendo. Ele é especialmente popular em empresas que buscam criar interfaces de usuário complexas e escaláveis.

Em resumo, o Vue.js é uma excelente escolha para o desenvolvimento de aplicações web modernas e eficientes. Com sua facilidade de aprendizado, componentização, flexibilidade e escalabilidade, é uma ótima opção para projetos de todos os tamanhos. A documentação abrangente, comunidade ativa e ecossistema robusto também tornam o Vue.js uma escolha popular entre desenvolvedores e empresas.

# Vamos praticar?

---

Para começar a usar o Vue.js, você precisa incluir a biblioteca em sua página HTML. Você pode fazer isso por meio de um link para um arquivo CDN ou por meio de um arquivo baixado em sua máquina.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

### Entendendo o VueJs templates

Ao criar a estrutura básica do HTML teremos:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Introdução do Vue.js</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
        <p>{{ titulo }}</p>
    </div>
  </body>
</html>
```


O código **`const { createApp } = Vue;`** utiliza a sintaxe de desestruturação do JavaScript para extrair a função **`createApp`** do objeto **`Vue`** e atribuí-la a uma variável chamada **`createApp`**.

```html
<script>
  const { createApp } = Vue;
  createApp({  }).mount('#app')
</script>
```

Em seguida, o código chama a função **`createApp`** com um objeto vazio como argumento e encadeia o método **`mount`** para montar a instância do Vue na página HTML, indicando que a instância será montada no elemento com o **`id`** "app". Para que o double mustache funcione corretamente é necessário acrescentar o template do Vue na TAG `<script>`.

```jsx
<script>
      //Desestruturação para extrair a propriedade createApp do objeto Vue
      const { createApp } = Vue;

      createApp({
        //Cria um função de dados
        data() {
          return {
            titulo: "Olá meu VueJS!",
          }; //retorna o valor dos dados necessários
        },
      }).mount("#app"); //elemento que vamos utilizar através do id
</script>
```

O código ainda está embutido no arquivo HTML é possível desmembra-lo para um arquivo .js diferente. Podemos trabalhar com método JSON para chamar outros elementos como:

```jsx
return {
	titulo: "Bem vindo ao VueJS!",
	paragrafo: "Estamos utilizando a versão 3 do vue",
	nome: "Leonardo"
}
```

E acrescentar no HTML as seguintes tags:

```html
<h1>Olá {{ nome }}</h1>
<p>{{ titulo }}</p>
<p>{{ paragrafo }}</p>
```


## **Utilizando funções/metodos**

Ao trabalhar com o Vue.js, é essencial entender como as funções e métodos são chamados, pois isso é fundamental para a criação de aplicativos interativos e reativos.

As funções são utilizadas para definir comportamentos para os componentes, como responder a eventos de usuário ou atualizar dados. Os métodos, por sua vez, são funções específicas de um componente que podem ser chamadas por outros métodos ou por eventos de usuário.

Além disso, o Vue.js possui um sistema de reatividade que permite atualizar automaticamente a interface do usuário quando os dados do aplicativo mudam. Para isso, é necessário utilizar a propriedade **`data`** para armazenar os dados do aplicativo, neste exemplo vamos utilizar a função `methods`.

Por fim, é importante mencionar que o Vue.js também possui um sistema de diretivas que permitem manipular o DOM da página de forma declarativa. As diretivas são utilizadas para adicionar comportamentos especiais aos elementos HTML, como interações de usuário ou exibição condicional de conteúdo.

Portanto, para dominar o Vue.js, é fundamental compreender como as funções e métodos são chamados, como funciona a reatividade do sistema de dados e como as diretivas são utilizadas para manipular o DOM da página.

```html
<script>
	const { createApp } = Vue;
	createApp({
		methods: {
			funcTeste: () => {return 'Olá minha primeira função!'};
		}
	}).mount('#app')
</script>
```

Exemplo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Introdução do Vue.js</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>Utilizando funções/metodos</h1>
      <p>{{ paragrafo }}</p>
      <p>{{ frase() }}</p>
      <h3>Trabalhando com calculo</h3>
      <p>A soma de 2 + 5 é igual: {{ soma() }}</p>
      <!-- Passagem de parâmetro por referência -->
      <p>A multiplicação de 2 vezes 5 é igual: {{ multi(2, 5) }}</p>
    </div>

    <script>
      //Desestruturação para extrair a propriedade createApp do objeto Vue
      const { createApp } = Vue;

      createApp({
        //Cria um função de dados
        data() {
          return {
            paragrafo: "Vamos trabalhar com methods",
          }; //retorna o valor dos dados necessários
        },
        methods: {
          frase: () => {
            return "O retorno da nossa primeira função";
          },
          soma: () => {
            let x = 2;
            let y = 5;
            return x + y;
          },
          multi: (x, y) => {
            let num1 = x;
            let num2 = y;
            return num1 * num2;
          }
        },
      }).mount("#app"); //elemento que vamos utilizar através do id
    </script>
  </body>
</html>
```
