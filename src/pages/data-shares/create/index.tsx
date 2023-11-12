import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { dataShareValidationSchema } from 'validationSchema/data-shares';
import { DataInterface } from 'interfaces/data';
import { UserInterface } from 'interfaces/user';
import { DataShareInterface } from 'interfaces/data-share';

function DataShareCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: DataShareInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.data_share.create({ data: values as RoqTypes.data_share });
      resetForm();
      router.push('/data-shares');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<DataShareInterface>({
    initialValues: {
      created_by: '',
      updated_by: '',
      data_id: (router.query.data_id as string) ?? null,
      shared_with: (router.query.shared_with as string) ?? null,
    },
    validationSchema: dataShareValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Data Shares',
              link: '/data-shares',
            },
            {
              label: 'Create Data Share',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Data Share
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.created_by}
            label={'Created By'}
            props={{
              name: 'created_by',
              placeholder: 'Created By',
              value: formik.values?.created_by,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.updated_by}
            label={'Updated By'}
            props={{
              name: 'updated_by',
              placeholder: 'Updated By',
              value: formik.values?.updated_by,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<DataInterface>
            formik={formik}
            name={'data_id'}
            label={'Select Data'}
            placeholder={'Select Data'}
            fetcher={() => roqClient.data.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'shared_with'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/data-shares')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'data_share',
    operation: AccessOperationEnum.CREATE,
  }),
)(DataShareCreatePage);
