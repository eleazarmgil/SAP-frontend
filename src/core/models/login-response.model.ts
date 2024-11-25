export interface LoginResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: {
    usuario: BasicUser;
    token: string;
    role: string;
  };
}

export interface BasicUser {
  id: string;        // UUID del usuario
  email: string;     // Correo electrónico del usuario
  nombre: string;    // Nombre del usuario
  apellido: string;  // Apellido del usuario
}
