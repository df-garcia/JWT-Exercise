El desarrollo se enfocó en la creación de un backend que pudiera soportar un marketplace, con productos y usuarios encargados con diferentes roles. Para el desarrollo del proyecto se utilizó MongoDB (por medio de MongoDB Atlas) y Node.js

Para ejecutar correctamente el proyecto se deben ejecutar los comandos "npm install" y "npm start".

Los campos requeridos para la creación y modificación de objetos se incluyen en la colección de Postman entregada en el repositorio.

Los roles que se tuvieron en cuenta para el desarrollo de la aplicación son: "Admin", "Moderator" y "User".

Los usuarios únicamente pueden realizar peticiones GET para obtener los productos (ruta /products). 
Los moderadores son los únicos capaces de publicar y modificar productos (POST y PUT, por medio de la ruta /products). 
Finalmente, los administradores son los únicos capaces de eliminar un producto (DELETE) y los únicos capaces de añadir un nuevo usuario (ruta /auth/signup).

Para recibir un token, todos los usuarios se pueden autenticar por la ruta /auth/signin.

A continuación, se presenta un ejemplo de los Tokens generados para los 3 roles:

ADMIN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTlmODMyNGI4MTljMTg2ODEwMWVkNyIsImlhdCI6MTYwNDk3NDY0MiwiZXhwIjoxNjA1MDYxMDQyfQ.IeY4WHzB8-Dr2IFNRdqDjLSSNi69lYLOqBigWPHgtOA
MOD: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTlmODUwNGI4MTljMTg2ODEwMWVkOCIsImlhdCI6MTYwNDk3NDY3MiwiZXhwIjoxNjA1MDYxMDcyfQ.C07RUoBd74nqMwkAXQPP10AD73rrZyEwi9tf-Ol1Egg
USER: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTlmODYxNGI4MTljMTg2ODEwMWVkOSIsImlhdCI6MTYwNDk3NDY4OSwiZXhwIjoxNjA1MDYxMDg5fQ.wMQc6Bh2qQ8cCF-WxvCAMXxJaiaFzOb-hnuSPQIKITk