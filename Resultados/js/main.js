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
    provincia: "Restaurante Tamara",
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
    provincia: " Alajuela",
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
    provincia: " Alajuela",
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
const divCards = document.querySelector(".resultados__container");

results.map((result) => {
  result.descripcion = result.descripcion.slice(0, 99);
  const template = 
            `<div class="card">
            <img class="card-image" src="${result.img}" alt="CasaAquiares">
            <p class="card-title">${result.titulo}</p> 
            <p class="card-description">${result.descripcion}</p>
            <div class="card__button__container">
            <img class="heart-icon" onclick="like(this)" src = "./img/heart-icon.svg" alt="heart-icon"/>
            <a class="card__link" href=""><button class="card__button" value="${result.id}">Ver Lugar</button></a> 
            </div>
            </div>`
            ;

  divCards.innerHTML += template;
});
