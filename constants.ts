import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'comidas',
    name: 'Comidas',
    icon: '🍔',
    words: [
      { term: 'Pizza', hint: 'Masa redonda con ingredientes encima' },
      { term: 'Sushi', hint: 'Rollo de arroz y pescado' },
      { term: 'Hamburguesa', hint: 'Carne entre dos panes redondos' },
      { term: 'Tacos', hint: 'Tortilla doblada con relleno' },
      { term: 'Helado', hint: 'Postre frío y cremoso' },
      { term: 'Chocolate', hint: 'Dulce hecho de cacao' },
      { term: 'Huevo', hint: 'Producto de gallina, clara y yema' },
      { term: 'Ensalada', hint: 'Mezcla de vegetales fríos' },
      { term: 'Café', hint: 'Bebida oscura y estimulante' },
      { term: 'Manzana', hint: 'Fruta roja o verde, crujiente' }
    ]
  },
  {
    id: 'animales',
    name: 'Animales',
    icon: '🦁',
    words: [
      { term: 'León', hint: 'Rey de la selva' },
      { term: 'Elefante', hint: 'Animal terrestre muy grande con trompa' },
      { term: 'Perro', hint: 'El mejor amigo del hombre' },
      { term: 'Gato', hint: 'Felino doméstico que maúlla' },
      { term: 'Tiburón', hint: 'Depredador marino con aleta dorsal' },
      { term: 'Águila', hint: 'Ave rapaz que vuela muy alto' },
      { term: 'Serpiente', hint: 'Reptil largo sin patas' },
      { term: 'Caballo', hint: 'Animal usado para montar' },
      { term: 'Pingüino', hint: 'Ave marina que no vuela y vive en hielo' },
      { term: 'Mariposa', hint: 'Insecto con alas coloridas' }
    ]
  },
  {
    id: 'objetos',
    name: 'Objetos',
    icon: '💡',
    words: [
      { term: 'Teléfono', hint: 'Dispositivo para llamar' },
      { term: 'Silla', hint: 'Mueble para sentarse' },
      { term: 'Reloj', hint: 'Mide el tiempo' },
      { term: 'Llave', hint: 'Abre cerraduras' },
      { term: 'Libro', hint: 'Hojas de papel con historias' },
      { term: 'Gafas', hint: 'Ayudan a ver mejor' },
      { term: 'Cuchara', hint: 'Utensilio para comer sopa' },
      { term: 'Zapatos', hint: 'Se usan en los pies' },
      { term: 'Cama', hint: 'Mueble para dormir' },
      { term: 'Espejo', hint: 'Refleja tu imagen' }
    ]
  },
  {
    id: 'lugares',
    name: 'Lugares',
    icon: '🏛️',
    words: [
      { term: 'Playa', hint: 'Arena, mar y sol' },
      { term: 'Hospital', hint: 'Donde van los enfermos' },
      { term: 'Escuela', hint: 'Lugar para aprender' },
      { term: 'Aeropuerto', hint: 'Donde despegan los aviones' },
      { term: 'Cine', hint: 'Lugar para ver películas' },
      { term: 'Parque', hint: 'Zona verde pública' },
      { term: 'Gimnasio', hint: 'Lugar para hacer ejercicio' },
      { term: 'Biblioteca', hint: 'Lugar silencioso con libros' },
      { term: 'Restaurante', hint: 'Lugar donde te sirven comida' },
      { term: 'Supermercado', hint: 'Lugar para comprar víveres' }
    ]
  },
  {
    id: 'deportes',
    name: 'Deportes',
    icon: '⚽',
    words: [
      { term: 'Fútbol', hint: 'Deporte con balón y dos arcos' },
      { term: 'Baloncesto', hint: 'Deporte de encestar un balón' },
      { term: 'Tenis', hint: 'Deporte con raqueta y pelota amarilla' },
      { term: 'Natación', hint: 'Deporte en el agua' },
      { term: 'Ciclismo', hint: 'Deporte sobre ruedas' },
      { term: 'Voleibol', hint: 'Deporte de red y balón' },
      { term: 'Golf', hint: 'Deporte de meter bola en hoyo' },
      { term: 'Boxeo', hint: 'Deporte de combate con guantes' },
      { term: 'Atletismo', hint: 'Correr, saltar y lanzar' },
      { term: 'Béisbol', hint: 'Deporte con bate y pelota pequeña' }
    ]
  },
  {
    id: 'profesiones',
    name: 'Profesiones',
    icon: '👨‍⚕️',
    words: [
      { term: 'Médico', hint: 'Cura a los enfermos' },
      { term: 'Profesor', hint: 'Enseña a los alumnos' },
      { term: 'Policía', hint: 'Protege a los ciudadanos' },
      { term: 'Bombero', hint: 'Apaga incendios' },
      { term: 'Cocinero', hint: 'Prepara comida' },
      { term: 'Arquitecto', hint: 'Diseña edificios' },
      { term: 'Mecánico', hint: 'Repara coches' },
      { term: 'Periodista', hint: 'Informa noticias' },
      { term: 'Abogado', hint: 'Defiende en juicios' },
      { term: 'Astronauta', hint: 'Viaja al espacio' }
    ]
  },
  {
    id: 'instrumentos',
    name: 'Instrumentos',
    icon: '🎸',
    words: [
      { term: 'Guitarra', hint: 'Cuerdas y caja de madera' },
      { term: 'Piano', hint: 'Teclas blancas y negras' },
      { term: 'Violín', hint: 'Se toca con un arco' },
      { term: 'Batería', hint: 'Tambores y platillos' },
      { term: 'Trompeta', hint: 'Instrumento de viento metal' },
      { term: 'Flauta', hint: 'Instrumento de viento madera' },
      { term: 'Saxofón', hint: 'Usado en jazz' },
      { term: 'Arpa', hint: 'Muchas cuerdas verticales' },
      { term: 'Acordeón', hint: 'Instrumento de fuelle' },
      { term: 'Maracas', hint: 'Instrumento de percusión latino' }
    ]
  },
  {
    id: 'vehiculos',
    name: 'Vehículos',
    icon: '🚗',
    words: [
      { term: 'Coche', hint: 'Tiene cuatro ruedas y motor' },
      { term: 'Avión', hint: 'Vuela por el cielo' },
      { term: 'Barco', hint: 'Navega por el agua' },
      { term: 'Bicicleta', hint: 'Dos ruedas y pedales' },
      { term: 'Tren', hint: 'Va sobre vías' },
      { term: 'Motocicleta', hint: 'Dos ruedas y motor' },
      { term: 'Helicóptero', hint: 'Vuela con hélice superior' },
      { term: 'Submarino', hint: 'Navega bajo el agua' },
      { term: 'Camión', hint: 'Transporta carga pesada' },
      { term: 'Autobús', hint: 'Transporta muchos pasajeros' }
    ]
  }
];

export const MIN_PLAYERS = 3;
export const DEFAULT_ROUND_DURATION = 300; // 5 minutes