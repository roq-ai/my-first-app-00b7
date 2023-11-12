import * as yup from 'yup';

export const userRoleValidationSchema = yup.object().shape({
  created_by: yup.string().required(),
  updated_by: yup.string().required(),
  user_id: yup.string().nullable().required(),
  role_id: yup.string().nullable().required(),
});
