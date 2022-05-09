import { FC } from "react";
import { useSelector } from "react-redux";
import { Bar, CartesianGrid, Legend, BarChart as Chart, Tooltip, XAxis, YAxis } from "recharts";
import { selectCoronaData } from "store/selectors";

const BarChart: FC = () => {
  const data = useSelector(selectCoronaData);

  return (
    <Chart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar type="monotone" dataKey="infected" stroke="#f00" />
      <Bar type="monotone" dataKey="deceased" stroke="#ff0" />
      <Bar type="monotone" dataKey="recovered" stroke="#f0f" />
      <Bar type="monotone" dataKey="quarantined" stroke="#0ff" />
      <Bar type="monotone" dataKey="tested" stroke="#00f" />
    </Chart>
  );
};

export default BarChart;
