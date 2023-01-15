<p align="center">
  <h1 align="center">::Base de trabajo básica para FRONT-END::</h1>
</p>

## Tabla de contenido

- [Comenzando](#comenzando)
- [Requerimientos del sistema](#requerimientos-del-sistema)
- [Configuración](#configuración)
- [Como Ejecutar](#como-ejecutar)
- [Imagenes](#imagenes)
- [Colaboradores](#colaboradores)

## Comenzando

Este manual permitirá continuar manejando el flujo de desarrollo en el mantenimiento de este proyecto, tanto en el procesamiento de los estilos como en el manejo optimo de las imágenes.

## Requerimientos del sistema

- [Node.js](https://nodejs.org/en/)

## Configuración

Confirmar instalación de los requerimientos del sistema.

    node -v
    npm -v

Instalar los siguientes paquetes para procesar los estilos con sus respectivos prefijos.

    npm i -D sass autoprefixer postcss postcss-cli onchange

Si ya ejecuto previamente esta instalación no es necesario volver a ejecutarla, se puede revisar que paquetes se tienen instalados localmente.

    npm list --depth=0

## Como Ejecutar

Abrir una terminal e ingresar a la carpeta raiz del theme del proyecto, en este caso la carpeta llamada *base-sass*.

    cd  /base-sass

Ejecutar la siguiente tarea para iniciar el desarrollo con livereload y transpilar los estilos.
<br/>
- una vez se ejecuta queda en modo reactivo, escuchando los cambios que se generen en alguno de los archivos scss o sass.*

    npm run dev

Para detener el anterior proceso solo se debe ejecutar **Ctrl + c**

## Imagenes

_Recomiendo estas páginas para optimizar imagenes:_

[Optimizar .png](https://compresspng.com/)
[Optimizar .jpg](https://compressjpeg.com/es/)

_Para generar fuentes de iconos utilice:_

[Icon Moon](https://icomoon.io/app/#/select)

### Organización

Si utiliza imagenes, se aconseja seguir las siguientes reglas para organizarlas:

- **assets:** Contenedor para TODAS las imagenes, dentro de ella deberá organizar el contenido así:
- **misc:** Contenedor para cualquier tipo de <b>craft</b> o adorno.
- **bg:** Contenedor para las imagenes utilizadas como backgrounds.
- **icons:** Contenedor para las imagenes <b>(.png o .svg)</b> utilizadas como iconos.


## Colaboradores

- Duvan Alexis Valencia Munca <d.alexis.valencia@gmail.com>