import { Usuario } from '/app/model/usuario.js';

export const usuarios = [];
const user1 = new Usuario('Roger Guedes', 'rogerguedes@gmail.com', 'roger123');
const user2 = new Usuario('Yuri Alberto', 'yurialberto@gmail.com', 'yuri123');
const user3 = { nome: 'Renato Augusto', email: 'renatoaugusto@gmail.com', senha: 'renato123' };
usuarios.push(user1);
usuarios.push(user2);
usuarios.push(user3);