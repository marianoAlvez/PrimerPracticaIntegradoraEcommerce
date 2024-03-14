# Primer Practica Integradora Ecommerce


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

## Para Probar los Endpoints con Postman

## Productos

- `Busco Productos`
GET localhost:8080/api/products/

- `Busco Producto por ID`
GET localhost:8080/api/products/:pid

- `Creo un Producto`
POST localhost:8080/api/products/
    BODY {
        "title": "Product 2",
        "description": "Description of product 2",
        "code": "P002",
        "price": 300.99,
        "status": false,
        "stock": 45,
        "category": "Category A",
        "thumbnails": [
            "image3.jpg",
            "image4.jpg"
        ]
    }

- `Actualizo un Producto`
PUT localhost:8080/api/products/:pid
    BODY {
        "title": "Product 2",
        "description": "Description of product 2",
        "code": "P002",
        "price": 100,
        "status": false,
        "stock": 10,
        "category": "Category A",
        "thumbnails": [
            "image3.jpg",
            "image4.jpg"
        ]
    }

- `Borro un Producto`
DELETE localhost:8080/api/products/:pid

## Carrito

- `Busco Carrito por ID`
GET localhost:8080/api/cart/:cid

- `Creo un Carrito`
POST localhost:8080/api/cart/

- `Agrego un Producto al Carrito`
POST localhost:8080/api/cart/:cid/products/:pid
    BODY {
	"quantity": 1
    }
    
