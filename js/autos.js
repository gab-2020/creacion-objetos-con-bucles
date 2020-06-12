var autos = ['Audi', 'Peugeot', 'Jeep', 'Ford', 'Honda', 'Bmw', 'Volvo', 'Land Rover', 'Toyota', 'Nissan'];

function marcasAutos(autos) {
    console.log (`Esta es una de las marcas de autos que vendemos en nuestro consecionario: ${autos}.`);
    document.write (`Esta es una de las marcas de autos que vendemos en nuestro consecionario: ${autos}.`);
    
   
    
}

for (var auto of autos) {
marcasAutos(auto);
}



