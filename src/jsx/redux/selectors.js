export const getFilter = state => state.filters.name;

export const getContacts = state => state.contacts;
export const getItems = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
