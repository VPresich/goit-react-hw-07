export const CONTACTS_SLICE = 'contacts';
export const FILTERS_SLISE = 'filters';
export const BASE_URL = 'https://65d7f3bb27d9a3bc1d7becfe.mockapi.io/';
export const END_POINT = 'contacts';

export const defaultContactsState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const defaultFiltersState = {
  name: '',
};
