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
      <Bar type="monotone" dataKey="infected" fill="#f00" />
      <Bar type="monotone" dataKey="deceased" fill="#ff0" />
      <Bar type="monotone" dataKey="recovered" fill="#f0f" />
      <Bar type="monotone" dataKey="quarantined" fill="#0ff" />
      <Bar type="monotone" dataKey="tested" fill="#00f" />
    </Chart>
  );
};

export default BarChart;
