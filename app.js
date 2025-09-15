/* 
Funciones a elaborar:

* printByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* printByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/




const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "        ⠙⠻⠁"
]



const printByChart = (ms) => {                          
    let delay = 0;                                        //Se podria implementar un ciclo con for
    asciiHeart.forEach((line) => {                        // for (let i = 0; i < asciiHeart.length; i++) {
        line.split('').forEach((char) => {                //     const chars = asciiHeart[i].split("");   "hacemos split para iterar en cada caracter"                        
            setTimeout(() => {                            //     chars.forEach((char, index) => {      "hacemos el recorrido"
                process.stdout.write(char);               //         setTimeout(() => {
            }, delay);                                    //             process.stdout.write(char);
            delay += ms;                                  //             if (asciiHeart[i].length - 1 === index) { "hacemos salto de linea en cada elemento de la variable ya que esta es la que contiene la informacion del salto de linea"
        });                                               //                 console.log("")}
        setTimeout(() => {                                //     }, delay);
            process.stdout.write('\n');                   //     delay += ms;
        }, delay);                                        // });
        delay += ms;                                      // el codigo funciona pero creo que puede ser un poco confuso cuando estan 
    });                                                   //los 2 setTimeout y console.log nos ayuda con el salto de linea que necesitamos      
};
//printByChart(100)
 


const printByLine = (ms) => {                              //genial, codigo simple y eficiente
        asciiHeart.forEach((line, index) => {              //Codigo cumple con los estandares de cammelCase
        setTimeout(() => {                                 //Quizas en los parametros cambiar ms por algo mas explicito 
            console.log(line)                              //como ms por timeInMs o time para que haga referencia mas clara a que son milisecs
        }, ms * index)                                     //y como ultimo sugerencia de dejar comentarios de referencia para que cualquier programador entienda todo desde un inicio
    })                                                     //cualquier programador entienda todo desde un inicio 
}
//printByLine(300)