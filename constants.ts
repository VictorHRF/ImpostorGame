import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'comidas',
    name: 'Comidas',
    icon: '🍔',
    words: [
      { term: 'Pizza', hints: ['Fracciones', 'Caja', 'Nápoles'] },
      { term: 'Sushi', hints: ['Bocados', 'Vinagre', 'Esterilla'] },
      { term: 'Hamburguesa', hints: ['Capas', 'Sésamo', 'Combo'] },
      { term: 'Tacos', hints: ['Doblado', 'Callejero', 'Cilantro'] },
      { term: 'Helado', hints: ['Lamer', 'Verano', 'Derretir'] },
      { term: 'Chocolate', hints: ['Porcentaje', 'Tableta', 'Regalo'] },
      { term: 'Huevo', hints: ['Fragilidad', 'Nido', 'Desayuno'] },
      { term: 'Ensalada', hints: ['Mezcla', 'Aliño', 'Bol'] },
      { term: 'Café', hints: ['Grano', 'Despertar', 'Aroma'] },
      { term: 'Manzana', hints: ['Tentación', 'Gravedad', 'Pecado'] }
    ]
  },
  {
    id: 'animales',
    name: 'Animales',
    icon: '🦁',
    words: [
      { term: 'León', hints: ['Rugido', 'Orgullo', 'Sabana'] },
      { term: 'Elefante', hints: ['Memoria', 'Marfil', 'Pisada'] },
      { term: 'Perro', hints: ['Lealtad', 'Correa', 'Olfato'] },
      { term: 'Gato', hints: ['Siete', 'Agilidad', 'Ronroneo'] },
      { term: 'Tiburón', hints: ['Depredador', 'Mandíbula', 'Branquias'] },
      { term: 'Águila', hints: ['Altura', 'Rapaz', 'Visión'] },
      { term: 'Serpiente', hints: ['Escamas', 'Arrastrarse', 'Muda'] },
      { term: 'Caballo', hints: ['Herradura', 'Noble', 'Crin'] },
      { term: 'Pingüino', hints: ['Antártida', 'Nadador', 'Monogamia'] },
      { term: 'Mariposa', hints: ['Metamorfosis', 'Capullo', 'Efímero'] }
    ]
  },
  {
    id: 'objetos',
    name: 'Objetos',
    icon: '💡',
    words: [
      { term: 'Teléfono', hints: ['Conexión', 'Bolsillo', 'Carga'] },
      { term: 'Silla', hints: ['Descanso', 'Cuatro', 'Mueble'] },
      { term: 'Reloj', hints: ['Tic-tac', 'Agujas', 'Ritmo'] },
      { term: 'Llave', hints: ['Cerradura', 'Acceso', 'Tintineo'] },
      { term: 'Libro', hints: ['Historia', 'Tapa', 'Autor'] },
      { term: 'Gafas', hints: ['Montura', 'Cristal', 'Enfoque'] },
      { term: 'Cuchara', hints: ['Líquido', 'Cóncavo', 'Cubierto'] },
      { term: 'Zapatos', hints: ['Pasos', 'Par', 'Cordones'] },
      { term: 'Cama', hints: ['Sueños', 'Sábanas', 'Horizontal'] },
      { term: 'Espejo', hints: ['Vanidad', 'Simetría', 'Inverso'] }
    ]
  },
  {
    id: 'lugares',
    name: 'Lugares',
    icon: '🏛️',
    words: [
      { term: 'Playa', hints: ['Costa', 'Ola', 'Vacaciones'] },
      { term: 'Hospital', hints: ['Blanco', 'Emergencia', 'Pasillo'] },
      { term: 'Escuela', hints: ['Aprendizaje', 'Pizarra', 'Recreo'] },
      { term: 'Aeropuerto', hints: ['Control', 'Puerta', 'Escala'] },
      { term: 'Cine', hints: ['Butaca', 'Oscuridad', 'Estreno'] },
      { term: 'Parque', hints: ['Bancos', 'Aire', 'Césped'] },
      { term: 'Gimnasio', hints: ['Sudor', 'Esfuerzo', 'Rutina'] },
      { term: 'Biblioteca', hints: ['Estantería', 'Préstamo', 'Consulta'] },
      { term: 'Restaurante', hints: ['Cuenta', 'Reserva', 'Cubiertos'] },
      { term: 'Supermercado', hints: ['Pasillo', 'Oferta', 'Caja'] }
    ]
  },
  {
    id: 'series_populares',
    name: 'Series Populares',
    icon: '📺',
    words: [
      { term: 'Breaking Bad', hints: ['Desierto', 'Química', 'Sombrero'] },
      { term: 'Stranger Things', hints: ['Dimensiones', 'Luces', 'Bicicletas'] },
      { term: 'Friends', hints: ['Seis', 'Cafetería', 'Apartamento'] },
      { term: 'Game of Thrones', hints: ['Muro', 'Lignaje', 'Trono'] },
      { term: 'The Office', hints: ['Papel', 'Broma', 'Mirada'] },
      { term: 'Black Mirror', hints: ['Reflejo', 'Futuro', 'Pantalla'] },
      { term: 'La Casa de Papel', hints: ['Máscara', 'Atraco', 'Ciudad'] },
      { term: 'Dark', hints: ['Tiempo', 'Lluvia', 'Ciclos'] },
      { term: 'Lost', hints: ['Isla', 'Humo', 'Números'] },
      { term: 'The Crown', hints: ['Realeza', 'Palacio', 'Linaje'] }
    ]
  },
  {
    id: 'caricaturas_2000',
    name: 'Caricaturas 2000s',
    icon: '🖍️',
    words: [
      { term: 'Bob Esponja', hints: ['Absorbente', 'Risa', 'Piña'] },
      { term: 'Los Padrinos Mágicos', hints: ['Deseo', 'Corona', 'Varita'] },
      { term: 'Ben 10', hints: ['Reloj', 'Genética', 'Transformación'] },
      { term: 'Avatar (Aang)', hints: ['Elementos', 'Flecha', 'Meditación'] },
      { term: 'Danny Phantom', hints: ['Portal', 'Invisibilidad', 'Miedo'] },
      { term: 'Kim Possible', hints: ['Misión', 'Buscaminas', 'Espionaje'] },
      { term: 'Phineas y Ferb', hints: ['Invento', 'Plano', 'Verano'] },
      { term: 'Las Chicas Superpoderosas', hints: ['Ingredientes', 'Química', 'Laboratorio'] },
      { term: 'Johnny Bravo', hints: ['Músculos', 'Peine', 'Gafas'] },
      { term: 'Ed, Edd y Eddy', hints: ['Caramelos', 'Barrio', 'Estafa'] }
    ]
  },
  {
    id: 'ciencia',
    name: 'Ciencia',
    icon: '🧪',
    words: [
      { term: 'Átomo', hints: ['Núcleo', 'Vacío', 'Fundamento'] },
      { term: 'ADN', hints: ['Hélice', 'Herencia', 'Código'] },
      { term: 'Gravedad', hints: ['Atracción', 'Masa', 'Caída'] },
      { term: 'Evolución', hints: ['Adaptación', 'Selección', 'Cambio'] },
      { term: 'Galaxia', hints: ['Espiral', 'Inmensidad', 'Estrellas'] },
      { term: 'Fotosíntesis', hints: ['Oxígeno', 'Clorofila', 'Luz'] },
      { term: 'Energía', hints: ['Capacidad', 'Fuerza', 'Movimiento'] },
      { term: 'Microscopio', hints: ['Lente', 'Invisible', 'Aumento'] },
      { term: 'Reacción', hints: ['Mezcla', 'Efecto', 'Proceso'] },
      { term: 'Materia', hints: ['Estado', 'Volumen', 'Todo'] }
    ]
  },
  {
    id: 'escuela',
    name: 'Escuela',
    icon: '📓',
    words: [
      { term: 'Examen', hints: ['Nervios', 'Hoja', 'Calificación'] },
      { term: 'Recreo', hints: ['Libertad', 'Patio', 'Timbre'] },
      { term: 'Mochila', hints: ['Carga', 'Hombros', 'Útiles'] },
      { term: 'Pizarra', hints: ['Tiza', 'Borrador', 'Frente'] },
      { term: 'Lápiz', hints: ['Grafito', 'Madera', 'Punta'] },
      { term: 'Cuaderno', hints: ['Espiral', 'Líneas', 'Apuntes'] },
      { term: 'Regla', hints: ['Medida', 'Línea', 'Recta'] },
      { term: 'Diccionario', hints: ['Definición', 'Orden', 'Letras'] },
      { term: 'Uniforme', hints: ['Identidad', 'Ropa', 'Igualdad'] },
      { term: 'Maestro', hints: ['Guía', 'Voz', 'Lección'] }
    ]
  },
  {
    id: 'transportes',
    name: 'Transportes',
    icon: '🚀',
    words: [
      { term: 'Avión', hints: ['Altitud', 'Turbina', 'Escala'] },
      { term: 'Tren', hints: ['Raíles', 'Vagón', 'Estación'] },
      { term: 'Bicicleta', hints: ['Equilibrio', 'Pedal', 'Cadena'] },
      { term: 'Barco', hints: ['Ancla', 'Vela', 'Cubierta'] },
      { term: 'Cohete', hints: ['Despegue', 'Combustible', 'Órbita'] },
      { term: 'Submarino', hints: ['Profundidad', 'Periscopio', 'Presión'] },
      { term: 'Metro', hints: ['Túnel', 'Mapa', 'Subsuelo'] },
      { term: 'Globo', hints: ['Aire', 'Cesta', 'Altura'] },
      { term: 'Moto', hints: ['Casco', 'Velocidad', 'Manillar'] },
      { term: 'Helicóptero', hints: ['Hélice', 'Rescate', 'Vuelo'] }
    ]
  },
  {
    id: 'videojuegos',
    name: 'Videojuegos',
    icon: '🎮',
    words: [
      { term: 'Mario', hints: ['Champiñón', 'Fontanero', 'Moneda'] },
      { term: 'Zelda', hints: ['Espada', 'Leyenda', 'Triángulo'] },
      { term: 'Tetris', hints: ['Encaje', 'Línea', 'Caída'] },
      { term: 'Minecraft', hints: ['Bloques', 'Pico', 'Creación'] },
      { term: 'Pac-Man', hints: ['Laberinto', 'Puntos', 'Fantasma'] },
      { term: 'Pokémon', hints: ['Esfera', 'Criatura', 'Evolución'] },
      { term: 'Fortnite', hints: ['Baile', 'Tormenta', 'Construcción'] },
      { term: 'Halo', hints: ['Armadura', 'Anillo', 'Galaxia'] },
      { term: 'GTA', hints: ['Crimen', 'Conducción', 'Libertad'] },
      { term: 'Resident Evil', hints: ['Mansión', 'Virus', 'Terror'] }
    ]
  },
  {
    id: 'superheroes',
    name: 'Superhéroes',
    icon: '🦸',
    words: [
      { term: 'Batman', hints: ['Murciélago', 'Justicia', 'Oscuridad'] },
      { term: 'Spider-Man', hints: ['Red', 'Responsabilidad', 'Araña'] },
      { term: 'Superman', hints: ['Capa', 'Vuelo', 'Fuerza'] },
      { term: 'Iron Man', hints: ['Armadura', 'Corazón', 'Tecnología'] },
      { term: 'Hulk', hints: ['Ira', 'Fuerza', 'Verde'] },
      { term: 'Wonder Woman', hints: ['Lazo', 'Verdad', 'Guerrera'] },
      { term: 'Flash', hints: ['Velocidad', 'Rayo', 'Tiempo'] },
      { term: 'Wolverine', hints: ['Garras', 'Metal', 'Regeneración'] },
      { term: 'Thor', hints: ['Martillo', 'Trueno', 'Dios'] },
      { term: 'Capitán América', hints: ['Escudo', 'Honor', 'Estrella'] }
    ]
  },
  {
    id: 'mitologia',
    name: 'Mitología',
    icon: '🔱',
    words: [
      { term: 'Zeus', hints: ['Rayo', 'Olimpo', 'Padre'] },
      { term: 'Medusa', hints: ['Piedra', 'Mirada', 'Serpientes'] },
      { term: 'Hércules', hints: ['Trabajos', 'Fuerza', 'Héroe'] },
      { term: 'Pegaso', hints: ['Alas', 'Caballo', 'Vuelo'] },
      { term: 'Poseidón', hints: ['Mar', 'Tridente', 'Terremoto'] },
      { term: 'Fénix', hints: ['Cenizas', 'Fuego', 'Renacer'] },
      { term: 'Anubis', hints: ['Balanza', 'Muerte', 'Chacal'] },
      { term: 'Hades', hints: ['Inframundo', 'Oscuridad', 'Riqueza'] },
      { term: 'Odín', hints: ['Ojo', 'Sabiduría', 'Dios'] },
      { term: 'Minotauro', hints: ['Laberinto', 'Toro', 'Mitad'] }
    ]
  }
];

export const MIN_PLAYERS = 3;
export const DEFAULT_ROUND_DURATION = 300; // 5 minutes