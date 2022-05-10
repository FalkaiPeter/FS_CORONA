import axios, { AxiosResponse } from "axios";
import { startOfToday, startOfYesterday } from "date-fns";
import { easyReducer } from "easy-ts-redux";
import { put, select } from "redux-saga/effects";
import { selectCoronaEnd, selectCoronaStart } from "store/selectors";

const { actionWithPayload, reducer, watchers, action } = easyReducer<CoronaState>(
  { end: startOfToday(), start: startOfYesterday(), data: [] },
  "corona"
);

export const refreshData = action({
  type: "REFRESH_DATA",
  saga: function* () {
    yield axios.get(`${import.meta.env.VITE_DATABASE_URL}/refresh`);
    yield put(fetchData());
  },
});

export const fetchData = action({
  type: "FETCH_DATA",
  saga: function* (__reducerFnType) {
    const start = yield select(selectCoronaStart);
    const end = yield select(selectCoronaEnd);
    const result: AxiosResponse<Corona[]> = (yield axios.get(
      `${import.meta.env.VITE_DATABASE_URL}/interval/${start}/${end}`
    )) as AxiosResponse<Corona[]>; // have to be casted somehow yield makes it unknown
    yield put({ type: __reducerFnType, payload: result.data });
  },
  reducerFn: (state, payload: Corona[]) => {
    state.data = payload;
  },
});

export const setCoronaStart = actionWithPayload<Date>({
  type: "SET_START",
  saga: function* (__reducerFnType, payload) {
    yield put({ type: __reducerFnType, payload });
    yield put(fetchData());
  },
  reducerFn: (state, payload: Date) => {
    state.start = payload;
  },
});

export const setCoronaEnd = actionWithPayload<Date>({
  type: "SET_END",
  saga: function* (__reducerFnType, payload) {
    yield put({ type: __reducerFnType, payload });
    yield put(fetchData());
  },
  reducerFn: (state, payload: Date) => {
    state.end = payload;
  },
});

export const coronaWatchers = watchers;
export default reducer;
