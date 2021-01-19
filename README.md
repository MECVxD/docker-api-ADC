## Ejecutar la aplicación
1. Posicionarlos desde la terminal en el directorio del repositorio
2. Ejecutar el siguiente comando, cambiando **`<nombre>`** por el nombre que queramos:

    `sudo docker build -t <nombre> .`
3. Nos pedira la contraseña
4. Esperamos y una vez que termine ejecutamos el comando:

    `docker images`
5. Buscamos la imagen que tenga el nombre que establecimos
6. Eejecutamos el siguiente comando, cambiando **`<0000:0000>`** por el puerto que deseemos y **`<nombre>`** puede ser el mismo o otro que queramos:

    `docker run -p <0000:0000> <nombre>`
7. Finalmente podemos probar la aplicacion en insomnia o postman            