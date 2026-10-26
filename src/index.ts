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

// Ejercicio 4
function calcularDescuento(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje) / 100;
}

console.log(calcularDescuento(100, 20));

// Ejercicio 5
function mostrarId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

mostrarId("usr-25");
mostrarId(25);

// Ejercicio 6
type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
};

const producto1: Producto = {
  nombre: "Teclado",
  precio: 35,
  descripcion: "Teclado mecánico",
};

const producto2: Producto = {
  nombre: "Ratón",
  precio: 20,
};
