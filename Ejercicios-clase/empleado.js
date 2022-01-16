class Empleado{
    constructor(cedula ,nombre ,apellido ,cargo ,sueldo ,pagohora ,horatrabajada){
        this.cedula=cedula;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.sueldo=sueldo;
        this.pagohora=pagohora;
        this.horatrabajada=horatrabajada;
    }
    calcularSueldo(){
        this.sueldo=this.pagohora * this.horatrabajada;
        //toString: sirve para convertir a stri
        console.log("El sueldo del empleado es:" + this.sueldo.toString());
    }
    //Metodo para calcular el aporte del iess
    calcularIess(){
      var sueldo = this.pagohora * this.horatrabajada;
      var Iess = sueldo * 0.11;
      // toString: sirve para convertir a string cualquier tipo de datos primitivo (int , double.)
      console.log("El descuento de aporte es:" + Iess.toString());
    }
    //metodo para calcular el decimo tercer sueldo
    calcularDecimoTercerSueldo(){
        var sueldo = (this.pagohora * this.horatrabajada)*12;
        var decimoTercerSueldo= sueldo /12;
        console.log("El decimo tercer sueldo es:" + decimoTercerSueldo.toString());
    }
    //metodo que calcule el sueldo restando prestamos quirografario
    calcularprestamosQuirografario(){
        var cuota = 180;
        var sueldo = this.pagohora * this.horatrabajada;
        var totalRecibir = sueldo - cuota;
        console.log("El descuento restado prestamos quilografario es:" + totalRecibir.toString());
    }
}        
// instancio los objetos de tipo empleado
console.log("creo el objeto empleado:");
let Empleado1 = new Empleado("094212345","Alan","Flores","desarrollador",0,10,160);
Empleado1.calcularSueldo();
Empleado1.calcularIess();
Empleado1.calcularDecimoTercerSueldo();
Empleado1.calcularprestamosQuirografario();