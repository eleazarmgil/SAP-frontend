export interface CreateDisorderRequest {
  nombre: string;            // Name of the disorder
  descripcion: string;      // Description of the disorder
  causas: string;           // Causes of the disorder
  sintomas: string;         // Symptoms of the disorder
  fechaPublicacion: Date;    // Publication date (ISO string format)
}
