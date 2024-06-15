const list = [
    'Você sabe que D-us tem um propósito na sua vida neh? Prazer, propósito.',
    'Você é Jericó? Se não é por que essas muralhas todas, facilita ai',
    'Irmã, você não é Tamar, mas está maravilhosa heim',
    'D-us quer te dar um banquete mas você aceita o primeiro miojo que aparece',
    'Eu como misericórdia tenho que fazer você feliz',
    'Até o cego de Jericó vê que eu estou gostando de você',
    'Vamos supor que o número de capítulos da Bíblia seja o número de chances que eu tenho de ficar contigo. Quantos capítulos a Bíblia teria?',
    'Imagina nós dois entrando de mãos dadas em dia de culto?',
    'Você é meu evangelho favorito',
    'Seu nome é Vitória? Porque o pastor falou que vitória é minha',
    'Qual é a data do seu aniversário mesmo? Só para eu saber quantos anos perdi longe de você',
    'Desculpa a demora, estava fazendo carinho na sua foto',
    'Eu não sou boa de matemática mas sei que o amor de D-us é infinito em sua vida, e o meu também',
    'Eu não sei se você acredita em amor à primeira vista mas quando Jesus estava mostrando o seu amor por nós, ele estava olhando pra você',
    'Hoje eu estava lendo número é percebi que não tinha o seu. Você poderia resolver isso por favor?',
    'Você não é Canaã mas é minha terra prometida',
    'Você acredita no amor de D-us? Então fica comigo pelo amor de D-us',
    'Faz o favor de entrar na minha casa, na minha vida, mexer com a minha estrutura',
    'Agora posso finalizar o meu jejum. Acabei de ver o motivo das minhas orações',
    'Estou orando a D-us para que ele possa me dar outro coração porque o que eu tinha você levou',
    'Jesus disse que devemos amar o próximo, você é o meu próximo',
    'Você é a minha porção, a minha herança',
    'Qual o nome de um dos filhos de Israel que começa com B? Benjamin? Beijo sim',
    'O viver em Cristo é maravilhoso e amar você é bom demais',
    ' A Bíblia diz que mil cairão ao teu lado, dez mil a tia direita, mas se tudo der certo eu cairei em seus braços',
    'Me chama de fé e não me abandona nunca',
];

document.querySelector('.button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomCantada = list[randomIndex];
    document.querySelector('.cantada').textContent = randomCantada;
});
