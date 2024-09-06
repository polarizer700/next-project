import { PATHS } from '@/routes';

export const menuItemsData: { path: string; title: string }[] = [
  {
    title: 'main',
    path: PATHS.main
  },
  {
    title: 'abput us',
    path: PATHS.aboutUs
  },
  {
    title: 'clients',
    path: PATHS.clients
  },
  {
    title: 'workers',
    path: PATHS.workers
  }
];

export const updatedMenuItemsData = menuItemsData.slice(1);
