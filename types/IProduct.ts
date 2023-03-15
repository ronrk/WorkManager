import { Department } from './IUser';

export enum ProductStatus {
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

export enum SoundCategory {
  SPEAKER = 'Speaker',
  AMP = 'Amp',
  SPEAKER_GEAR = 'Speaker Gear',
  MIXER = 'Mixer',
  SB = 'Stage Box',
  SERVER = 'Server',
  WIRELESS = 'Wireless',
  MIC_STANDS = 'Mic Stands',
  BACKLINE = 'Backline',
}

export enum LightCategory {
  SMART = 'Smart',
  LED = 'Led',
  SMOKE = 'Smoke',
  SPLITER = 'Spliter',
  CONTROLLERS = 'Light Controller',
}

export enum OtherCategory {}

interface Product {
  name: string;
  quantity: IQuantity;
  department: Department;
  brand: string;
}

export interface ISoundProduct extends Product {
  subCategory: SoundCategory;
}
export interface ILightProduct extends Product {
  subCategory: LightCategory;
}
export interface IOtherProduct extends Product {
  subCategory: OtherCategory;
}

export type TProduct = ISoundProduct | ILightProduct;
