import axios from "axios";
import { startOfToday, startOfYesterday } from "date-fns";
import { easyReducer } from "easy-ts-redux";
import { select } from "redux-saga/effects";
import { selectCoronaEnd, selectCoronaStart } from "store/selectors";

const { actionWithPayload, reducer, watchers, action } = easyReducer<CoronaState>(
  { end: startOfToday(), start: startOfYesterday(), data: undefined },
  "corona"
);

export const fetchData = action({
  type: "FETCH_DATA",
  saga: function* () {
    const start = yield select(selectCoronaStart);
    const end = yield select(selectCoronaEnd);
    //const data = axios.get(`${}`)
  },
});

export const setCoronaStart = actionWithPayload<Date>({
  type: "SET_START",
  reducerFn: (state, payload: Date) => {
    state.start = payload;
  },
});

export const setCoronaEnd = actionWithPayload<Date>({
  type: "SET_END",
  reducerFn: (state, payload: Date) => {
    state.end = payload;
  },
});

export const coronaWatchers = watchers;
export default reducer;
