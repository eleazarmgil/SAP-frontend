import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Mensajería',
    icon: 'mail',
    subItems: [
      {
        label: 'Recibidos',
        link: 'email/inbox',
      },
      {
        label: 'Enviados',
        link: 'email/sent'
      },
      {
        label: 'Destacados',
        link: 'email/highlighted'
      },
      {
        label: 'Papelera',
        link: 'email/deleted'
      },
      {
        label: 'Archivados',
        link: 'email/archived'
      }
    ]
  },
  {
    label: 'Mis compras',
    icon: 'book-open',
    link: 'purchases',
  },
  {
    label: 'Mis productos',
    icon: 'feather',
    link: 'products'
  }
];
