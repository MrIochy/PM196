import { restar } from './utils.js';
import { verificarUsuario } from './auth.js';

// ejercicio a
console.log(restar(10, 5));
console.log(restar(3, 7));
console.log(restar(0, 0));

// ejercicio b
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

verificarUsuario("Luis")
    .then(res => console.log(res))
    .catch(err => console.error(err));