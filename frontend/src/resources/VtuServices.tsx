//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const VtuServicesTitle = () => {
  const record = useRecordContext();
  return <span>VtuServices {record ? `"${record.serviceName}"` : ''}</span>;
};

export const VtuServicesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="serviceName" />
      <NumberField source="cost" />
      <TextField source="provider" />
      <TextField source="description" />
      <ReferenceField source="transactionsMenu" reference="Transactions" />
      <ReferenceField source="wallet" reference="Wallet" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const VtuServicesEdit = () => (
  <Edit title={<VtuServicesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="serviceName" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="cost" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="provider" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="transactionsMenu" reference="Transactions" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="wallet" reference="Wallet" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const VtuServicesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="serviceName" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="cost" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="provider" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="transactionsMenu" reference="Transactions" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="wallet" reference="Wallet" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="transactionsMenu"
    label="transactionsMenu"
    reference="Transactions"
    alwaysOn
  />,
  <ReferenceInput source="wallet" label="wallet" reference="Wallet" alwaysOn />,
];
