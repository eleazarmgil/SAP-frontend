export interface ErrorResponse {
  statusCode: number;        // Código de estado HTTP
  isSuccess: boolean;        // Indica si la operación fue exitosa
  errorMessages: string[];   // Mensajes de error devueltos desde el backend
  result: null;              // Puede ser null u otro tipo, según la respuesta
}
