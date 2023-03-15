export enum Role {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  CREW_MANAGER = 'CREW_MAGER',
  WORKER = 'WORKER',
}

export enum Department {
  SOUND = 'Sound',
  LIGHT = 'Light',
  OTHER = 'Other',
}

export enum WorkerTitle {
  BACKLINE = 'Backliner',
  SYSTEM = 'System Engineer',
  BOARD_CONSOLE = 'Console Engineer',
  OTHER = 'Other',
}

export interface IUser {
  name: string;
  email: string;
  phoneNumer: string;
  role: Role;
}

export interface IAdmin extends IUser {
  role: Role.ADMIN;
  department: Department;
}

export interface IManager extends IUser {
  role: Role.CREW_MANAGER;
  department: Department;
}
export interface IWorker extends IUser {
  role: Role.WORKER;
  workerTitle: WorkerTitle[];
}
