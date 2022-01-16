//Defino l clase
// clase: modelo o plantilla donde se definen atributos y metodos
class Perona{
    // constructor: es quien contruye el objeto a partir de una clase
    constructor (Cedula,Nombre,Apellido,Edad){
        //atrubutos: son caracteristica de un objeto
        This.Cedula=Cedula;
        this.Nombre=Nombre;
        this.Apellido=Apellido;
        this.Edad=Edad;
    }
    //Metodo: son comportamientos o funcionabilidades
    //que tiene un objeto
    informacion(){
        console.log("la informacion de la persona es:" + this.Cedula + " " + this.Nombre + " " + this.Apellido + " " + this.Edad);
    }
    //metodo verificador de mayoria la edad ecuatoriana
    validaEdad(){
        if (this.Edad >= 18) {
          CSSCounterStyleRule.log("es mayor de edad,");
        }else {
          console.log("es menor de edad,");
         }   
        
    }
 }
 //presento por consola la referencia del archivo
 console.log("-------------------------inicio-----------------")
 // instancie el objeto de tipo persona
 //Objeto: es todo lo que nos rodea en el mundo real, esta compuesto
 //de atributos y metodos, los objetos corresponden o nacen a partir de una clase
 console.log("creo el objeto empleado:");
 let Persona1= new Perona("0951130640","Eddy","Garcia",21);
 //invoco los metodos objeto persona
 Persona1.informacion();
 Persona1.validaEdad();
 