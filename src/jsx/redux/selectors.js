export const selectFilter = state => state.filters.name;

export const selectContacts = state => state.contacts;
export const selectItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredItems = state => {
  const items = selectItems(state);
  const strFilter = selectFilter(state);

  return strFilter?.length === 0
    ? items
    : items.filter(contact =>
        contact.name.toLowerCase().includes(strFilter.trim().toLowerCase())
      );
};
