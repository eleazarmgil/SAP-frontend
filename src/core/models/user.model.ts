export interface User {
  id: string;                         // Identificador único del usuario
  email: string;                      // Correo electrónico del usuario
  nombre: string;                     // Nombre del usuario
  apellido: string;                   // Apellido del usuario
  telefonOficina: string | null;      // Teléfono de oficina (puede ser nulo)
  password: string | null;            // Contraseña (puede ser nulo)
  role: string | null;                // Rol del usuario (puede ser nulo)
  numeroColegiatura: number | null;   // Número de colegiatura (puede ser nulo)
  descripcionPsicologo: string | null; // Descripción del psicólogo (puede ser nulo)
  calle_Av: string | null;            // Calle o avenida (puede ser nulo)
  verificado: string | null;         // Estado de verificación (puede ser nulo)
  experiencia: string | null;         // Experiencia del psicólogo (puede ser nulo)
  formacion: string | null;           // Formación del psicólogo (puede ser nulo)
  tipoTerapia: string | null;         // Tipo de terapia que ofrece (puede ser nulo)
  ciudadId: number | null;            // ID de la ciudad (puede ser nulo)
}
