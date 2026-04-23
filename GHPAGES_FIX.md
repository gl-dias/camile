# ⚙️ Checklist - GitHub Pages Fix

## 1️⃣ Ativar Actions no Repositório

- Vá em: `https://github.com/gl-dias/Love/settings/actions`
- Em **"Actions permissions"**, selecione:
  - ✅ `Allow all actions and reusable workflows`
- Clique em **Save**

## 2️⃣ Configurar GitHub Pages

- Vá em: `https://github.com/gl-dias/Love/settings/pages`
- Em **Source**:
  - Branch: `gh-pages`
  - Folder: `/ (root)`
- Clique em **Save**

> ⚠️ A branch `gh-pages` será criada automaticamente pelo workflow

## 3️⃣ Fazer Novo Push

```bash
git add .
git commit -m "Fix: Correct GitHub Pages workflow permissions"
git push origin main
```

Isso acionará um novo workflow com as permissões corretas!

## 📊 Monitorar Deploy

- Vá em: `https://github.com/gl-dias/Love/actions`
- Veja o status do workflow
- Quando terminar (✅), seu site estará em:
  ```
  https://gl-dias.github.io/Love/
  ```

## 🆘 Se ainda tiver erro

Se o erro persistir após essas mudanças, tente:

```bash
# Limpar cache do git
rm -rf .git/hooks

# Fazer push com force
git push origin main --force
```

## ✨ Resultado Final

Seu site será publicado automaticamente a cada push para `main`!
