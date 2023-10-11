## Como criar um projeto Nextjs com API em python usando o Flask

- Foi criado um novo projeto Nextjs, usando a última versão next:

```bash
npx create-next-app@latest
```

- Foi criado um ambiente virtual do python:

```bash
python -m venv .venv
```

- Foi ativado o ambiente virtual do python (o comando source funciona no bash):

```bash
source .venv/Scripts/activate
```

- Foi criada uma pasta api na raiz do projeto, contendo a lógica da api em python


- No arquivo next.config.js foi configurado o redirecionamento da rota api:

```bash
/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*", // Para todas as requisições que começam com '/api'
        destination: "http://127.0.0.1:8000/api/:path*", // redirecionar para o backend
      },
    ];
  },
};

module.exports = nextConfig;
```

## Como esse modelo pode ser utilizado

- Seguindo os passos acima ou usando o comando:

```bash
npx create-next-app@latest pynext-auth --example "https://github.com/Krekinha/pynext" 
```
