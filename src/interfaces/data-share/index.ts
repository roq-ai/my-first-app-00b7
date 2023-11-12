import { DataInterface } from 'interfaces/data';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DataShareInterface {
  id?: string;
  data_id: string;
  shared_with: string;
  created_by: string;
  updated_by: string;
  created_at?: any;
  updated_at?: any;

  data?: DataInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DataShareGetQueryInterface extends GetQueryInterface {
  id?: string;
  data_id?: string;
  shared_with?: string;
  created_by?: string;
  updated_by?: string;
}
