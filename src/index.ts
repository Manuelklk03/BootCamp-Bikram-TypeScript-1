// Ejercicio 1
let nombre: string = "Manuel";
let edad: number = 22;
let activo: boolean = true;

console.log(nombre, edad, activo);

// Ejercicio 2
const precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(lista: number[]): number {
  return lista.reduce((total, precio) => total + precio, 0);
}

console.log(sumarPrecios(precios).toFixed(2));

// Ejercicio 3
function presentar(nombre: string, apellido?: string): string {
  return apellido ? `Hola, ${nombre} ${apellido}` : `Hola, ${nombre}`;
}

console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));
