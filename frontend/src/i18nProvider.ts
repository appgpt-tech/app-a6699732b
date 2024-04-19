//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    VtuServices: {
      name: 'Vtu Services',
      fields: {
        serviceName: 'Service Name',
        cost: 'Cost',
        provider: 'Provider',
        description: 'Description',
        transactionsMenu: 'Transactions Menu',
        wallet: 'Wallet',
        id: 'id',
      },
    },
    Transactions: {
      name: 'Transactions',
      fields: {
        transactionID: 'Transaction Id',
        customerID: 'Customer Id',
        serviceID: 'Service Id',
        amount: 'Amount',
        date: 'Date',
        status: 'Status',
        id: 'id',
      },
    },
    Customers: {
      name: 'Customers',
      fields: {
        customerName: 'Customer Name',
        phoneNumber: 'Phone Number',
        customerWallet: 'Customer Wallet',
        id: 'id',
      },
    },
    Wallet: {
      name: 'Wallet',
      fields: {
        walletID: 'Wallet Id',
        customerID: 'Customer Id',
        balance: 'Balance',
        transactionHistory: 'Transaction History',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    VtuServices: {
      name: 'Vtu Services (fr)',
      fields: {
        serviceName: 'Service Name (fr)',
        cost: 'Cost (fr)',
        provider: 'Provider (fr)',
        description: 'Description (fr)',
        transactionsMenu: 'Transactions Menu (fr)',
        wallet: 'Wallet (fr)',
        id: 'id',
      },
    },
    Transactions: {
      name: 'Transactions (fr)',
      fields: {
        transactionID: 'Transaction Id (fr)',
        customerID: 'Customer Id (fr)',
        serviceID: 'Service Id (fr)',
        amount: 'Amount (fr)',
        date: 'Date (fr)',
        status: 'Status (fr)',
        id: 'id',
      },
    },
    Customers: {
      name: 'Customers (fr)',
      fields: {
        customerName: 'Customer Name (fr)',
        phoneNumber: 'Phone Number (fr)',
        customerWallet: 'Customer Wallet (fr)',
        id: 'id',
      },
    },
    Wallet: {
      name: 'Wallet (fr)',
      fields: {
        walletID: 'Wallet Id (fr)',
        customerID: 'Customer Id (fr)',
        balance: 'Balance (fr)',
        transactionHistory: 'Transaction History (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);