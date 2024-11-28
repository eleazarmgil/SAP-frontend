export interface UpdatePsychologistRequest {
  id: string | null;                         // Identificador único del psicólogo
  email: string | null;                      // Correo electrónico del psicólogo
  nombre: string | null;                     // Nombre del psicólogo
  apellido: string | null;                   // Apellido del psicólogo
  numeroColegiatura: number | null;          // Número de colegiatura del psicólogo
  telefonOficina: string | null;             // Teléfono de oficina del psicólogo
  descripcionPsicologo: string | null;       // Descripción sobre el psicólogo
  calle_Av: string | null;                   // Calle o avenida asociada al psicólogo
  verificado: string;                        // Estado de verificación (valor por defecto: "si")
  experiencia: string | null;                // Experiencia laboral del psicólogo
  formacion: string | null;                  // Formación académica del psicólogo
  tipoTerapia: string | null;                // Tipo de terapia que ofrece el psicólogo
  ciudadId: number | null;                   // ID de la ciudad (clave foránea)
}
