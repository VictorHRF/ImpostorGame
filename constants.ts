import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'comidas',
    name: 'Comidas',
    icon: '🍔',
    words: [
      { term: 'Pizza', hints: ['Masa', 'Queso', 'Italia'] },
      { term: 'Sushi', hints: ['Japón', 'Arroz', 'Pescado'] },
      { term: 'Hamburguesa', hints: ['Pan', 'Carne', 'Americana'] },
      { term: 'Tacos', hints: ['México', 'Tortilla', 'Picante'] },
      { term: 'Helado', hints: ['Frío', 'Postre', 'Cono'] },
      { term: 'Chocolate', hints: ['Cacao', 'Dulce', 'Oscuro'] },
      { term: 'Huevo', hints: ['Gallina', 'Clara', 'Yema'] },
      { term: 'Ensalada', hints: ['Lechuga', 'Verde', 'Saludable'] },
      { term: 'Café', hints: ['Cafeína', 'Negro', 'Taza'] },
      { term: 'Manzana', hints: ['Roja', 'Fruta', 'Blanieves'] }
    ]
  },
  {
    id: 'animales',
    name: 'Animales',
    icon: '🦁',
    words: [
      { term: 'León', hints: ['Selva', 'Rey', 'Melena'] },
      { term: 'Elefante', hints: ['Trompa', 'Gigante', 'África'] },
      { term: 'Perro', hints: ['Amigo', 'Ladrar', 'Mascota'] },
      { term: 'Gato', hints: ['Maullar', 'Felino', 'Bigotes'] },
      { term: 'Tiburón', hints: ['Mar', 'Aleta', 'Dientes'] },
      { term: 'Águila', hints: ['Volar', 'Ave', 'Pico'] },
      { term: 'Serpiente', hints: ['Reptil', 'Veneno', 'Larga'] },
      { term: 'Caballo', hints: ['Montar', 'Galope', 'Establo'] },
      { term: 'Pingüino', hints: ['Hielo', 'Ave', 'Frac'] },
      { term: 'Mariposa', hints: ['Alas', 'Insecto', 'Colores'] }
    ]
  },
  {
    id: 'objetos',
    name: 'Objetos',
    icon: '💡',
    words: [
      { term: 'Teléfono', hints: ['Llamar', 'Celular', 'Pantalla'] },
      { term: 'Silla', hints: ['Sentarse', 'Patas', 'Respaldo'] },
      { term: 'Reloj', hints: ['Tiempo', 'Hora', 'Muñeca'] },
      { term: 'Llave', hints: ['Abrir', 'Puerta', 'Metal'] },
      { term: 'Libro', hints: ['Leer', 'Páginas', 'Papel'] },
      { term: 'Gafas', hints: ['Ver', 'Lentes', 'Ojos'] },
      { term: 'Cuchara', hints: ['Sopa', 'Metal', 'Comer'] },
      { term: 'Zapatos', hints: ['Pies', 'Caminar', 'Suela'] },
      { term: 'Cama', hints: ['Dormir', 'Colchón', 'Noche'] },
      { term: 'Espejo', hints: ['Reflejo', 'Vidrio', 'Imagen'] }
    ]
  },
  {
    id: 'lugares',
    name: 'Lugares',
    icon: '🏛️',
    words: [
      { term: 'Playa', hints: ['Arena', 'Mar', 'Sol'] },
      { term: 'Hospital', hints: ['Médicos', 'Enfermos', 'Salud'] },
      { term: 'Escuela', hints: ['Estudiar', 'Alumnos', 'Clases'] },
      { term: 'Aeropuerto', hints: ['Aviones', 'Viajar', 'Volar'] },
      { term: 'Cine', hints: ['Película', 'Pantalla', 'Palomitas'] },
      { term: 'Parque', hints: ['Jugar', 'Árboles', 'Paseo'] },
      { term: 'Gimnasio', hints: ['Ejercicio', 'Pesas', 'Deporte'] },
      { term: 'Biblioteca', hints: ['Libros', 'Silencio', 'Leer'] },
      { term: 'Restaurante', hints: ['Comer', 'Menú', 'Mesero'] },
      { term: 'Supermercado', hints: ['Compras', 'Comida', 'Carrito'] }
    ]
  }
];

export const MIN_PLAYERS = 3;
export const DEFAULT_ROUND_DURATION = 300; // 5 minutes