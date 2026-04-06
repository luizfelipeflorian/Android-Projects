# Warframe - Orbiter Navigation Console

## 🎮 Tema Escolhido: Warframe

Este projeto implementa uma interface inspirada no **Console de Navegação do Orbiter** do jogo **Warframe**, reproduzindo a estética futurista e sci-fi do game com componentes React Native.

### 📖 Descrição

Warframe é um jogo de ação em terceira pessoa free-to-play que coloca o jogador no papel de um Tenno, um antigo guerreiro despertado por um programa de IA chamado Lotus. O Orbiter é a nave-base do jogador, e seu console de navegação é o ponto de acesso para aceitar missões e explorar o universo do jogo.

## 🎨 Design Visual

### Paleta de Cores

- **Fundo**: `#0a0e27` (Quase preto com tom azulado)
- **Azul Neon (Ciano)**: `#00d9ff` - Cor primária do Orbiter
- **Dourado Prime**: `#d4af37` - Detalhes e acentos
- **Branco**: `#ffffff` - Texto principal
- **Cinza**: `#888888` / `#444444` - Texto secundário

### Elementos Visuais

- **Opacidade moderada**: Cria profundidade e efeito de interface holográfica
- **Bordas neon**: Linhas de 2px em ciano para separações
- **Ícones temáticos**: Símbolos representando diferentes tipos de missões
- **Typography**: Letras espaçadas e bold para impacto futurista

## 🧩 Componentes Implementados

### 1. **Header**

- Saudação "Saudações, Tenno" com efeito glow no nome
- Linha decorativa inferior
- Tema escuro com bordas neon

### 2. **SearchBar**

- Barra de busca com placeholder "Buscar Planeta ou Nodo..."
- Ícone de lupa
- Bordas em ciano

### 3. **CategoryCard**

- 4 categorias de missões reutilizáveis:
  - ⚔️ Extermínio (Vermelho)
  - ⏱️ Sobrevivência (Amarelo)
  - 🛡️ Defesa (Verde)
  - 🔒 Espionagem (Roxo)
- Touchable com feedback visual
- Ícones coloridos por tipo

### 4. **BannerPromo**

- Banner com alerta tático
- Mensagem: "Alerta Tático do Void! Inicie Fendas do Void antes de amanhã e dobre seus Ducats"
- Bordas em ouro com linha lateral em ciano

### 5. **MissionCard**

- Cards de próximas missões
- Exibe:
  - Rota (ex: Orbiter → Cetus)
  - Tipo de missão
  - Fação inimiga
  - Nave disponível
  - Perfil do líder/personagem
  - Reputação a ganhar

### 6. **FooterMenu**

- Menu inferior com 4 opções principais:
  - 🚀 Orbiter
  - 🧭 Navegação
  - 🛍️ Mercado
  - 📖 Códex
- Item ativo destacado em ciano
- Bordas superiores em neon

## 📱 Adaptabilidade

A interface foi desenvolvida utilizando:

- **SafeAreaView**: Garante compatibilidade com diferentes tamanhos de tela
- **Flexbox**: Layout responsivo
- **StyleSheet**: Estilos otimizados para diminuir re-renders

O design se adapta bem a:

- Telefones pequenos (320px+)
- Tablets
- Diferentes orientações

## 🏗️ Estrutura do Projeto

```
aula0604/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── components/
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── CategoryCard.tsx
│   ├── BannerPromo.tsx
│   ├── MissionCard.tsx
│   └── FooterMenu.tsx
├── constants/
│   └── colors.ts
├── package.json
└── README.md
```

## 🚀 Como Executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Iniciar o projeto:**

   ```bash
   npm start
   ```

3. **Testar em diferentes plataformas:**
   ```bash
   npm run web    # Web
   npm run ios    # iOS
   npm run android # Android
   ```

## 🎯 Avaliação dos Critérios

✅ **Interface fiel à estrutura** - Reproduz o console do Orbiter
✅ **5+ Componentes reutilizáveis** - Header, SearchBar, CategoryCard, BannerPromo, MissionCard, FooterMenu
✅ **Cada componente em arquivo separado** - Estrutura modular
✅ **Tema visual personalizado** - Warframe com cores neon
✅ **Paleta de cores criativa** - Azul neon + dourado prime
✅ **Adaptável a diferentes tamanhos** - SafeAreaView + Flexbox
✅ **StyleSheet obrigatório** - Nenhuma lib externa de UI
✅ **React Native + Expo** - Stack modernizado

## 📚 Tecnologias Utilizadas

- **React Native** ~0.81.5
- **Expo** ~54.0.33
- **Expo Router** ~6.0.23
- **TypeScript** ~5.9.2
- **StyleSheet** (React Native nativo)

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como atividade prática de React Native com foco em componentização e estilização.

---

**Tenno, prepare-se para lutar! 🎮**
