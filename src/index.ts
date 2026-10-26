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

// Ejercicio 7
function mostrarProducto(producto: Producto): string {
  return `${producto.nombre}: ${producto.precio} €`;
}

console.log(mostrarProducto(producto1));
console.log(mostrarProducto(producto2));

// Ejercicio 8
type EstadoTarea = "pendiente" | "en-proceso" | "completada";

let estadoTarea: EstadoTarea = "pendiente";

estadoTarea = "en-proceso";

console.log(estadoTarea);

// Ejercicio 9
interface Persona {
  nombre: string;
  edad: number;
  ciudad?: string;
}

const persona1: Persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid",
};

const persona2: Persona = {
  nombre: "Luis",
  edad: 30,
};

function mostrarPersona(persona: Persona): void {
  console.log(`${persona.nombre}, ${persona.edad} años`);

  if (persona.ciudad) {
    console.log(`Ciudad: ${persona.ciudad}`);
  }
}

mostrarPersona(persona1);
mostrarPersona(persona2);

// Ejercicio 10
interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}

const libros: Libro[] = [
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
    disponible: true,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    disponible: false,
  },
  {
    titulo: "El hobbit",
    autor: "J. R. R. Tolkien",
    paginas: 310,
    disponible: true,
  },
];

function estaDisponible(libro: Libro): boolean {
  return libro.disponible;
}

libros.filter(estaDisponible).forEach((libro) => console.log(libro.titulo));

// Ejercicio 11
function buscarUsuario(id: number): string | undefined {
  return id === 1 ? "Ana" : undefined;
}

const usuarioEncontrado = buscarUsuario(1);

if (usuarioEncontrado !== undefined) {
  console.log(usuarioEncontrado.toUpperCase());
}

// Ejercicio 12
let dato: unknown = "Hola TypeScript";

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}

dato = 42;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("El dato no es un texto");
}

// Ejercicio 13
type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
};

const cambios: Partial<Usuario> = {
  email: "ana.nuevo@email.com",
};

const resumen: Pick<Usuario, "id" | "nombre"> = {
  id: 1,
  nombre: "Ana",
};

console.log(cambios, resumen);

// Ejercicio 14
type UsuarioPublico = Omit<Usuario, "email">;

const usuarioPublico: UsuarioPublico = {
  id: 1,
  nombre: "Ana",
  edad: 25,
};

console.log(usuarioPublico);

// Ejercicio 15
interface Configuracion {
  tema?: string;
  idioma?: string;
}

const configuracionCompleta: Required<Configuracion> = {
  tema: "oscuro",
  idioma: "es",
};

const usuarioSoloLectura: Readonly<Usuario> = {
  id: 2,
  nombre: "Luis",
  email: "luis@email.com",
  edad: 30,
};

console.log(configuracionCompleta, usuarioSoloLectura);

// Ejercicio 16
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  ingresar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(100);

cuenta.ingresar(50);

console.log(cuenta.consultarSaldo());

// Ejercicio 17
interface Reproducible {
  reproducir(): void;
}

class Cancion implements Reproducible {
  reproducir(): void {
    console.log("Reproduciendo una canción");
  }
}

class Video implements Reproducible {
  reproducir(): void {
    console.log("Reproduciendo un vídeo");
  }
}

const elementos: Reproducible[] = [new Cancion(), new Video()];

elementos.forEach((elemento) => elemento.reproducir());

// Ejercicio 18
enum EstadoPedido {
  Pendiente = "pendiente",
  Enviado = "enviado",
  Entregado = "entregado",
}

function mensajePedido(estado: EstadoPedido): string {
  switch (estado) {
    case EstadoPedido.Pendiente:
      return "El pedido está pendiente";

    case EstadoPedido.Enviado:
      return "El pedido ya se ha enviado";

    case EstadoPedido.Entregado:
      return "El pedido ha sido entregado";
  }
}

console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));

// Ejercicio 19
function primero<T>(elementos: T[]): T | undefined {
  return elementos[0];
}

console.log(primero([10, 20, 30]));
console.log(primero(["Ana", "Luis"]));
console.log(primero([]));

// Ejercicio 20
type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = {
  Ana: 9,
  Luis: 7,
  Marta: 9.5,
};

async function obtenerMensaje(): Promise<string> {
  const [nombre, nota] = Object.entries(puntuaciones).reduce((mejor, actual) =>
    actual[1] > mejor[1] ? actual : mejor,
  );

  return `${nombre} tiene la puntuación más alta: ${nota}`;
}

obtenerMensaje().then((mensaje) => console.log(mensaje));
