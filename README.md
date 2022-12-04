![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.002.png)

**AL-3 Angular.![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.001.png)**

04/12/2022

**─**

Ana Darvoy David González Miguel Antón

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.002.png)

**Visión general**

En este proyecto, se nos propone diseñar una web **SPA**, utilizando el framework **Angular**.

La temática, será diseñar una web capaz de mostrar información de videojuegos, que tenemos previamente dados de alta.

Para ello, accederemos a ello a través de un menú de navegación en el que podremos ver el listado de los videojuegos.

Para estilizar más la web, nos hemos ayudado de *Bootstrap*, implementado en las dependencias de Angular.

**Objetivos**

1. Hacer una web ***SPA (Simple Page Application)***
1. Implementar un sistema de acceso a los distintos componentes que hemos creado.
1. Mostrar un listado de los videojuegos.
1. Opción detalle, para cada uno de los videojuegos.
1. Páginas *Sobre nosotros* y *Contacta con nosotros*.

**Requerimiento 1.**

**C*omponente navbar: HTML:***

Para hacer nuestro menú de navegación hemos utilizado Bootstrap, para estiizarlo, y a través de bucles for, hemos recorrido los items que tenemos declarados.

También hemos añadido un logo de nuestra marca.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.003.jpeg)

Dentro de la etiqueta li, hacemos un bucle for para recorrer todos los items que tenemos declarados en un array en el fichero Typescript correspondiente.

Dentro de cada uno, a través de ***router Link,*** hemos asignado el path para cada ítem declarado.

Usando un bucle if, queremos decir que si hay submenús dentro de alguno de nuestros ítems, que los recorra y los muestre, utilizando de nuevo otro bucle for.

Para ello, volvemos a asignar a cada subitem el link del path correspondiente.

***Typescript:***

Dentro de nuestro TS, hemos declarado un array con la lista de items que tenemos, y en el caso de “Juegos”, tiene una sub-lista con los juegos que tenemos dados de alta.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.004.jpeg)

En este Array, también declaramos el path que tiene que seguir cada ítem que tenemos.

**C*omponente inicio: HTML:***

Este componente solamente recoge los componentes Navbar, Usuario y Listado. Es el encargado de mostrar la información que contienen dichos componentes.

**C*omponente usuario: HTML:***

Este componente porta el id del usuario, que ha realizado el inicio de sesión. Muestra el atributo nombre que recoge dicho componente.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.005.png)

***Typescript:***

Este método recoge el nombre de usuario como string, y le decimos que puede pertenecer a cualquier ruta en la que se lo asignemos.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.006.png)

**C*omponente listado: HTML:***

Mostramos una tabla, ayudándonos de Bootstrap, y recorremos las diferentes filas y columnas gracias a un bucle For. Mostramos los elementos que contiene dicho objeto.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.007.jpeg)

***Typescript:***

En este archivo nos encargamos de construir el objeto de lista de juegos. Será un array en el que le pasamos los diferentes atributos. Será un atributo privado por lo que le tendremos que añadir los Getters and Setters.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.008.jpeg)

**C*omponente detalle: HTML:***

El código HTML de este componente se basa en una tabla en el que accedemos al objeto juego, y mostramos la imagen asociada a dicho juego.

En la misma tabla, la recorremos y mostramos sus atributos.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.009.png)

***Typescript:***

En este componente volvemos  a construir la lista de juegos, pero con la diferencia de que ahora añadimos tanto la imagen como la compañía de cada juego.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.010.jpeg)

Y después nos encargamos de llevarla al html recorriendo todos los atributos del array.
![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.011.jpeg)HTML:
***Componente contacto:*** 

En este componente mostramos un formulario de contacto que con la ayuda de **bootstrap**, le damos forma.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.012.jpeg)

***Componente Sobre Nosotros: HTML:***

En este componente en se da información sobre la empresa y hay un pequeño link **enrutado** a contacto. El estilo se ha dado con bootstrap.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.013.jpeg)

**Requerimiento 2.**

Una vez que hemos aplicado la lógica para desarrollar el funcionamiento de nuestra App, hemos querido estilar la página con la conocida herramienta Bootstrap.

Para utilizarla, en vez de instalar los módulos, hemos anclado el enlace de la hoja de estilos y el script que utiliza este framework.

Si vamos a ***index.htm***l principal, encontraremos dichos enlaces.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.014.png)

Una vez que tenemos los estilos predefinidos, utilizaremos las clases que nos proporciona el framework para estilizar la página.

**C*omponente login: HTML***

Como ya sabemos, creamos un nuevo componente **ng g c login.**Dentro de este componente incorporará el estilo de la página principal cuando entremos a la app, y el formulario de ingreso.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.015.jpeg)

Esta es la imagen que tiene nuestro componente ***login.html.***

Como vemos, nada más declarar el formulario, llamamos al módulo ***formGroup***, que está declarado en nuestro *login.ts*. Además, aquí mismo declaramos mediante los métodos propios de Angular, al hacer submit en nuestro formulario, nos ejecute una función, también declarada en nuestro *login.ts*.

Si nos fijamos, en el *button submit*, hemos declarado que el botón está deshabilitado por defecto, en el caso de que los dos campos de texto estén rellenos.

***Typescript\_***

Una vez declarado nuestro formulario, vamos a entender el código por el que va a funcionar nuestro login.

Lo primero que hacemos es declarar una variable **form:** asignada al objeto de **FormGroup.** Automáticamente se nos importará este módulo y podemos acceder a sus métodos.

En el constructor del módulo, hemos declarado dos variables, una es FormBuilder, que nos ayudará a gestionar los métodos de nuestro formulario, y a router, que sirve para redireccionar una vez el login ha sido satisfactorio.

Dentro del constructor, declaramos las variables Usuario y Password, y le decimos que por defecto estarán vacíos.

Aquí, podemos hacer uso de **Validators**, otro módulo que importamos en las dependencias de *@angularForms.* Gracias a esto, podremos decir que estos inputs serán obligatorios.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.016.jpeg)

Ahora gestionaremos la acción al botón ***submit.***

A través de constantes, recogemos los valores que tenemos en el input, a través de los métodos propios del módulo importado.

Hacemos una condición , en el que en caso de que el usuario y la contraseña sea incorrecta, mandaremos un mensaje de error, y borraremos el contenido del formulario.

En el caso de que el usuario y la contraseña sea correcta, a través de *router*, redireccionamos al path de ***inicio***.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.017.png)

**Pruebas**

Accedemos directamente a la página de login. Introducimos las credenciales precargadas en el componente y nos redirige al componente Inicio.

En la vista de inicio visualizamos los componentes **navbar**, **usuario** y **listado**. Podemos ![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.018.jpeg)acceder al detalle a través del botón “**Detalle**”, de cada juego. Redirige al mismo componente pero carga una información u otra dependiendo del parametro id que se pasa por url.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.019.jpeg)

Comprobamos que se muestran los datos del juego correctamente y el botón “Volver a inicio” nos devuelve a **Inicio**.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.020.jpeg)

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.021.jpeg)

El menú “home” del navbar nos redirige a **inicio** y contacto nos lleva al componente **contacto**:

![](Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.022.jpeg)

Desde el menú “Juegos” del componente navbar nos abre un desplegable que nos permite acceder al detalle de cada juego del mismo modo que el botón detalle del componente “**listado**”:

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.023.jpeg)

El menú “Sobre Nosotros” nos redirige al componente “**sobre-nosotros**”. A través del botón “contacto”, nos redirige al componente “**contacto**”.

![](/Propuesta%20de%20proyecto/Aspose.Words.041d5eed-94ee-40cc-a7a0-e6186b781886.024.jpeg)
