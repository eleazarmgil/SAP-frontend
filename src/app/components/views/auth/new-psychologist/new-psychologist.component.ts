import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSignupComponent } from 'src/app/components/popups/confirm-signup/confirm-signup.component';

interface Parish {
  name: string;
}

interface State {
  name: string;
  parishes: Parish[];
}

@Component({
  selector: 'app-new-psychologist',
  templateUrl: './new-psychologist.component.html',
  styleUrl: './new-psychologist.component.scss'
})
export class NewPsychologistComponent {

  constructor(public dialog:MatDialog){}
  selectedState: State = { name: "", parishes: [] };
  venezuelaAreaCodes: number[] = [
    // Amazonas
    248,
    // Anzoátegui
    281, 282, 283,
    // Apure
    240,
    // Aragua
    244,
    // Barinas
    273,
    // Bolívar
    284, 285, 286, 288, 289,
    // Carabobo
    241, 242, 243, 245, 249,
    // Cojedes
    258,
    // Distrito Capital
    212,
    // Falcón
    259, 268, 279,
    // Guárico
    235, 238, 246, 247,
    // Lara
    252,
    // Mérida
    274,
    // Miranda
    234, 239,
    // Monagas
    287, 291, 292,
    // Nueva Esparta
    295,
    // Portuguesa
    255, 256, 257, 272,
    // Sucre
    293, 294,
    // Táchira
    276, 277, 278,
    // Yaracuy
    251, 253, 254,
    // Zulia
    261, 262, 263, 264, 265, 266, 267, 271, 275
  ].sort((a, b) => a - b);

  venezuelaStates: State[] = [
    {
      name: 'Amazonas', parishes: [
        { name: 'Alto Orinoco' }, { name: 'Atabapo' }, { name: 'Autana' },
        { name: 'Manapiare' }, { name: 'Maroa' }, { name: 'Río Negro' }
      ]
    },
    {
      name: 'Anzoátegui', parishes: [
        { name: 'Anaco' }, { name: 'Aragua' }, { name: 'Barcelona' },
        { name: 'Bolívar' }, { name: 'Bruzual' }, { name: 'Caigua' },
        { name: 'Cantaura' }, { name: 'Clarines' }, { name: 'El Chaparro' },
        { name: 'Fernando de Peñalver' }, { name: 'Francisco' }, { name: 'Guanta' },
        { name: 'Guanipa' }, { name: 'Lechería' }, { name: 'Manuel Renaud' },
        { name: 'Onoto' }, { name: 'Pariaguán' }, { name: 'Puerto La Cruz' },
        { name: 'Puerto Píritu' }, { name: 'Sabana de Uchire' }, { name: 'San Juan' },
        { name: 'San Mateo' }, { name: 'Santa Ana' }, { name: 'Santa María' },
        { name: 'Simon Rodríguez' }, { name: 'Soledad' }, { name: 'Sotillo' },
        { name: 'Aragua de Barcelona' }
      ]
    },
    {
      name: 'Apure',
      parishes: [
        { name: 'Achaguas' },
        { name: 'Biruaca' },
        { name: 'Muñapipí' },
        { name: 'San Fernando de Apure' },
        { name: 'Romana' },
        { name: 'Dantas' },
        { name: 'Guasdualito' },
        { name: 'Mantecal' },
        { name: 'Elorza' },
        { name: 'San Juan de Payara' },
        { name: 'Puerto Páez' },
        { name: 'Arauca' },
        { name: 'Biruaca' },
        { name: 'Pedro María Ureña' },
        { name: 'Mepa' },
        { name: 'Achimetal' },
        { name: 'Guafalito' },
        { name: 'San Rafael de Atamaca' },
        { name: 'Tame' },
        { name: 'Palmira' },
        { name: 'Felicia' },
        { name: 'Santa Bárbara' },
      ],
    },
    {
      name: 'Aragua',
      parishes: [
        { name: 'Aragua de Barcelona' },
        { name: 'Costa de Oro' },
        { name: 'Francisco de Miranda' },
        { name: 'Freites' },
        { name: 'Independencia' },
        { name: 'Libertad' },
        { name: 'Manuel Ezequiel Bruzual' },
        { name: 'Pedro María Freites' },
        { name: 'San Carlos' },
        { name: 'Simon Bolívar' },
        { name: 'Tocomán' },
        { name: 'Girardot' },
        { name: 'José Tadeo Monagas' },
        { name: 'Mario Briceño Iragorry' },
        { name: 'Sosa' },
        { name: 'Zamora' },
        { name: 'Francisco Linares Alcántara' },
        { name: 'Libertador' },
        { name: 'José Félix Ribas' },
        { name: 'Revenga' },
        { name: 'Lamas' },
        { name: 'San Sebastián' },
      ],
    },
    {
      name: 'Barinas',
      parishes: [
        { name: 'Alto Barinas' },
        { name: 'Barinas' },
        { name: 'Betancourt' },
        { name: 'Ezequiel Zamora' },
        { name: 'Manuel Felipe Rugeles' },
        { name: 'Obispos' },
        { name: 'Pedraza' },
        { name: 'Rojas' },
        { name: 'San Francisco' },
        { name: 'Santa Bárbara' },
        { name: 'Sosa' },
        { name: 'Aricualza' },
        { name: 'Barinas' },
        { name: 'Canaguá' },
        { name: 'Ciudad Bolivia' },
        { name: 'El Carmen' },
        { name: 'Guaichiría' },
        { name: 'La Esperanza' },
        { name: 'Las Veguitas' },
        { name: 'Marín' },
        { name: 'Masparro' },
        { name: 'Santa Inés' },
        { name: 'Tic Toc' },
      ],
    },
    {
      name: 'Bolívar',
      parishes: [
        { name: 'Angostura del Orinoco' },
        { name: 'Cedeño' },
        { name: 'El Callao' },
        { name: 'Gran Sabana' },
        { name: 'Heres' },
        { name: 'Humadacá' },
        { name: 'La Gran Sabana' },
        { name: 'Libertador' },
        { name: 'Luis Alberto Briceño' },
        { name: 'Mario Briceño Iragorry' },
        { name: 'Municipio Bolivariano Angostura del Orinoco' },
        { name: 'Municipio Bolivariano Heres' },
        { name: 'Municipio Bolivariano Gran Sabana' },
        { name: 'Municipio El Callao' },
        { name: 'Municipio Municipio Libertador' },
        { name: 'Municipio Raùl Leòn' },
        { name: 'Municipio Sucre' },
        { name: 'Municipio Piar' },
        { name: 'Municipio Roscio' },
        { name: 'Municipio Sifontes' },
        { name: 'Municipio Urbaneja' },
      ],
    },
    {
      name: 'Carabobo',
      parishes: [
        { name: 'Bejuma' },
        { name: 'Carlos Arvelo' },
        { name: 'Diego de Valencia' },
        { name: 'Florida' },
        { name: 'Gugüey' },
        { name: 'Independencia' },
        { name: 'Juan Bautista Arismendi' },
        { name: 'Libertador' },
        { name: 'Los Guayos' },
        { name: 'Mariara' },
        { name: 'Miguel Peña' },
        { name: 'Municipio Bolivariano Bejuma' },
        { name: 'Municipio Bolivariano Carlos Arvelo' },
        { name: 'Municipio Bolivariano Diego de Valencia' },
        { name: 'Municipio Bolivariano Florida' },
        { name: 'Municipio Bolivariano Fuertes' },
        { name: 'Municipio Bolivariano Libertador' },
        { name: 'Municipio Bolivariano Los Guayos' },
        { name: 'Municipio Bolivariano Mariara' },
        { name: 'Municipio Bolivariano Miguel Peña' },
        { name: 'Municipio Bolivariano Puerto Cabello' },
        { name: 'Municipio Bolivariano San Diego' },
        { name: 'Municipio Bolivariano San Felipe' },
        { name: 'Municipio Bolivariano Valencia' },
        { name: 'Municipio Carlos Arvelo' },
        { name: 'Municipio Diego de Valencia' },
        { name: 'Municipio Libertador' },
        { name: 'Municipio Valencia' },
      ],
    },
    {
      name: 'Cojedes',
      parishes: [
        { name: 'Apure' },
        { name: 'Condeño' },
        { name: 'Ezequiel Zamora' },
        { name: 'Girardot' },
        { name: 'Lima Blanco' },
        { name: 'Macao' },
        { name: 'Rómulo Gallegos' },
        { name: 'San Carlos' },
        { name: 'Santa Bárbara' },
        { name: 'Tinaquillo' },
      ],
    },
    {
      name: 'Distrito Capital',
      parishes: [
        { name: 'Altagracia' },
        { name: 'Antímano' },
        { name: 'Apostoles' },
        { name: 'Arismendi' },
        { name: 'Candelaria' },
        { name: 'Catedral' },
        { name: 'Chacao' },
        { name: 'El Valle' },
        { name: 'La Altagracia' },
        { name: 'La Candelaria' },
        { name: 'La Pastora' },
        { name: 'Las Mercedes' },
        { name: 'Los Dos Caminos' },
        { name: 'Macarao' },
        { name: 'Magdalena' },
        { name: 'Manicomio' },
        { name: 'Montecristo' },
        { name: 'Nuestra Señora de la Concepción' },
        { name: 'Pilar' },
        { name: 'San Agustín' },
        { name: 'San Alejandro' },
        { name: 'San Bernardino' },
        { name: 'San Carlos' },
        { name: 'San José' },
        { name: 'San Juan' },
        { name: 'San Mateo' },
        { name: 'San Pedro' },
        { name: 'Santa Ana' },
        { name: 'Santa Bárbara' },
        { name: 'Santa Isabel' },
        { name: 'Santa María' },
        { name: 'Santa Rosalía' },
        { name: 'Santa Teresa' },
        { name: 'Sebastián' },
      ],
    }




    // Agrega más estados y sus parroquias aquí
  ];


  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmSignupComponent, {
      width: '250px',
      data: {name: 'Angular'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
}
}
