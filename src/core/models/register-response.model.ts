export interface ErrorResponse {
  /**
   * El código de estado de la respuesta.
   * Indica el resultado de la solicitud (por ejemplo, 200 para éxito).
   */
  statusCode: number;

  /**
   * Indica si la operación fue exitosa.
   * true si la operación fue exitosa, false en caso contrario.
   */
  isSuccess: boolean;

  /**
   * Mensajes de error, si los hay.
   * Puede contener un array de cadenas con descripciones de errores.
   */
  errorMessages: string[];

  /**
   * El resultado de la operación.
   * Puede ser null si no hay resultado o si la operación falló.
   */
  result: any;
}
