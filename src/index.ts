/*•Dados un arreglo de texto y dos
arreglos de enteros de tamaño n:
      •nombres Como Texto
      •años Como Entero y altura Como Entero
•Ordénelos los tres vectores a la vez
según los años, y en caso que haya
un empate, utilice la altura para
desempatar
•Tener en cuenta que los intercambios
tienen que cambiar los elementos de
los tres vectores a la vez
 */

let cantidad: number = 5;
let nombres: string[] = new Array(cantidad);
let edad: number[] = new Array(cantidad);
let altura: number[] = new Array(cantidad);
let persona: number;

for (persona = 0; persona < cantidad; persona++) {
  let nombAux: string = String(prompt(`Nombre ${persona + 1}:`));
  let edadAux: number = Number(prompt(`Edad ${persona + 1}:`));
  let alturaAux: number = Number(prompt(`Altura ${persona + 1}:`));

  let i: number = 0;

  while (
    (i < persona && edad[i] < edadAux) ||
    (edad[i] === edadAux && altura[i] < alturaAux)
  ) {
    i++;
  }
  for (let j: number = persona; j > i; j--) {
    nombres[j] = nombres[j - 1];
    edad[j] = edad[j - 1];
    altura[j] = altura[j - 1];
  }
  nombres[i] = nombAux;
  edad[i] = edadAux;
  altura[i] = alturaAux;
}

for (persona = 0; persona < cantidad; persona++) {
  console.log(
    nombres[persona] + " - " + edad[persona] + " - " + altura[persona]
  );
}
