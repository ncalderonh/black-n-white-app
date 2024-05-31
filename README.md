# Black and White Spa

## Descripción

La empresa "Black and White Spa" está promocionando una campaña para las redes sociales en donde quieren ofrecer un sitio web que permita escribir la URL de una imagen de internet y que ésta sea procesada por el servidor para ser devuelta en blanco y negro. Esta aplicación utiliza Node.js, Express y Jimp para manipular imágenes y devolverlas en escala de grises.

## Requerimientos

1. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario para el ingreso de la URL de la imagen a tratar.
2. Los estilos de este HTML deben ser definidos por un archivo CSS alojado en el servidor.
3. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen tomada por la URL enviada del formulario con el paquete Jimp. La imagen debe ser procesada en escala de grises y redimensionada a unos 350px de ancho.
4. La imagen alterada debe ser almacenada con un nombre que incluya una porción de un UUID y con extensión “jpg”, por ejemplo: `3dcb6d.jpg`.
5. La imagen procesada debe mostrarse en un modal al enviar el formulario.

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/ncalderonh/black-n-white-app.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd bnw-spa
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor:
    ```sh
    node app.js
    ```
2. Abre tu navegador y ve a `http://localhost:3000`.
3. Ingresa la URL de una imagen y presiona "Convertir a Blanco y Negro".
4. La imagen procesada se abrirá en un modal.

## Dependencias

- [Express](https://expressjs.com/) - Infraestructura web rápida, minimalista y flexible para Node.js.
- [Jimp](https://www.npmjs.com/package/jimp) - Biblioteca de manipulación de imágenes para Node.js.
- [UUID](https://www.npmjs.com/package/uuid) - Biblioteca para generar identificadores únicos.
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para diseño web responsive.
- [jQuery](https://jquery.com/) - Biblioteca JavaScript rápida, pequeña y rica en funciones.

## Estructura del Proyecto
  ```css
  black-and-white-spa/
  ├── node_modules/
  ├── processed/
  ├── public/
  │ ├── styles.css
  ├── views/
  │ └── index.html
  ├── app.js
  ├── package.json
  └── README.md


