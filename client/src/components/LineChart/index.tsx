import { FC } from "react";
import { useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart as Chart, Tooltip, XAxis, YAxis } from "recharts";
import { selectCoronaData } from "store/selectors";

const LineChart: FC = () => {
  const data = useSelector(selectCoronaData);

  return (
    <Chart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="infected" stroke="#f00" />
      <Line type="monotone" dataKey="deceased" stroke="#ff0" />
      <Line type="monotone" dataKey="recovered" stroke="#f0f" />
      <Line type="monotone" dataKey="quarantined" stroke="#0ff" />
      <Line type="monotone" dataKey="tested" stroke="#00f" />
    </Chart>
  );
};

export default LineChart;
