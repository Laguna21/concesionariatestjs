class Vehiculo {
  constructor(nombre, modelo, precio) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
  }
}
class Moto extends Vehiculo {
  constructor(nombre, modelo, precio, cilindrada) {
    super(nombre, modelo, precio);
    this.cilindrada = cilindrada;
  }
}
class Auto extends Vehiculo {
  constructor(nombre, modelo, precio, puertas) {
    super(nombre, modelo, precio);
    this.puertas = puertas;
  }
}

const masCaro = (lista) => {
  let v = new Vehiculo("", "", 0);
  lista.forEach((i) => {
    if (v.precio < i.precio) {
      v = i;
    }
  });
  console.log("Vehículo más caro: ", v.nombre, " ", v.precio);
};
const masBarato = (lista) => {
  let v = lista[0];
  lista.forEach((i) => {
    if (v.precio <= i.precio && v.modelo != i.modelo) {
      v = i;
    }
  });

  console.log("Vehículo más barato: ", v.nombre, " ", v.modelo);
};
const buscarPorLetra = (letra, lista) => {
  lista.forEach((i) => {
    if (i.modelo.charAt(0).toLowerCase() == letra.toLowerCase()) {
      console.log(
        "Vehículo que contiene en el modelo la letra ‘",
        letra,
        "’,: ",
        i.nombre,
        " ",
        i.modelo,
        "  $",
        i.precio
      );
    }
  });
};
const ordenarMayorMenor = (lista) => {
  lista = lista.sort((p1, p2) => (p1.precio - p2.precio) * -1);
  console.log("Lista ordenada de mayor a menor:");
  lista.forEach((i) => {
    console.log(i.nombre, " ", i.modelo);
  });
};
const mostrarPorConsola = (lista) => {
  lista.forEach((i) => {
    console.log(JSON.stringify(i));
  });
};
let a1 = new Auto("Peugeot", "206", 200000, "4");
let a2 = new Auto("Peugeot", "208", 250000, "5");
let m1 = new Moto("Honda", "Titan", 60000, "125c");
let m2 = new Moto("Yamaha", "YBR", 80500.5, "160c");

let lista = [a2, m1, m2, a1];

//MOSTRAR POR CONSOLA
mostrarPorConsola(lista);

//MAS CARO
masCaro(lista);
//MAS BARATO
masBarato(lista);
//BUSCADOR
buscarPorLetra("y", lista);
//ORDENAR DE MAYOR A MENOR
ordenarMayorMenor(lista);
