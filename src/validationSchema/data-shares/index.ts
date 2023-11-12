import * as yup from 'yup';

export const dataShareValidationSchema = yup.object().shape({
  created_by: yup.string().required(),
  updated_by: yup.string().required(),
  data_id: yup.string().nullable().required(),
  shared_with: yup.string().nullable().required(),
});
