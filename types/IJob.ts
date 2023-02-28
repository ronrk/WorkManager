import { Department } from './IUser';

interface ITechList {
  department: Department;
}

interface IJobDetail {}

export interface IJob {
  techList: ITechList[];
  jobDetails: IJobDetail;
}
