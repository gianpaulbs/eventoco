export interface IMember {
  id: number;
  name: string;
  role: string;
}

export interface IEvent {
  id: number;
  name: string;
  date: string;
  teamId: number;
}

export interface ITeam {
  id: number;
  name: string;
  members: IMember[];
  events: IEvent[];
}
