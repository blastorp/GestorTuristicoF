// main.js es usado por el index.html
// todo
// .optimizar codigo, crear la funcion de agregar al array if checked
// .optimizar funcion de imprimir cada tarjeta poniendola aparte
// .acomodar enlaces
// .
// .
// .
// .
// .

function like(element) {
  console.log("asd00");
  console.log(element.classList);
  element.classList.toggle("heart-icon-selected");
}

const results = [
  {
    id: 1,
    titulo: "Casa Aquiares",
    provincia: "cartago",
    clima: "calido",
    topografia: "montaña",
    categoria: "hotel",
    descripcion:
      "Casa Aquiares Lodge es una hermosa casa con 11 habitaciones totalmente equipada con wify, piscina, jardines, salón de lectura, comedor, cocina y fácil acceso a ríos , montañas, volcanes , monumentos y grandes aventuras y si buscas adrenalina o historia llegaste al lugar perfecto.",
    pagoAceptado: "efectivo, sinpe Mobil, transferencias",
    direccion:
      "Aquiares, Turrialba, Cartago, Costa Rica 200m sur del polideportivo de Aquiares",
    horario: "6am - 11pm",
    contacto: "+(506) 60937446",
    link: "https://casaaquiareslodge.weebly.com/",
    img: "./img/id01.jpg",
  },
  {
    id: 2,
    titulo: "Restaurante Tamara",
    provincia: "Limon",
    clima: "calido",
    topografia: "playa",
    categoria: "restaurante",
    descripcion:
      "Restaurante de comidas caribeñas, Rice n Beans, pollo caribeño, rondon, camarones Támara, patty, panbon, plantintart. Opciones vegetarianas, Opciones veganas, Opciones sin gluten.",
    pagoAceptado: "Tarjetas, efectivo",
    direccion: "Av. 71, Limón, Puerto Viejo de Talamanca, 70401, Costa Rica",
    horario: "11.30am - 11pm",
    contacto: "+506 2750 0684",
    link: "https://www.tamarahotel.com/restaurante-tamara",
    img: "./img/id02.jpg",
  },
  {
    id: 3,
    titulo: "Teatro Nacional",
    provincia: "San Jose",
    clima: "fresco",
    topografia: "ciudad",
    categoria: "Punto Destacado",
    descripcion:
      "El Teatro Nacional es un edificio de arquitectura historicista terminado en el año de 1897. Se le considera uno de los inmuebles más importantes de la historia nacional, y principal joya arquitectónica de la ciudad de San José. Su construcción guarda un profundo significado dado que representa la decisión del costarricense a la hora de emprender acción y de la estabilidad económica",
    pagoAceptado: "Tarjeta Credit o debito",
    direccion:
      "Plaza Juan Mora Fernández, Avenida 2 Libertador Juan Rafael Mora, Calles 3 y 5",
    horario: "Lunes a domingo de 9:00 a 17:00 hrs",
    contacto: "+506 2010 1100",
    link: "https://www.teatronacional.go.cr/",
    img: "./img/id03.webp",
  },
  {
    id: 4,
    titulo: "Parque Bosques de Fraijanes",
    provincia: "alajuela",
    clima: "fresco",
    topografia: "Montaña",
    categoria: "Aire Libre",
    descripcion:
      "El Parque Laguna Fraijanes es un refugio natural muy acogedor, ubicado en la provincia de Alajuela a 1650 metros sobre el nivel del mar, en ruta hacia el Volcán Poás; por lo que sus visitantes pueden disfrutar de algunos momentos de sol, pero la mayor parte del tiempo, encontrarán un refugio natural con  especies de aves y una amplia variedad de flora, todo en medio de neblina, frío y por lo general, un clima húmedo. Este hermoso parque se comenzó a construir en el año 1982 y cuenta con una extensión de 24 manzanas, donde su principal atractivo es un lago en el que, si los niveles del agua lo permiten, se puede pescar;  además de sus agradables senderos, zonas verdes y cabañas con vistas al lago, dos de ellas rústicas tipo chalet.",
    pagoAceptado: "efectivo, Tarjeta Credito o Debito",
    direccion: "San Isidro de Alajuela",
    horario: "De martes a domingo, de 8:00 am a 3:00 pm",
    contacto: "+506 24822166",
    link: "https://www.icoder.go.cr/servicios/parques-recreativos/127-parque-fraijanes",
    img: "./img/id04.jpg",
  },
  {
    id: 5,
    titulo: "Hotel Riu Guanacaste",
    provincia: "Guanacaste",
    clima: "calido",
    topografia: "hotel",
    categoria: "Aire Libre",
    descripcion:
      "El Hotel Riu Guanacaste es un hotel todo incluido que ofrece una amplia variedad de actividades y comodidades. El hotel cuenta con una playa privada, varias piscinas, restaurantes y bares, un spa, un casino, una discoteca y actividades como deportes acuáticos, clases de baile y un club para niños.",
    pagoAceptado: "efectivo, Tarjeta Credito o Debito",
    direccion:
      "Playa Matapalo, RIU Guanacaste Route, Guanacaste Province, Sardinal District, 50503",
    horario: "De lunes a domingo, de 8:00 am a 9:00 pm",
    contacto: "+(506) 26812300",
    link: "https://www.riu.com/es/hotel/costa-rica/guanacaste/hotel-riu-guanacaste/",
    img: "./img/id05.jpg",
  },

  {
    id: 6,
    titulo: "Playa Penca",
    provincia: "Guanacaste",
    clima: "calido",
    topografia: "playa",
    categoria: "Aire Libre",
    descripcion:
      "Playa Penca es una hermosa playa de arena blanca ubicada en la provincia de Guanacaste, en la costa pacífica de Costa Rica. Es una playa pequeña y tranquila, ideal para relajarse y disfrutar de la belleza natural de la zona.",
    pagoAceptado: "efectivo, Tarjeta Credito o Debito",
    direccion: "Carrillo, Guanacaste",
    horario: "De lunes a domingo, de 8:00 am a 9:00 pm",
    contacto: "No aplica",
    link: "https://goplaya.cr/es/playa/penca-guanacaste-costa-rica",
    img: "./img/id06.jpg",
  },

  {
    id: 7,
    titulo: "Parque Nacional Manuel Antonio",
    provincia: "Puntarenas",
    clima: "fresco",
    topografia: "Montaña",
    categoria: "Aire Libre",
    descripcion:
      "Ubicado en la costa del Pacífico, en la provincia de Puntarenas, este parque cuenta con playas de ensueño, vida silvestre y senderos para caminatas.",
    pagoAceptado: "efectivo, Tarjeta Credito o Debito",
    direccion: " Provincia de Puntarenas, Quepos",
    horario: "De lunes a domingo, de 7:00 am a 4:00 pm",
    contacto: " +1 800 280 2597",
    link: "https://manuelantoniopark.com/",
    img: "./img/id07.jpg",
  },

  {
    id: 8,
    titulo: "Volcán Arenal",
    provincia: "alajuela",
    clima: "Calido",
    topografia: "Montaña",
    categoria: "Aire Libre",
    descripcion:
      "ubicado en la provincia de Alajuela, el Volcán Arenal es uno de los volcanes más activos de Costa Rica y ofrece vistas impresionantes. Además, en la zona se pueden encontrar aguas termales y cascadas.",
    pagoAceptado: "efectivo, Tarjeta Credito o Debito",
    direccion: "Fortuna, Provincia de Alajuela, El Castillo",
    horario: "De lunes a domingo, de 7:00 am a 4:00 pm",
    contacto: "+506 2200 4192",
    link: "https://www.arenal.net/",
    img: "./img/id08.jpg",
  },

  {
    id: 9,
    titulo: "Monteverde Cloud Forest Reserve",
    provincia: "alajuela",
    clima: "Fresco",
    topografia: "Montaña",
    categoria: "Aire Libre",
    descripcion:
      "La Reserva Biológica Bosque Nuboso Monteverde es una reserva privada ubicada en Costa Rica, a lo largo de la Sierra de Tilarán, entre las provincias de Puntarenas y Alajuela. Su nombre se debe a la cercana ciudad de Monteverde y fue fundada en 1972.",
    pagoAceptado: "efectivo, Tarjeta Debito",
    direccion: "Provincia de Puntarenas, Monteverde",
    horario: "De lunes a domingo, de 7:00 am a 4:00 pm",
    contacto: "+506 2645 5122",
    link: "https://www.tourmonteverde.com/",
    img: "./img/id09.jpg",
  },

  {
    id: 10,
    titulo: "Isla Tortuga",
    provincia: "Puntarenas",
    clima: "Fresco",
    topografia: "playa",
    categoria: "Aire Libre",
    descripcion:
      "Isla Tortuga​ es el nombre que recibe una isla del país centroamericano de Costa Rica, que se encuentra en el Golfo de Nicoya en la costa del Océano Pacífico frente al Refugio de fauna salvaje Curu​ muy cerca de la península de Nicoya. Se trata en realidad de 2 islas pequeñas muy cercanas llamadas Alcatraz y Tolinga.",
    pagoAceptado: "efectivo, Tarjeta Debito",
    direccion: "Golfo de Nicoya",
    horario: "De lunes a sabado, de 7:30 a.m. a 4:00 p.m",
    contacto: "5068708 3012",
    link: "https://www.vamosaturistear.com/",
    img: "./img/id10.jpg",
  },
];
//  <img class="heart-icon" onclick="like(this)" src = "${heart}]" alt="heart-icon"/>
//  <img class="card-image" src="${img}]" alt="Resultado1">
const initApp = () => {
  const divCards = document.querySelector(".resultados__container");

  let filterProv = [];
  let filterTipo = [];
  let filterClima = [];
  let filterTopografia = [];

  const imprimirTarjeta = (result) => {
    return `<div class="card">
    <img class="card-image" src="${result.img}" alt="CasaAquiares">
    <p class="card-title">${result.titulo}</p> 
    <p class="card-description">${result.descripcion}</p>
    <div class="card__button__container">
    <img class="heart-icon" onclick="like(this)" src = "./img/heart-icon.svg" alt="heart-icon"/>
    <a class="card__link" href="./resultadoDinamico.html"><button class="card__button" value="${result.id}">Ver Lugar</button></a> 
    </div>
    </div>`;
  };

  const textoPlano = (string) => {
    let stringProcesado = string.toLowerCase();
    return stringProcesado.replace(/\s+/g, "");
  };
  const arrayPlano = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
      arreglo[i] = textoPlano(arreglo[i].toLowerCase());
    }
  };

  const llenadoAutProv = (arreglo) => {
    const arregloLoco = [];
    if (arreglo.length === 0) {
      results.forEach((result) => {
        if (!arregloLoco.includes(result.provincia)) {
          arregloLoco.push(result.provincia);
        }
      });
      console.log(arregloLoco);
      return arregloLoco;
    } else {
      return arreglo;
    }
  };
  const llenadoAutTipo = (arreglo) => {
    const arregloLoco = [];
    if (arreglo.length === 0) {
      results.forEach((result) => {
        if (!arregloLoco.includes(result.categoria)) {
          arregloLoco.push(result.categoria);
        }
      });
      console.log(arregloLoco);
      return arregloLoco;
    } else {
      return arreglo;
    }
  };
  const llenadoAutClima = (arreglo) => {
    const arregloLoco = [];
    if (arreglo.length === 0) {
      results.forEach((result) => {
        if (!arregloLoco.includes(result.clima)) {
          arregloLoco.push(result.clima);
        }
      });
      console.log(arregloLoco);
      return arregloLoco;
    } else {
      return arreglo;
    }
  };
  const llenadoAutTopografia = (arreglo) => {
    const arregloLoco = [];
    if (arreglo.length === 0) {
      results.forEach((result) => {
        if (!arregloLoco.includes(result.topografia)) {
          arregloLoco.push(result.topografia);
        }
      });
      console.log(arregloLoco);
      return arregloLoco;
    } else {
      return arreglo;
    }
  };

  const filtrarArrays = (results) => {
    divCards.innerHTML = "";
    results.map((result) => {
      result.descripcion = result.descripcion.slice(0, 99) + "...";
      //normalizando el texto para los if y llenado en caso de estar vacios
      const atributoProvincia = textoPlano(result.provincia);
      const atributoTipo = textoPlano(result.categoria);
      const atributoClima = textoPlano(result.clima);
      const atributoTopografia = textoPlano(result.topografia);

      console.log(atributoProvincia);
      //   console.log(atributoTipo);
      //   console.log(atributoClima);
      //   console.log(atributoTopografia);

      let auxfilterProv = filterProv;
      let auxfilterTipo = filterTipo;
      let auxfilterClima = filterClima;
      let auxfilterTopografia = filterTopografia;

      auxfilterProv = llenadoAutProv(auxfilterProv);
      auxfilterTipo = llenadoAutTipo(auxfilterTipo);
      auxfilterClima = llenadoAutClima(auxfilterClima);
      auxfilterTopografia = llenadoAutTopografia(auxfilterTopografia);

      arrayPlano(auxfilterProv);
      arrayPlano(auxfilterTipo);
      arrayPlano(auxfilterClima);
      arrayPlano(auxfilterTopografia);
      console.log(auxfilterProv);

      //borrar
      //   console.log(auxfilterProv);
      //   console.log(auxfilterTipo);
      //   console.log(auxfilterClima);
      //   console.log(auxfilterTopografia);

      if (auxfilterProv.includes(atributoProvincia)) {
        console.log("nivel1");
        if (auxfilterTipo.includes(atributoTipo)) {
          console.log("nivel2");
          if (auxfilterClima.includes(atributoClima)) {
            console.log("nivel3");
            if (auxfilterTopografia.includes(atributoTopografia)) {
              console.log("nivel4");
              const template = imprimirTarjeta(result);
              divCards.innerHTML += template;
            }
          }
        }
      }

      //   const template = imprimirTarjeta(result);
      //   divCards.innerHTML += template;
      //   auxfilterProv = filterProv;
      //   auxfilterTipo = filterTipo;
      //   auxfilterClima = filterClima;
      //   auxfilterTopografia = filterTopografia;
    });
  };

  //imprime al iniciar la pagina
  results.map((result) => {
    result.descripcion = result.descripcion.slice(0, 99) + "...";
    const template = imprimirTarjeta(result);
    divCards.innerHTML += template;
  });

  const verButtons = document.querySelectorAll(".card__button");
  verButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const valueButton = event.target.value;
      sessionStorage.setItem("id", valueButton);
      console.log(sessionStorage.getItem("id"));
      window.open("./resultadoDinamico.html");
    });
  });

  const checkProvBotones = document.querySelectorAll(".checkProvincia");
  checkProvBotones.forEach((check) => {
    check.addEventListener("change", (event) => {
      if (event.target.checked) {
        filterProv.push(event.target.value);
        console.log(filterProv);
      } else {
        let pos = filterProv.indexOf(event.target.value);
        filterProv.splice(pos, 1);
        console.log(filterProv);
      }
      filtrarArrays(results);
    });
  });
  const checkTipoBotones = document.querySelectorAll(".checkTipo");
  checkTipoBotones.forEach((check) => {
    check.addEventListener("change", (event) => {
      if (event.target.checked) {
        filterTipo.push(event.target.value);
        console.log(filterTipo);
      } else {
        let pos = filterTipo.indexOf(event.target.value);
        filterTipo.splice(pos, 1);
        console.log(filterTipo);
      }
      filtrarArrays(results);
    });
  });
  const checkClimaBotones = document.querySelectorAll(".checkClima");
  checkClimaBotones.forEach((check) => {
    check.addEventListener("change", (event) => {
      if (event.target.checked) {
        filterClima.push(event.target.value);
        console.log(filterClima);
      } else {
        let pos = filterClima.indexOf(event.target.value);
        filterClima.splice(pos, 1);
        console.log(filterClima);
      }
      filtrarArrays(results);
    });
  });
  const checkTipografiaBotones = document.querySelectorAll(".checkTopografia");
  checkTipografiaBotones.forEach((check) => {
    check.addEventListener("change", (event) => {
      if (event.target.checked) {
        filterTopografia.push(event.target.value);
        console.log(filterTopografia);
      } else {
        let pos = filterTopografia.indexOf(event.target.value);
        filterTopografia.splice(pos, 1);
        console.log(filterTopografia);
      }
      filtrarArrays(results);
    });
  });
};
document.addEventListener("DOMContentLoaded", initApp);

const prueba = ["DSDKFJ", "ASLDKJF", "Aasdfhm", "jkhdflASDF"];
const arrayPlano = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = arreglo[i].toLowerCase();
  }
};

arrayPlano(prueba);
const llenadoAutProv = (arreglo) => {
  if (!arreglo.length) {
    console.log("esta vacio");
  } else {
    console.log("no esta vacio");
  }
};
llenadoAutProv(prueba);
console.log(prueba);
