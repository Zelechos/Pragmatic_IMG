/*
    The Arrow functions o Funciones Flecha
    Una expresión de función flecha es una alternativa 
    compacta a diferencia de la función tradicional, pero 
    es limitada y no se puede utilizar en todas las situaciones.

    Diferencias y limitaciones:
    No tiene sus propios enlaces a this o super.
    No se debe usar como métodos.
    No tiene argumentos o palabras clave new.target.
    No se puede utilizar como constructor.
    No se puede utilizar yield dentro de su cuerpo.
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
/*  Aqui invocamos la Funcion Welcome
    Y dentro de ella creamos nuestra funcion flecha
    que servira como un callback que enviaremos
    a nuestra funcion Welcome
    esta funcion flecha se denota con 
    ParenTesis y una flecha :
    () => |Esto es lo que la funcion retorna| 
*/
Welcome( ()=> console.log("Adios , dale LIKE a la Screnshot ") );
/*
Author: Pragmatic Coder
Respositorio:
*/