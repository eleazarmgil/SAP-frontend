export interface City {
  /**
   * ID de la ciudad (requerido).
   * Este es el identificador único que se utiliza para localizar a la ciudad en la base de datos.
   */
  id: number;

  /**
   * Nombre de la ciudad (requerido).
   * Este es el nombre que se desea asociar a la ciudad.
   */
  nombre: string;

  /**
   * ID del estado (requerido).
   * Este es el identificador del estado al que pertenece la ciudad.
   */
  estadoId: number;
}
