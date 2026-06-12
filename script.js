const perguntas = [
    {
        pergunta: "Como é que os teus clientes encontram o teu negócio?",
        opcoes: [
            "Maioritariamente pelo Instagram ou redes sociais",
            "Pelo passa-palavra e recomendações",
            "Pelo Google ou pesquisas online",
            "Ainda não tenho muitos clientes"
        ],
        pontos: [3, 1, 2, 0]
    },
    {
        pergunta: "Como descreves a tua presença visual atual?",
        opcoes: [
            "Tenho logo e cores definidas, mas podia ser melhor",
            "Uso o que consigo — não há grande consistência",
            "Está bem, mas não representa o que quero transmitir",
            "Praticamente não tenho identidade visual"
        ],
        pontos: [2, 1, 3, 0]
    },
    {
        pergunta: "Qual é o teu maior desafio agora?",
        opcoes: [
            "Atrair novos clientes",
            "Parecer mais profissional e credível",
            "Destacar-me da concorrência",
            "Não sei bem por onde começar"
        ],
        pontos: [2, 3, 1, 0]
    },
    {
        pergunta: "Que tipo de negócio tens?",
        opcoes: [
            "Serviços (barbearia, clínica, ginásio, etc.)",
            "Restaurante ou café",
            "Loja ou e-commerce",
            "Negócio pessoal ou marca própria"
        ],
        pontos: [2, 1, 3, 2]
    },
    {
        pergunta: "O que esperas de uma agência de branding?",
        opcoes: [
            "Um site profissional que converta visitantes",
            "Uma identidade visual forte e consistente",
            "Estratégia completa: marca, site e redes sociais",
            "Ainda estou a explorar opções"
        ],
        pontos: [2, 1, 3, 0]
    }
];

const resultados = [
    {
        minimo: 10,
        titulo: "🔥 A tua marca está pronta para escalar",
        descricao: "Tens base sólida mas precisas de estratégia para o próximo nível. A Nexar pode ajudar-te a construir uma presença digital que converte."
    },
    {
        minimo: 6,
        titulo: "⚡ A tua marca tem potencial por explorar",
        descricao: "Estás no caminho certo mas a tua identidade visual ainda não reflete o valor real do teu negócio. É hora de mudar isso."
    },
    {
        minimo: 0,
        titulo: "🎯 A tua marca precisa de uma base forte",
        descricao: "Todos os grandes negócios começaram do zero. A Nexar especializa-se em construir marcas de raiz com identidade, estratégia e presença digital."
    }
];

let perguntaAtual = 0;
let pontuacaoTotal = 0;

function iniciarQuiz() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    mostrarPergunta();
}

function mostrarPergunta() {
    const p = perguntas[perguntaAtual];
    document.getElementById('progresso').textContent = 
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    document.getElementById('pergunta').textContent = p.pergunta;

    const opcoes = document.getElementById('opcoes');
    opcoes.innerHTML = '';

    p.opcoes.forEach((texto, index) => {
        const btn = document.createElement('button');
        btn.textContent = texto;
        btn.className = 'opcao';
        btn.onclick = () => responder(p.pontos[index]);
        opcoes.appendChild(btn);
    });
}

function responder(pontos) {
    pontuacaoTotal += pontos;
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');

    const resultado = resultados.find(r => pontuacaoTotal >= r.minimo);
    document.getElementById('titulo-resultado').textContent = resultado.titulo;
    document.getElementById('descricao-resultado').textContent = resultado.descricao;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacaoTotal = 0;
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}