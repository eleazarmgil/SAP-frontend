export interface RegisterRequest {
  /**
   * La dirección de correo electrónico del usuario.
   * Debe ser un formato válido de email.
   */
  email: string;

  /**
   * El nombre del usuario.
   * Puede incluir caracteres alfabéticos y espacios.
   */
  nombre: string;

  /**
   * El apellido del usuario.
   * Puede incluir caracteres alfabéticos y espacios.
   */
  apellido: string;

  /**
   * La contraseña del usuario.
   * Debe cumplir con los requisitos de seguridad (longitud, complejidad, etc.).
   */
  password: string;

  /**
   * El rol del usuario en el sistema.
   * Puede ser "admin", "user", "editor", etc.
   */
  role: string;

  /**
   * El identificador de la ciudad asociada al usuario.
   * Debe ser un número entero que representa una ciudad en la base de datos.
   */
  ciudadId: number;
}
