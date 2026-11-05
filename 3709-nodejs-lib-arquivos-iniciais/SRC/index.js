// Importa o módulo fs do Node.js para trabalhar com arquivos
const fs = require('fs');

// Pega os argumentos passados pelo terminal
const CaminhoArquivo = process.argv;

// Pega o caminho do arquivo informado no terminal (posição 2)
const link = CaminhoArquivo[2];

// Lê o arquivo informado
fs.readFile(link, 'utf-8', (erro, texto) => {

    // Verifica se aconteceu algum erro durante a leitura
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }

    // Chama a função e passa o conteúdo do arquivo como parâmetro
    const resultado = VerificarPalavraDuplicada(texto);

    // Exibe o resultado da contagem no terminal
    console.log(resultado);
});


// Função responsável por verificar e contar as palavras repetidas
function VerificarPalavraDuplicada(texto) {

    // Transforma todo o texto em letras minúsculas
    const textoP = texto.toLowerCase();

    // Divide o texto em palavras utilizando o espaço como separador
    const ListaPalavras = textoP.split(' ');

    // Cria uma lista de palavras que não queremos contabilizar
    const palavrasIgnoradas = ['a', 'o', 'de', 'do', 'da'];

    // Cria um objeto vazio para armazenar as palavras e suas quantidades
    const resultado = {};

    // Percorre cada palavra existente na lista
    ListaPalavras.forEach(palavra => {

        // Verifica se a palavra está na lista de palavras ignoradas
        if (palavrasIgnoradas.includes(palavra)) {

            // Pula a palavra atual e passa para a próxima repetição
            return;
        }

        // Verifica se a palavra já existe no objeto
        // Se existir, pega a quantidade atual
        // Se não existir, começa com zero
        // Depois adiciona mais uma ocorrência
        resultado[palavra] = (resultado[palavra] || 0) + 1;

    });

    // Retorna o objeto com as palavras e suas respectivas quantidades
    return resultado;
}

