export const selectFilter = state => state.filters.name;

export const selectContacts = state => state.contacts;
export const selectItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
