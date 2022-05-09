import { FC } from "react";
import { useSelector } from "react-redux";
import { CartesianGrid, AreaChart as Chart, Tooltip, XAxis, YAxis, Area, Legend } from "recharts";
import { selectCoronaData } from "store/selectors";

const AreaChart: FC = () => {
  const data = useSelector(selectCoronaData);

  return (
    <Chart width={730} height={250} data={data}>
      <defs>
        <linearGradient id="infected" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f00" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#f00" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="deceased" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff0" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff0" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f0f" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#f0f" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="quarantined" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0ff" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#0ff" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="tested" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#00f" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#00f" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="infected" stroke="#f00" fillOpacity={1} fill="url(#infected)" />
      <Area type="monotone" dataKey="deceased" stroke="#ff0" fillOpacity={1} fill="url(#deceased)" />
      <Area type="monotone" dataKey="recovered" stroke="#f0f" fillOpacity={1} fill="url(#recovered)" />
      <Area type="monotone" dataKey="quarantined" stroke="#0ff" fillOpacity={1} fill="url(#quarantined)" />
      <Area type="monotone" dataKey="tested" stroke="#00f" fillOpacity={1} fill="url(#tested)" />
    </Chart>
  );
};

export default AreaChart;
