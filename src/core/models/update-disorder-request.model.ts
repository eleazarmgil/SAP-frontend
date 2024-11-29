export interface UpdateDisorderRequest {
  id: string;               // Unique identifier for the disorder
  nombre: string;           // Name of the disorder
  descripcion: string;      // Description of the disorder
  causas: string;           // Causes of the disorder
  sintomas: string;         // Symptoms of the disorder
}
