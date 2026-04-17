Atividade: App de Cursos com Login e Rotas Dinâmicas
Objetivo: Desenvolver um aplicativo em React Native utilizando Expo Router com navegação, rotas dinâmicas e consumo de dados locais em JSON.

Objetivos de Aprendizagem
Implementar navegação entre telas
Utilizar rotas dinâmicas
Manipular dados a partir de um arquivo JSON
Relacionar dados entre entidades (curso e instrutor)
Contexto
O aplicativo simula uma plataforma de cursos. O usuário deve:

Realizar login (apenas clicar no botão "Entrar")
Visualizar 3 botões de cursos (quando clica em um, acessa a tela de detalhes do curso)
Acessar a tela de detalhes de um curso (quando clica no nome do instrutor acessa a tela de detalhes do instrutor)
Visualizar o instrutor relacionado ao curso
Estrutura do Projeto
app/
├── \_layout.js
├── index.js
├── lista.js
└── cursos/
└── [id].js
└── instrutores/
└── [id].js

data/
└── dados.json
Estrutura do JSON
{
"cursos": [
{ "id": "5d41402abc4b2a76b9719d911017c592", "nome": "React Native", "idInstrutor": "098f6bcd4621d373cade4e832627b4f6" },
{ "id": "7d793037a0760186574b0282f2f435e7", "nome": "Node.js", "idInstrutor": "e4d909c290d0fb1ca068ffaddf22cbd0" },
{ "id": "9e107d9d372bb6826bd81d3542a419d6", "nome": "Banco de Dados", "idInstrutor": "098f6bcd4621d373cade4e832627b4f6" }
],
"instrutores": [
{ "id": "e4d909c290d0fb1ca068ffaddf22cbd0", "nome": "Ana Silva" },
{ "id": "098f6bcd4621d373cade4e832627b4f6", "nome": "Carlos Souza" }
]
}
Tela de Login (/)
Requisitos:

Campo de usuário
Campo de senha
Botão "Entrar"
Ação: Ao clicar no botão, redirecionar para a tela inicial (/lista).

Lista de cursos (/lista)
Requisitos:

Listar os 3 cursos do JSON
Exibir o nome de cada curso
Tela de Curso (/cursos/[id])
Requisitos:

Receber o parâmetro id da rota
Buscar o curso correspondente no JSON
Buscar o instrutor relacionado usando idInstrutor
Exibir:

Nome do curso
Nome do instrutor
Tela de Instrutor (/instrutores/[id])
Requisitos:

Receber o parâmetro id da rota
Buscar o instrutor correspondente no JSON
Exibir:

Nome do instrutor
Cursos ministrados
