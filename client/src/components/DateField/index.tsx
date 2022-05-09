import { TextField } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoronaEnd, setCoronaStart } from "store/corona";
import { selectCoronaEnd, selectCoronaStart } from "store/selectors";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  field: "start" | "end";
}

const DateField: FC<Props> = ({ field }) => {
  const dispatch = useDispatch();
  const value = useSelector(field === "start" ? selectCoronaStart : selectCoronaEnd);

  const handleChange = (date: Date | null) => {
    if (!date) return;
    if (field === "start") {
      dispatch(setCoronaStart(date));
    } else dispatch(setCoronaEnd(date));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateField;
