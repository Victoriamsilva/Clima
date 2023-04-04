import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { HourlyWeather } from "../../Entities/dailyWeather";

// Sample chart data
const pdata = [
  {
    name: "MongoDb",
    student: 11,
    fees: 120,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

interface LineGraphProps {
  data: HourlyWeather[];
}

export default function LineGraph({ data }: LineGraphProps) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={data} margin={{ right: 300 }}>
        <XAxis dataKey="hour" interval={"preserveStartEnd"} />
        <Legend />
        <Tooltip />
        <Line dataKey="Temperatura" stroke="red" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
