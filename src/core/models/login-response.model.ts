export interface LoginResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: {
    usuario: Usuario;
    token: string;
  };
}

export interface Usuario {
  id: string;        // UUID del usuario
  email: string;     // Correo electrónico del usuario
  nombre: string;    // Nombre del usuario
  apellido: string;  // Apellido del usuario
}
