export interface UpdateUserRequest {
  /**
   * ID del usuario (requerido).
   * Este es el identificador único que se utiliza para localizar al usuario en la base de datos.
   */
  id: string;

  /**
   * Nuevo correo electrónico del usuario (requerido).
   * Este es el correo electrónico que se desea asociar al usuario.
   */
  email: string;

  /**
   * Nuevo nombre del usuario (requerido).
   * Este es el nombre que se desea registrar para el usuario.
   */
  nombre: string;

  /**
   * Nuevo apellido del usuario (requerido).
   * Este es el apellido que se desea registrar para el usuario.
   */
  apellido: string;

  /**
   * Teléfono de oficina del usuario (requerido).
   * Este es el número de teléfono de oficina que se desea asociar al usuario.
   */
  telefonOficina: string;

  /**
   * ID de la ciudad (requerido).
   * Este es el identificador de la ciudad que se desea asociar al usuario.
   */
  ciudadId: number;
}
