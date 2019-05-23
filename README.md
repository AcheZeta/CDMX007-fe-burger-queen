# Burger Queen

## Frameworks 
[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo.

**Burger Queen** es el primer proyecto donde usamos framework en el bootcamp, es un primer acercamiento y representa también una nueva curva de aprendizaje, para este proyecto elegí [Vue](https://vuejs.org/), un framework progresivo para construir interfaces de usuario, diseñado desde el inicio para ser adoptado incrementalmente. La biblioteca principal se enfoca solo en la capa de la vista, y es muy simple de utilizar e integrar con otros proyectos o bibliotecas existentes. Por otro lado, Vue también es perfectamente capaz de soportar aplicaciones sofisticadas de una sola página (Single-page-application o SPA) cuando se utiliza en combinación con herramientas modernas y librerías compatibles. [Conocer más de Vue](https://es-vuejs.github.io/vuejs.org/v2/guide/). 

## Sobre el proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

Basados en la investigación y diseño de [Andrea Parrilla](https://github.com/Andrea0611/UX_BurgerQueen).

[Prototipo](https://marvelapp.com/1ee00d4g/screen/55755773)

![burger-queen]()

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      | Precio \$ |
> | ------------------------- | --------- |
> | Café americano            | 5         |
> | Café con leche            | 7         |
> | Sandwich de jamón y queso | 10        |
> | Jugo de frutas natural    | 7         |
>
> Y otro menú para el resto del día:
>
> | Ítem                 | Precio |
> | -------------------- | ------ |
> | **Hamburguesas**     | **\$** |
> | Hamburguesa simple   | 10     |
> | Hamburguesa doble    | 15     |
> | **Acompañamientos**  | **\$** |
> | Papas fritas         | 5      |
> | Aros de cebolla      | 5      |
> | **Para tomar**       | **\$** |
> | Agua 500ml           | 5      |
> | Agua 750ml           | 7      |
> | Bebida/gaseosa 500ml | 7      |
> | Bebida/gaseosa 750ml | 10     |
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por \$ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

## Conoce más:

_Conoce todas las consideraciones y objetivos del proyecto en el readme original_
[ReadMe](https://github.com/Laboratoria/CDMX007-fe-burger-queen/blob/master/README.md)

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Antes que nada, asegúrate de tener un  editor de texto en condiciones, yo usé Visual Studio.
Para ejecutar los comandos a continuación necesitarás una  UNIX Shell, que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar  GNU/Linux como tu Sistema Operativo.

### Instalación 🔧

Una vez con el proyecto realiza la instalación de las dependencias y el proyecto.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## Ejecutando las pruebas ⚙️

Los tests desarrollados para este proyecto aún están en construcción.
Serán subidos al proyecto en cuento esten listos. 

## Deployment 📦

Para alojar el proyecto utilicé Firebase con el comando

``` bash
# Firebase Deploy
firebase deploy
```

## Construido con 🛠️

* [VueJS](https://vuejs.org/)
* [Firebase](https://firebase.google.com/)
* [Cloud Firestore](https://firebase.google.com/docs/firestore)
* [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Jest](https://jestjs.io/)


## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/Laboratoria/curricula-js/blob/master/CONTRIBUTING.md) de [Laboratoria]
