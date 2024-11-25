export interface User {
  id: string;                 // Identificador único del usuario
  email: string;              // Correo electrónico del usuario
  nombre: string;             // Nombre del usuario
  apellido: string;           // Apellido del usuario
  telefonOficina: string | null; // Teléfono de oficina (puede ser nulo)
  password: string | null;    // Contraseña (puede ser nulo)
  role: string | null;        // Rol del usuario (puede ser nulo)
}
