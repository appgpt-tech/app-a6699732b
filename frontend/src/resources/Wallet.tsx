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
const WalletTitle = () => {
  const record = useRecordContext();
  return <span>Wallet {record ? `"${record.walletID}"` : ''}</span>;
};

export const WalletList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="walletID" />
      <ReferenceField source="customerID" reference="Customers" />
      <NumberField source="balance" />
      <ReferenceField source="transactionHistory" reference="Transactions" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const WalletEdit = () => (
  <Edit title={<WalletTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="walletID" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="customerID" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="balance" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput
            source="transactionHistory"
            reference="Transactions"
          />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const WalletCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="walletID" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="customerID" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="balance" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput
            source="transactionHistory"
            reference="Transactions"
          />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="customerID"
    label="customerID"
    reference="Customers"
    alwaysOn
  />,
  ,
  <ReferenceInput
    source="transactionHistory"
    label="transactionHistory"
    reference="Transactions"
    alwaysOn
  />,
];
