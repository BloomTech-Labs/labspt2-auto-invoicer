import React from 'react';

export default React.createContext({
  user: {
    _id: '',
    email: '',
    name: '',
    phoneNumber: '',
    companies: [],
    invoices: [],
    defaultCompany: '',
    premium: '',
    premiumExpiresOn: '',
    newAccount: ''
  }
});
