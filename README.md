# Mi projecto: Una app de un E-shop.

Mi app esta desarrollada en React JS, simulando un E-shop con funcionalidad de compra incluyendo un carrito de compra con generador de ordenes de compra.

Presenta los siguientes componentes principales:

-Navbar
-Catálogo (Home)
-Detalle de producto (Detail)
-CartContext 
-CartWidget
-Counter
-Footer
-UserLayout


Navbar muestra los enlaces para viajar a las rutas segun queramos ver los porductos por detalle, categoria o en la pagina principal el catalogo completo.

Catalogo es la pagina principal, muestra todos los productos traidos desde firebase.

Detalle del producto muestra cada producto con sus detalles y tambien cuenta con un Counter para elegir que cantidad de productos deseamos comprar, sin pasarnos del stock disponible.

CartContext es el contexto que tiene los producto que vamos ingresando al carrito para luego comprarlos.

CartWidget es donde vemos los productos disponibles para comprarlos, y una vez realizada la compra pidiendo al usuario los datos pertinentes genera una orden de compra que se guarda en Firebase DB.

Counter es basicamente un generador de la variable la cual vamos a usar para saber que cantidad de productos deseamos comprar.

Footer muestra datos basicos de la pagina web para contacto.

UserLayout en el componente visual principal, contiene el Navbar y el Footer, como "hijos" mostrara lo que clicleamos en los enlaces correspondientes.

Decidi usar Firebase para subir los datos de los productos en venta, cargar las ordenes de compra y tener una "Base de Datos" de donde obtener los productos para mostrarlos en la web.