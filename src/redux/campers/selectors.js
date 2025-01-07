export const selectCampers = state => state.campers.items.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectIsError = state => state.campers.error;
export const selectTotal = state => state.campers.items.total;
export const selectDetailsById = (state, id) => {
  const idcamp = state.campers.items.items.find(
    item => String(item.id) === String(id)
  );
  return idcamp;
};
