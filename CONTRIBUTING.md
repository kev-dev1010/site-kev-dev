
# 🧠 Contribuindo com o Projeto "site-kev-dev"

Este projeto é construído com [Vite](https://vitejs.dev/) e gerenciado com [pnpm](https://pnpm.io/).  
Siga as orientações abaixo para manter um fluxo de trabalho limpo e organizado.

---

## 🌳 Estrutura de Branches

- `main`: Branch de produção. Contém a versão final do site.
- `develop`: Branch de desenvolvimento. Recebe as funcionalidades testadas antes de ir para produção.
- `feature/<nome>`: Nova funcionalidade (ex: `feature/formulario-contato`)
- `bugfix/<nome>`: Correções de bugs encontradas durante o desenvolvimento
- `hotfix/<nome>`: Correções urgentes direto na `main`

---

## 🚀 Início Rápido

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/meu-site.git
   ```

2. Instale as dependências com `pnpm`:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

---

## 🧱 Criando uma Nova Feature

```bash
git checkout develop
git checkout -b feature/nome-da-feature
```

Após implementar e testar a funcionalidade:

```bash
git add .
git commit -m "feat: descrição da feature"
git checkout develop
git merge feature/nome-da-feature
git branch -d feature/nome-da-feature
```

---

## ✅ Enviando para Produção

```bash
git checkout main
git merge develop
git push origin main
```

---

## ✏️ Convenção de Commits

Utilize a seguinte convenção para manter o histórico organizado:

| Tipo       | Descrição                                  |
|------------|--------------------------------------------|
| `feat:`    | Nova funcionalidade                        |
| `fix:`     | Correção de bug                            |
| `docs:`    | Alterações na documentação                 |
| `style:`   | Estilização (espaços, ponto e vírgula...)  |
| `refactor:`| Refatoração (sem mudança de comportamento) |
| `test:`    | Adição ou ajuste de testes                 |
| `chore:`   | Tarefas de manutenção/configuração          |

**Exemplo de commit:**
```bash
git commit -m "feat(router): adiciona suporte à navegação SPA"
```

---

## 🧹 Boas práticas

- Commits pequenos e significativos (1 funcionalidade ou fix por commit)
- Sempre use branches para trabalhar (evite usar `develop` e `main` diretamente)
- Teste tudo antes de mesclar
- Documente o que for necessário (ex: mudanças no funcionamento do roteamento)

---

Este projeto está sendo desenvolvido com fins de aprendizado, organização pessoal e futuras publicações.  
Mantenha o código limpo, sem dependências desnecessárias e o fluxo sempre compreensível para você e para qualquer um que deseje colaborar no futuro.

---
