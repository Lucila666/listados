En este repositorio muestro mi primera experiencia con React.
Seguramente no es la solución mas elegante, y con el tiempo encuentre muchas mejoras para hacerle, pero por lo pronto funciona.
Pueden ver el resultado publicado en el siguiente link: 
https://lucila666.github.io/listados/

La página consume una API para generar un listado de personas. Al clickear en la foto de alguno de ellos te lleva a una segunda página dónde encontrarás información personal de cada uno de ellos. 

Presenta un css muy simple, a modo de ejemplo y además se estructuró con bootstrap la información contenida en la página.


En src se encuentra el index, que es lo primero que se ejecuta y muestra la informacón descripta en datos.

En Datos podemos encontrar la funcion principal en donde en primer lugar genera un array con la información de los usuarios que se desea mostrar (utilizando la función useDatos en donde se consume la API y generando usuarios aleatorios).
A continuación se genera el titulo y el encabezado de la tabla.
Finalmente el body de la tabla se genera al llamar a una funcion (generarTabla) y se muestra el contenido de la tabla.

Por ultimo las imagenes tiene la propiedad onclick que al clickear en ellas se accede a otra información del usuario. En esta nueva páagina hay un boton que permite volver a la original.
