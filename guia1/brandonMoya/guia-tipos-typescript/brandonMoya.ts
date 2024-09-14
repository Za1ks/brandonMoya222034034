interface tipoVehiculo{
    tipo: string,
    marca: string,
    modelo: string,
    cilindraje: number,
    numPuertas: number,
    arrancarVehiculo:() => void;
} 

interface caracteristicasEspeciales{
    velocidad: number,
    suspension: boolean,
    agregarSuspension:()=> void;
}

interface testArray{
    modelos: number[]
    caracteristicasArray: Array<String[]>
}

const miVehiculo: tipoVehiculo = {
    tipo: "Hatchback",
    marca: "Chevrolet",
    modelo: "Corsa",
    cilindraje: 2000,
    numPuertas: 3,
    arrancarVehiculo() {
        console.log(`El Vehiculo arranco con un motor de ${this.cilindraje}cc`);
    },
};

const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 180,
    suspension: false,
    agregarSuspension() {
        if(this.suspension){
            console.log("Tu Vehiculo tiene Suspensíon");
        }else{
            console.log("Tu Vehiculo no tiene Suspensíon");
        }
    }
};

const miTercerVehiculo: testArray = {
    modelos: [205,206,207,208,209],
    caracteristicasArray: [
        ["azul", "verde"],
        ["Rin 15", "Rin 17"],
        ["2 Puertas", "4 Puertas"]
    ]
}

console.log({miVehiculo})
miVehiculo.arrancarVehiculo()
miSegundoVehiculo.agregarSuspension()
console.log({miTercerVehiculo})
console.log(miTercerVehiculo.caracteristicasArray[0])
console.log(miTercerVehiculo.caracteristicasArray[0][0])
console.log(miTercerVehiculo.caracteristicasArray[2][1])
miTercerVehiculo.caracteristicasArray.forEach(caracteristica => {
    console.log(caracteristica[1])
});