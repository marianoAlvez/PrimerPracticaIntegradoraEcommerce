# Desafío Router y Multer



## Descripción de archivos

`routes/productsRoutes.js: ` Contiene las rutas relacionadas con los productos.

`routes/cartsRoutes.js: ` Contiene las rutas relacionadas con los carritos.

`managers/productsManager.js: ` Contiene la lógica de negocio relacionada con los productos.

`managers/cartsManager.js: ` Contiene la lógica de negocio relacionada con los carritos.

`data/products.json: ` Almacena los datos de los productos.

`data/carts.json: ` Almacena los datos de los carritos.

`app.js: ` Archivo principal donde se configura el servidor y se montan las rutas.


## Ejecución del Proyecto

1. Clona el repositorio desde GitHub.

2. Instala las dependencias del proyecto ejecutando `npm install`.

3. Inicia la aplicación con el comando `npm run start`.

4. Accede a la aplicación en tu navegador web utilizando la dirección `http://localhost:8080`.

## Dependencias Principales

El proyecto utiliza las siguientes dependencias principales:

- `express`: Framework de servidor web para Node.js que facilita la creación de aplicaciones web y APIs.
- `uuid`: Biblioteca para la generación de identificadores únicos universales (UUIDs).
- `multer`: Middleware de Node.js para manejar el procesamiento de archivos multipart/form-data.


## Dependencias de desarrollo

- `nodemon`: Herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos del proyecto. Se instala como una dependencia de desarrollo (--save-dev).

## Autor

[Mariano Alvez]

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
