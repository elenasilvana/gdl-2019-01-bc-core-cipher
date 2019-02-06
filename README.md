### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

# Introducción


La tecnología en la vida cotidiana cada vez permea más en los habitos y costumbres de las personas un ejemplo de estos aparatos tecnológicos contidianos son los dispositivos móviles, son contenedores personalizados de toda clase de herramientas que llevamos con nosotros a todas partes.

Este cipher está enfocado a aquellos usuarios que haciendo uso de la tecnología deciden llevar la esfera personal del diario intimo a un formato digital para poder llevarlo consigo a todas partes, pero de la misma manera desean implementar tecnología como un método de cifrado para mantener resguardados sus apuntes personales del día a día. Aunque puede ser utilizado por cualquier usuario que necesite cifrar un texto. 

El problema de un diario físico es que además de ocupar fisicamente un espacio es decir que quizá al usuario no le resulta comodo llevarlo a todas partes y que a reserva que esté escrito en otro idioma las notas que tengamos en el pueden ser descubiertas, un diario es un espacio privado y libre, y cada persona utiliza esa libertad de palabra de distintas maneras, a veces para organizar ideas, a veces para escribir deseos, etc. Para quienes han optado por hacer uso de la inmaterialidad de lo digital, de asignar un espacio a lo privado, uno de los problemas que se presentan es que los dispositivos móviles son también algo en lo que también compartes información, a veces compartes el dispositivo completo, así surge la necesidad para aquellos cuyo problema en otro tiempo representaba que el diario fuera encontrado y leído, en la época digital ese problema es que de manera accidental o intencionada se encuentren esa información privada, de ahí la utilidad del cifrado. 


## Descripción

El método de cifrado que utiliza para codificar los textos introducidos es conocido como Cifrado César ya que el emperador romano Julio César lo utilizaba para guiar a su ejército en el campo de batalla. Puedes leer más al respecto [aquí](https://en.wikipedia.org/wiki/Caesar_cipher).

La webapp tiene un cuadro de texto para que el usuario ingrese el texto que desea codificar, deberá indicar también el número para que con una formula matemática se realice el desplazamiento correspondiente que cifrará su texto haciendo la sustitución correspondiente de caracteres. Una vez que ingrese el texto y el número (el cual deberá conservar para poder descifrar cuando lo desee) y presione el botón que dice 'Cifrar' la información ingresada será eliminada para proporcionarle mayor privacidad al usuario que se encuentre en algún espacio publico dónde su información pudiera ser expuesta. En el cuadro de texto inferior aparecerá el texto cifrado que el usuario ha ingresado.



### El código

Para aquellos que deseen conocer con más detalle como se realiza este desplazamiento que procesará su información, esto se logra con la siguiente fórmula (x - 65 + n) % 26 + 65 que funciona implementando código [ASCII](https://tecnologia-informatica.com/que-es-codigo-ascii/) que es un código numérico que representa los caracteres, utilizando una escala decimal del 0 a 127 y que son transformados por la computadora a números binarios que es la manera en que los entiende. Para cuestiones practicas en este cipher sólo son necesarios los caracteres del ASCII que representan nuestro alfabeto. En la fórmula mencionada al principio de este texto x representa el código ASCII del caracter que hemos ingresado, 65 la posición donde inicia el alfabeto, es decir A, n representa el número que el usuario ha indicado para realizar el desplazamiento, a esto se le aplica una fórmula para que pueda seguir funcionando en caso de que el usuario ingrese un número mayor que el mismo alfabeto. 
 




