import { Department } from './IUser';

export enum GearStatus {
  BASE = 'On Basement',
  WORK = 'On Work',
  REPAIR = 'On Repair',
  BROKEN = 'Broken',
}

export interface IQuantity {
  total: number;
  onWork: number;
  onRepair: number;
  broken: number;
  remain: number;
}

export enum SoundCategory {}

export enum LightCategory {}

export enum OtherCategory {}

interface IGear {
  name: string;
  qunatity: IQuantity;
  status: GearStatus;
  department: Department;
}

export interface ISoundGear extends IGear {
  subCategory: SoundCategory;
}
export interface ILightGear extends IGear {
  subCategory: LightCategory;
}
export interface IOtherGear extends IGear {
  subCategory: OtherCategory;
}
