# CrudNode

Proyecto de Prueba para Desarrollador Fullstack
Este proyecto fue creado como parte del proceso de selección para la vacante de Desarrollador Fullstack en Optimal Technology. En este repositorio se encuentra la solución para la prueba técnica que incluye el desarrollo de un formulario con operaciones CRUD, una API RESTful, y la contenerización del proyecto usando Docker.

Requisitos de la prueba
La prueba consistía en realizar las siguientes tareas:

Frontend: Crear un formulario básico con operaciones CRUD.
Backend: Crear una API RESTful para gestionar los datos del formulario.
DevOps: Contenerizar la aplicación utilizando Docker.
Despliegue: Subir el proyecto a un servidor y alojarlo públicamente.
Estructura del proyecto
Este proyecto está dividido en dos partes principales:

Frontend: La parte del formulario que interactúa con la API.
Backend: El servicio API RESTful que gestiona los datos.
El proyecto está contenedorizado con Docker y puede ser ejecutado de manera sencilla con los archivos de configuración necesarios.

Tecnologías utilizadas
Frontend:

HTML
CSS
JavaScript (o framework/lenguaje usado)

Backend:
Node.js, 

DevOps:

Docker
docker-compose

Instalación y ejecución
1. Clonar el repositorio
Clona este repositorio a tu máquina local:

bash
Copiar código
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
2. Iniciar los contenedores con Docker
Asegúrate de tener Docker y docker-compose instalados en tu máquina. Para ejecutar ambos servicios (frontend y backend) en contenedores separados, puedes usar el siguiente comando:

bash
Copiar código
docker-compose up --build
Esto levantará los contenedores y los servicios estarán disponibles según lo configurado en los puertos especificados en docker-compose.yml.

3. Acceso al proyecto
Una vez que los contenedores estén en ejecución, puedes acceder al formulario frontend a través del siguiente enlace (ajustar el puerto si es necesario):

Frontend: http://localhost:3000
Backend (API REST): http://backend:5000
Descripción del funcionamiento
Frontend
El frontend es un formulario básico que permite las siguientes operaciones CRUD sobre los datos:

Crear un nuevo elemento (por ejemplo, agregar un producto o libro).
Leer todos los elementos almacenados.
Actualizar un elemento existente.
Eliminar un elemento.
Los datos se envían al Backend a través de peticiones HTTP (POST, GET, PUT, DELETE) y se almacenan en una base de datos o en un archivo JSON, dependiendo de la implementación.

Backend
La API RESTful proporciona los siguientes endpoints:

GET /items: Lista todos los elementos almacenados.
GET /items/:id: Obtiene un elemento específico por su ID.
POST /items: Agrega un nuevo elemento.
PUT /items/:id: Actualiza un elemento existente.
DELETE /items/:id: Elimina un elemento.
La API responde en formato JSON y se encarga de las operaciones CRUD de los datos.

Dockerización
El proyecto está contenido en dos contenedores separados utilizando Docker:

Frontend: Contenedor que aloja el formulario.
Backend: Contenedor que aloja la API RESTful.
Ambos contenedores están orquestados mediante el archivo docker-compose.yml, lo que permite que se comuniquen entre sí.

Despliegue
El proyecto está configurado para ser desplegado en un servidor de producción utilizando Docker. El código ha sido subido a GitHub en dos repositorios separados: uno para el frontend y otro para el backend.

1. Subir el proyecto a un servidor
Para ejecutar este proyecto en un servidor remoto, sigue estos pasos:

Subir ambos repositorios (frontend y backend) al servidor.
Clonar los repositorios en el servidor.
Asegurarse de que Docker y Docker Compose estén instalados en el servidor.
Ejecutar docker-compose up --build en el servidor para levantar ambos contenedores.
Evaluación
Esta prueba fue evaluada en base a los siguientes aspectos:

Conocimientos de Frontend: Creación de formularios y gestión de operaciones CRUD.
Conocimientos de Backend: Desarrollo de una API RESTful, manejo de operaciones CRUD y validación de datos.
Conocimientos de Docker: Contenerización de ambos servicios y uso de docker-compose.
Despliegue: Despliegue de los contenedores en un servidor y subida a GitHub.
Conclusión
Este proyecto proporciona una solución completa de un sistema CRUD, utilizando buenas prácticas de desarrollo tanto en el frontend como en el backend, y con un enfoque moderno de contenerización y despliegue.

