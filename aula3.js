const { texto, arquivos } = require("./base");

// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

console.log(texto);
const regExp1 = /Jo+ão+/gi
console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  // if(!valido) continue;

  console.log(arquivo, valido);
}

var textis =
  "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Mussummmmmmm Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor 22 Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor..";

// Um detelhe não abordado nos casos de uso das chaves
// para quantificar grupos de caracteres, só funcionam
// dentro dos grupos como no exemplo abaixo ↓
const deniRegEx = /(Muss)(u(m{5,10})) (I*)psum/gi;
console.log(deniRegEx.exec(textis));
console.log(textis.match(deniRegEx));
