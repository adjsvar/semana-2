//¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?
//Ejemplo: typeof obj === "object"

// Solución? = 'query === null ? "NO ES UN OBJETO" : typeof query === "object" ? "ES UN OBJET0": "NO ES UN OBJETO"'

let query = null;

query === null ? "NO ES UN OBJETO" : typeof query === "object" ? "ES UN OBJET0": "NO ES UN OBJETO";

query = 'asdas';

query === null ? "NO ES UN OBJETO" : typeof query === "object" ? "ES UN OBJET0": "NO ES UN OBJETO";

query = {};

query === null ? "NO ES UN OBJETO" : typeof query === "object" ? "ES UN OBJET0": "NO ES UN OBJETO";
