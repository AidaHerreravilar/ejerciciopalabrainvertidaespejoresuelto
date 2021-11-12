let cadena: String = "espejo";
let inverso: String = "";
for (let i: number = cadena.length - 1; i >= 0; --i) {
  inverso += cadena[i];
}
console.log(inverso);
