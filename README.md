# Anotation 📋

Bem-vindo ao Anotation, aqui você pode:

- 📝 Criar, Remover, Visualizar e Salvar suas tarefas com Facilidade em um Design intuitivo
- ✅ Suas tarefas são organizadas de acordo com a data de Lembrete que você definir

Segue uma lista com as tecnologias utilizadas

- 💚 Nuxt.js (Framework Vue.js)
- 🔵 TypeScript
- 💠 TailwindCSS
- 🐦 Nest.js (Framework Node.js)
- 🐘 PostgreSQL
- 🛠️ Prisma

## Funcionalidades ✨

- ### 📝 Visualize suas tarefas

<p align="center">
    <img src="./_imgs/image-home.png" style="width: 600px; height: 350px; border-radius: 10px"/>
</p>

- ### 📝 Crie suas tarefas

<p align="center">
    <img src="./_imgs/image-create-todo.png" style="width: 600px; height: 350px; border-radius: 10px"/>
</p>

- ### 📝 Remova suas tarefas

<p align="center">
    <img src="./_imgs/image-remove-todo.png" style="width: 600px; height: 350px; border-radius: 10px"/>
</p>

- ### 📝 Salve suas Anotações clicando em "Persistir Dados" no botão do canto superior esquerdo

- Obs: Será gerado um token de recuperação que você deverá guardar com você

<p align="center">
    <img src="./_imgs/image-get-token.png" style="width: 600px; height: 350px; border-radius: 10px"/>
</p>

- ### 📝 Recupere sua sessão (suas anotações) clicando no botão "Recuperar Meus Dados" no canto superior direito

- Obs: Insira o token que você havia guardado no campo e recupere automaticamente suas anotações

<p align="center">
    <img src="./_imgs/image-insert-token.png" style="width: 600px; height: 350px; border-radius: 10px"/>
</p>

- ### 📝 Design Responsivo

<p align="center">
    <img src="./_imgs/image-mobile.png" style="width: 300px; height: 450px; border-radius: 10px"/>
</p>

## Pré-requisitos 🎯

- PostgreSQL instalado (Versão 16)
- Node.js instalado (Versão 18.18.0)

## Instalação e Configuração 🔧

- Clone este projeto

```bash
    git clone https://github.com/Alfredo-Fontinele/Speedio-Teste.git
```

- Tenha um Editor de código como Visual Studio Code, Sublime Text, Atom etc. Depois entre na pasta client com o comando:

```bash
    cd client
```

- depois instale as dependências com o seu gerenciador de pacotes

```bash
    npm installl

    #ou
    yarn

    #ou
    pnpm i
```

- Faça o mesmo processo na pasta 'server'

```bash
    cd server
```

- e instale as dependências

```bash
    npm installl

    #ou
    yarn

    #ou
    pnpm i
```

- Em seguida, ainda na pasta server, crie arquivo chamado '.env'. Depois, abra o arquivo '.env.example' que também está dentro da pasta 'server' e copie e cole o seu conteúdo no arquivo criado.

- o .env deverá ficar assim:

```bash
    PORT=3333
    DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO_DE_DADOS?schema=public"
    SECRET_KEY=CHAVE_SECRETA
```

- Após isso, você deverá criar um banco de dados na sua máquina. O nome do seu Usuário, Senha e nome do Banco de Dados que você acabou de criar deverão ser informados na variável DATABASE_URL respectivamente no lugar de 'USUARIO', 'SENHA' e 'NOME_DO_BANCO_DE_DADOS',

- Substitua na variável DATABASE_URL as parte escrita 'USUARIO', 'SENHA' e 'NOME_DO_BANCO_DE_DADOS' pelas suas próprias credencias após ter configurado o PostgreSQL
- Obs: Esse passo de criação do banco de dados é apenas uma precaução. Pois já fiz outros projetos com o Prisma ORM e, dependendo da etapa de configuração do PostgreSQL, pode aparecer um erro na hora de executar a próxima instrução

- na mesma pasta, vá no terminal e rode o comando:

```bash
    npx prisma migrate dev

    #ou
    yarn prisma migrate dev

    #ou
    pnpm prisma migrate dev
```

## Inicializando o Projeto 🚀

- Entre na pasta 'client'

```bash
    cd client
```

- Em seguida execute o comando de inicialização

```bash
    npm run dev

    #ou
    yarn dev

    #ou
    pnpm dev
```

- Da mesma forma, vá na pasta 'server' e rode:

```bash
    cd server
```

- Em seguida execute o comando de inicialização

```bash
    npm run start:dev

    #ou
    yarn start:dev

    #ou
    pnpm start:dev
```

- Agora acesse a aba do navegador em:

```bash
    http://localhost:3000
```

## Contato ✉️

Se você tiver alguma dúvida, sugestão ou feedback, fique à vontade para entrar em contato:

Nome: Alfredo
E-mail: alfredofontinele08@gmail.com
