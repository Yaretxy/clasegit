class Persona{
nombre:string;
edad:number;

constructor(nombre:string,edad:number){
    this.edad=edad;
    this.nombre=nombre;

}

mostrarEnPantalla(){
    console.log(`nombre:${this.nombre}' y edad ${this.edad}`);

}
}

let persona1:Persona;
persona1=new Persona(`rigo`,34);
persona1.mostrarEnPantalla();