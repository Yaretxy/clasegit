var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }
    Persona.prototype.mostrarEnPantalla = function () {
        console.log("nombre:".concat(this.nombre, "' y edad ").concat(this.edad));
    };
    return Persona;
}());
var persona1;
persona1 = new Persona("rigo", 34);
persona1.mostrarEnPantalla();
