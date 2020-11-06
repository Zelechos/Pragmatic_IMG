/*
Author: Pragmatic Coder
Repositorio: https://github.com/Zelechos/Pragmatic_IMG

    The Arrow functions o Funciones Flecha
    Una expresión de función flecha es una alternativa 
    compacta a diferencia de la función tradicional, pero 
    es limitada y no se puede utilizar en todas las situaciones.
*/

//Creamos una Funcion Bienvenida con varios mensajes
function Welcome(Callback){
    console.log("Hola, Bienvenido a Mi Instagram . . .");
    console.log("Puedes seguirme en Twitter como @CoderPragmatic");
    console.log("Y en GitHub https://github.com/Zelechos");
    /*  y aqui llamamos a nuestra funcion flecha que tambien
        esta funcionando como un callback
    */
    Callback();
}

Welcome( ()=> console.log("Adios , dale LIKE a la Screnshot ") );
/*  Aqui invocamos la Funcion Welcome
    Y dentro de ella creamos nuestra funcion flecha
    que servira como un callback que enviaremos
    a nuestra funcion Welcome
    () => |Esto es lo que la funcion flecha retorna| 

    {Lo que el Programa Muestra}
    Hola, Bienvenido a Mi Instagram . . .           
    Puedes seguirme en Twitter como @CoderPragmatic 
    Y en GitHub https://github.com/Zelechos
    Adios , dale LIKE a la Screnshot
*/
