export interface Disorder {
  id: string;               // Unique identifier for the disorder
  nombre: string;           // Name of the disorder
  descripcion: string;      // Description of the disorder
  causas: string;           // Causes of the disorder
  sintomas: string;         // Symptoms of the disorder
  fechaPublicacion: Date;    // Publication date (ISO string format)
}

export type DisorderList = Disorder[]; // Type representing an array of Disorder objects
