import { UserRoleInterface } from 'interfaces/user-role';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  name: string;
  description?: string;
  created_by: string;
  updated_by: string;
  created_at?: any;
  updated_at?: any;
  user_role?: UserRoleInterface[];

  _count?: {
    user_role?: number;
  };
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  created_by?: string;
  updated_by?: string;
}
