import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  created_by: yup.string().required(),
  updated_by: yup.string().required(),
});
