export interface CreateReviewRequest {
  observacion: string;     // Observation or comment about the feedback
  puntaje: number;         // Score associated with the feedback
  usuarioId: string;       // Unique identifier for the user providing feedback
  psicologoId: string;     // Unique identifier for the psychologist receiving feedback
}
