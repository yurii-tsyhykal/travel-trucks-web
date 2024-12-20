export const selectCampers = state => state.campers.items.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectIsError = state => state.campers.error;
export const selectTotal = state => state.campers.items.total;
export const selectPerPage = state => state.campers.perPage;
export const selectLoadMoreLoading = state => state.campers.loadMoreLoading;