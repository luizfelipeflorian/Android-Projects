# Warframe - Orbiter Navigation Console

## Tema Escolhido: Warframe

Interface inspirada no **Console de Navegação do Orbiter** do jogo **Warframe**, reproduzindo a estética futurista e sci-fi com componentes React Native e Expo.

### Descrição

Warframe é um jogo de ação em terceira pessoa free-to-play que coloca o jogador no papel de um Tenno, um antigo guerreiro despertado por um programa de IA chamado Lotus. O Orbiter é a nave-base do jogador, e seu console de navegação é o ponto de acesso para aceitar missões e explorar o universo do jogo.

Este projeto reproduz essa experiência em React Native com:

- Interface responsiva com componentes reutilizáveis
- Design visual fiel ao tema Warframe
- Gestão de estado para interatividade
- Integração de imagens de personagens e planetas

## Design Visual

### Paleta de Cores

| Elemento          | Cor       | Uso                        |
| ----------------- | --------- | -------------------------- |
| Fundo Escuro      | `#0a0e27` | Cor base da interface      |
| Fundo Mais Escuro | `#050710` | Componentes sobrepostos    |
| Azul Neon (Ciano) | `#00d9ff` | Bordas e destaque primário |
| Ciano Claro       | `#00e5ff` | Variações neon             |
| Ciano Escuro      | `#00a8cc` | Sombras de neon            |
| Dourado Prime     | `#d4af37` | Acentos secundários        |
| Dourado Brilhante | `#ffd700` | Destaque especial          |
| Branco            | `#ffffff` | Textos principais          |
| Cinza Médio       | `#888888` | Textos secundários         |
| Cinza Escuro      | `#444444` | Textos terciários          |

### Cores por Tipo de Missão

- **Extermínio**: `#ff6b6b` (Vermelho)
- **Sobrevivência**: `#ffd93d` (Amarelo)
- **Defesa**: `#6bcf7f` (Verde)
- **Espionagem**: `#a78bfa` (Roxo)

### Elementos Visuais

- **Opacidade variada**: Efeito de profundidade com níveis entre 0.3 e 1.0
- **Bordas neon**: Linhas de 2px em ciano e dourado para separações
- **Ícones temáticos**: Símbolos do Lucide React representando tipos de missões
- **Typography**: Espaçamento de letras e bold para impacto futurista
- **Border radius**: Cantos arredondados em 8px para suavidade

## Componentes Implementados

### Header

- Saudação personalizável "Saudações, Tenno"
- Efeito de glow no texto "Tenno" (text shadow)
- Linha decorativa inferior em ouro com baixa opacidade
- Background escuro com borda ciano

### SearchBar

- Barra de busca com placeholder "Buscar Planeta ou Nodo..."
- Ícone de lupa (Lucide React)
- Bordas em ciano com border-radius 8px
- Input com feedback visual

### CategoryCard

Componente reutilizável para categorias de missões com suporte a:

- Ícone dinâmico (Lucide React)
- Título customizável
- Cor de borda personalizada por tipo
- Touchable com activeOpacity para feedback visual

Categorias disponíveis:

- Extermínio (Ícone: Swords)
- Sobrevivência (Ícone: Clock)
- Defesa (Ícone: Shield)
- Espionagem (Ícone: Lock)

### BannerPromo

- Alerta tático com título e subtítulo dinâmicos
- Bordas em dourado com ícone de alerta
- Seta em ciano no lado direito
- Flexbox com feedback tátil

### MissionCard

Card reutilizável exibindo:

- Imagem de planeta ou ícone placeholder
- Rota da missão
- Tipo de missão (ex: Defesa, Captura, Extermínio)
- Fação inimiga
- Perfil do líder com imagem circular
- Reputação a ganhar
- Touchable com activeOpacity

Props tipadas com TypeScript para garantir segurança de tipos.

### FooterMenu

Menu inferior com navegação com 4 opções:

- Orbiter
- Navegação
- Mercado
- Códex

Recursos:

- Item ativo destacado com borda e background ciano
- Ícones em 24px
- Labels dinâmicas com cor diferente quando ativo
- Callback onPress para interatividade

## Adaptabilidade e Responsividade

A interface foi desenvolvida com foco em compatibilidade cross-platform:

- **SafeAreaView**: Garante compatibilidade com notches e home indicators
- **Flexbox**: Layout responsivo que se adapta a qualquer tamanho
- **StyleSheet**: Estilos otimizados do React Native
- **ScrollView**: Conteúdo rolável sem limite de altura

Suportado em:

- Telefones pequenos (320px+)
- Tablets em portrait
- Tablets em landscape
- Diferentes orientações de tela

## Estrutura do Projeto

```
aula0604/
├── app/
│   ├── _layout.tsx          # Configuração de rotas
│   └── index.tsx            # Tela principal
├── components/
│   ├── Header.tsx           # Cabeçalho com saudação
│   ├── SearchBar.tsx        # Barra de busca
│   ├── CategoryCard.tsx     # Card de categorias
│   ├── BannerPromo.tsx      # Banner promocional
│   ├── MissionCard.tsx      # Card de missões
│   ├── FooterMenu.tsx       # Menu de navegação
│   └── Style.tsx            # Estilos centralizados
├── assets/
│   └── images/              # Imagens de personagens e planetas
├── constants/               # Variáveis constantes
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo CLI (opcional: `npm install -g expo-cli`)

### Instalação e Execução

1. Instalar dependências:

   ```bash
   npm install
   ```

2. Iniciar o projeto:

   ```bash
   npm start
   ```

3. Executar em diferentes plataformas:

   ```bash
   npm run android   # Android
   npm run ios       # iOS
   npm run web       # Web (navegador)
   ```

4. Validação de código:
   ```bash
   npm run lint      # ESLint com Expo config
   ```

## Tecnologias Utilizadas

| Tecnologia                    | Versão  | Propósito              |
| ----------------------------- | ------- | ---------------------- |
| React Native                  | 0.81.5  | Framework mobile       |
| Expo                          | 54.0.33 | Tooling e build        |
| Expo Router                   | 6.0.23  | Roteamento e navegação |
| TypeScript                    | 5.9.2   | Type-safety            |
| React                         | 19.1.0  | UI framework           |
| Lucide React Native           | 1.7.0   | Ícones SVG             |
| React Native SafeArea Context | 5.6.0   | Compatibilidade notch  |
| React Native Reanimated       | 4.1.1   | Animações              |
| React Native Gesture Handler  | 2.28.0  | Gestos avançados       |

## Características Principais

- **Componentes reutilizáveis**: 6 componentes principais com TypeScript
- **Estilos centralizados**: Arquivo `Style.tsx` com todos os estilos
- **Design responsivo**: Adapta-se a qualquer tamanho de tela
- **Ícones dinâmicos**: Integração com Lucide React Native
- **Imagens de personagens**: Perfis visuais de personagens Warframe
- **Feedback visual**: TouchableOpacity e activeOpacity em componentes interativos
- **Type-safe**: Interfaces TypeScript em componentes
- **Cross-platform**: Funciona em Android, iOS e Web

## Créditos e Referências

- Tema visual: Warframe (Digital Extremes)
- UI Framework: React Native com Expo
- Ícones: Lucide React Native
- Stack: React 19 + TypeScript 5.9 + Expo Router 6
