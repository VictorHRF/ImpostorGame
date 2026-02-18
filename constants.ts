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
  }
];

export const MIN_PLAYERS = 3;
export const DEFAULT_ROUND_DURATION = 300; // 5 minutes