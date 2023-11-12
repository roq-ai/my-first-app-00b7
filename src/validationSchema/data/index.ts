import * as yup from 'yup';

export const dataValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.string().nullable(),
  created_by: yup.string().required(),
  updated_by: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
