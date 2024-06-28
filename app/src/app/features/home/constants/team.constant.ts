import { IMember, ITeam } from '../interfaces';

const membersCS: IMember[] = [
  {
    id: 1,
    name: 'Gianpaul Bernal',
    role: 'Team Leader',
  },
  {
    id: 2,
    name: 'Luis Umiña',
    role: 'Operaciones',
  },
  {
    id: 3,
    name: 'Daniella Vargas',
    role: 'Finanzas',
  },
];

const membersCAS: IMember[] = [
  {
    id: 1,
    name: 'Gianpaul Bernal',
    role: 'Team Leader',
  },
  {
    id: 4,
    name: 'Maria Gonzalez',
    role: 'Marketing Digital',
  },
  {
    id: 5,
    name: 'Juan Perez',
    role: 'Operaciones',
  },
  {
    id: 6,
    name: 'Sofia Martinez',
    role: 'Finanzas',
  },
];

const membersACM: IMember[] = [
  {
    id: 1,
    name: 'Gianpaul Bernal',
    role: 'Team Leader',
  },
  {
    id: 8,
    name: 'Ana Torres',
    role: 'Marketing Digital',
  },
  {
    id: 9,
    name: 'Miguel Chavez',
    role: 'Operaciones',
  },
  {
    id: 10,
    name: 'Elena Castillo',
    role: 'Finanzas',
  },
];

export const teams: ITeam[] = [
  {
    id: 1,
    name: 'IEEE CS UPC',
    members: membersCS,
  },
  {
    id: 2,
    name: 'IEEE CAS UPC',
    members: membersCAS,
  },
  {
    id: 3,
    name: 'ACM UPC',
    members: membersACM,
  },
];
