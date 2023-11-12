import { DataShareInterface } from 'interfaces/data-share';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DataInterface {
  id?: string;
  name: string;
  value?: string;
  user_id: string;
  created_by: string;
  updated_by: string;
  created_at?: any;
  updated_at?: any;
  data_share?: DataShareInterface[];
  user?: UserInterface;
  _count?: {
    data_share?: number;
  };
}

export interface DataGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  value?: string;
  user_id?: string;
  created_by?: string;
  updated_by?: string;
}
