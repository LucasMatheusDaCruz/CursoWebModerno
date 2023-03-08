// const classificarTriangulo = (a, b, c) => {
//     if (a === b && b === c) {
//         return "Equilátero";
//     } else if (a === b || a === c || b === c) {
//         return "Isósceles";
//     } else {
//         return "Escaleno";
//     }
// }


const classificarTriangulo = (a, b, c) => {
    // Teorema da desigualdade triangular = lado + lado > comprimento do terceiro lado
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      return "Valores inválidos para os lados de um triângulo.";
    }
    if (a === b && b === c) {
      return "Equilátero";
    } else if (a === b || a === c || b === c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
  
console.log(classificarTriangulo(7, 7, 2))
console.log(classificarTriangulo(7, 7, 7))
console.log(classificarTriangulo(10.2, 7, 3))