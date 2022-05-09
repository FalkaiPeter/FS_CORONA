import { createSelector } from "reselect";

export const selectCoronaStart = createSelector(
  (state: Store) => state.corona.start,
  (start) => start
);
export const selectCoronaEnd = createSelector(
  (state: Store) => state.corona.end,
  (end) => end
);
export const selectCoronaData = createSelector(
  (state: Store) => state.corona.data,
  (data) => data
);
