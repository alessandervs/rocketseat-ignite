# CSS Scoped
-Todo arquivo css terminado com module.css
- não é possível fazer estilização de forma direta p a h1 h2 li ul div, etc...
- sempre utilizar classe ou id;

## SASS
- poder usar o css em cascata

```css

.title {
  color: red;

  span {
    color: coral;
  }

}
```

# Metodos de autenticação Next Js

- Token JWT: local storage;
- Next Auth : simples, login social, para não se preocupar com armazenamento de dados de credenciais;
- Serviços externos: Cognito, Auth0

# Dica
 visualizr melhor o console.log(JSON.stringfy(data, null, 2)) aonde 2 é o nível de indentação

 - sempre que possível faça a formatação dos dados(datas, valores monetários, etc..) ao consumir a API, não deixar para o frontend resolver essas formatações a cada renderização