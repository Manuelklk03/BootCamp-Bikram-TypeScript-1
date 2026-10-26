Bikram de TypeScript
Introducción
Esta práctica contiene 20 ejercicios de dificultad progresiva para practicar TypeScript. Hazlos todos de forma individual o con ayuda de tus compañeros, pero asegúrate de entender y poder explicar tu código.

No hay tests automáticos. Comprueba tus soluciones compilando el código y ejecutándolo cuando corresponda.

Entrega
Crea un repositorio en GitHub para esta práctica.

Sube tus soluciones en uno o varios archivos .ts. Se recomienda utilizar un único archivo index.ts para todos los ejercicios.

Escribe un comentario antes de cada solución indicando su número, por ejemplo:

// Ejercicio 1
Sube los cambios al repositorio y entrega la URL del repositorio de GitHub.

Comprueba antes de entregar que el código está subido y que compila sin errores.

Puedes utilizar console.log() para comprobar los resultados. No hace falta crear una página web ni una interfaz gráfica.

Ejercicios
Marca cada ejercicio cuando lo hayas terminado.

Tipos básicos y funciones
 1. Variables tipadas. Declara las variables nombre, edad y activo con los tipos adecuados. Asígnales valores y muestra los tres por consola. Después, prueba a asignar un valor de tipo incorrecto a una de ellas y observa el error que indica TypeScript. Deja esa asignación incorrecta comentada.

 2. Lista de números. Crea un array precios que solo pueda contener números y guarda en él los valores 12.5, 30, 8.99 y 45. Crea una función sumarPrecios que reciba ese array y devuelva la suma de sus elementos.

 3. Función de presentación. Crea una función presentar que reciba un nombre obligatorio y un apellido opcional. Debe devolver un texto como "Hola, Ana Pérez". Si no se indica apellido, debe devolver "Hola, Ana".

 4. Calcular descuento. Crea una función calcularDescuento que reciba precio y porcentaje, ambos de tipo number, y devuelva el precio con el descuento aplicado. Por ejemplo, calcularDescuento(100, 20) debe devolver 80.

 5. Identificadores. Crea una función mostrarId que acepte un identificador que pueda ser string o number. Si recibe un texto, muéstralo en mayúsculas. Si recibe un número, muestra el número con dos decimales. Prueba la función con "usr-25" y 25.

Objetos, type e interface
 6. Objeto tipado. Define un type llamado Producto con las propiedades obligatorias nombre (string) y precio (number), y la propiedad opcional descripcion (string). Crea dos productos, uno con descripción y otro sin ella.

 7. Mostrar productos. Utiliza el tipo Producto del ejercicio anterior para crear una función mostrarProducto. Debe recibir un producto y devolver un texto con su nombre y precio, por ejemplo: "Teclado: 35 €". Llama a la función con los dos productos.

 8. Estados de una tarea. Crea un tipo EstadoTarea que solo permita los valores "pendiente", "en-proceso" y "completada". Crea una variable de ese tipo y prueba a asignarle "cancelada". Deja el intento incorrecto comentado para que el archivo pueda compilar.

 9. Interfaz de persona. Define una interface Persona con nombre (string), edad (number) y ciudad opcional (string). Crea dos personas, una con ciudad y otra sin ella. Crea una función que reciba una persona y muestre su información.

 10. Catálogo de libros. Define una interfaz Libro con titulo, autor, paginas y disponible. Crea un array de al menos tres libros. Escribe una función que reciba un libro y devuelva true si está disponible y false si no lo está. Utiliza la función para mostrar los libros disponibles.

Uniones, unknown y tipos utilitarios
 11. Datos que pueden faltar. Crea una función buscarUsuario que reciba un identificador numérico. Si el identificador es 1, debe devolver "Ana"; para cualquier otro identificador, debe devolver undefined. Llama a la función y comprueba si el resultado existe antes de convertirlo a mayúsculas.

 12. Comprobar un unknown. Declara una variable dato de tipo unknown y asígnale primero un texto. Comprueba con typeof si es un texto antes de utilizar toUpperCase(). Después, cambia el valor a un número y comprueba que tu código sigue siendo seguro.

 13. Actualizar parcialmente un usuario. Define un tipo Usuario con id, nombre, email y edad. Crea un objeto cambios de tipo Partial<Usuario> que modifique únicamente el email. Crea otro objeto resumen de tipo Pick<Usuario, "id" | "nombre"> con solo el identificador y el nombre.

 14. Usuario público. A partir del tipo Usuario del ejercicio anterior, crea un tipo UsuarioPublico utilizando Omit para excluir la propiedad email. Crea un objeto de ese tipo sin incluir el email.

 15. Configuración obligatoria y de solo lectura. Define una interfaz Configuracion con las propiedades opcionales tema e idioma. Crea una variable configuracionCompleta de tipo Required<Configuracion> e incluye ambas propiedades. Después, crea un usuario de tipo Readonly<Usuario> e intenta cambiar su nombre; deja el intento incorrecto comentado.

Clases, interfaces y enum
 16. Cuenta bancaria. Crea una clase CuentaBancaria con una propiedad privada saldo. El constructor debe recibir el saldo inicial. Añade un método ingresar(cantidad: number): void que solo ingrese cantidades positivas y un método consultarSaldo(): number que devuelva el saldo. Crea una cuenta, ingresa dinero y consulta el saldo.

 17. Elementos reproducibles. Define una interfaz Reproducible con el método reproducir(): void. Crea las clases Cancion y Video que implementen la interfaz. Cada clase debe mostrar un mensaje diferente al reproducirse. Guarda una instancia de cada clase en un array de tipo Reproducible y recórrelo llamando a reproducir().

 18. Estado de un pedido. Crea un enum llamado EstadoPedido con los estados Pendiente, Enviado y Entregado. Crea una función que reciba un estado y devuelva un mensaje distinto según el estado. Prueba la función con los tres valores.

Genéricos, promesas y tipos de objetos
 19. Primer elemento genérico. Crea una función genérica primero<T> que reciba un array de elementos de tipo T y devuelva el primer elemento. Si el array está vacío, debe devolver undefined. Prueba la función con un array de números y otro de textos.

 20. Registro de puntuaciones y promesa. Crea un tipo Puntuaciones utilizando Record<string, number> y guarda las puntuaciones de al menos tres alumnos. Después, crea una función obtenerMensaje de tipo async que devuelva una promesa de texto (Promise<string>). La función debe devolver un mensaje que incluya el nombre del alumno con la puntuación más alta. Llama a la función y muestra el resultado con .then() o utilizando await dentro de otra función async.

Comprobación final
Antes de entregar, revisa:

 He resuelto los 20 ejercicios.
 Cada solución empieza con un comentario que indica el número del ejercicio.
 He utilizado tipos en variables, parámetros y valores devueltos cuando corresponde.
 He probado el código y he corregido los errores de compilación.
 He subido los archivos .ts a GitHub.
 He comprobado que el repositorio se puede abrir y he copiado su URL para entregarla
