// const fs = require("fs");

// fs.readFile("archivo.txt", "utf-8", (error, data) => {
//   console.log(data);
// });

// fs.writeFile(
//   "archivoNuevo.txt",
//   "Esto es el contenido del archivo",
//   (error, data) => {
//     console.log("Ya se ha creado!");
//   }
// );

// run `node index.js` in the terminal
const fs = require("fs");

const array = [
  {
    DNI: "23984723D",

    Nombre: "Paquito",

    Apellidos: "Garcia",
  },

  {
    DNI: "2398233F",

    Nombre: "Juanito",

    Apellidos: "Garcia",
  },
];

function arrObjToCsv(arr) {
  const head = Object.keys(arr[0]).join(",") + "\n";

  const body = arr.map((v) => Object.values(v) + ",").join("\n");

  return head + body;
}

const solution = arrObjToCsv(array);

// console.log(solution);

fs.writeFile("example.csv", solution, (err, data) => {
    if (!!err) {
        throw err;
    }
    console.log(data);
});

console.log(`Hello Node.js v${process.versions.node}!`);
