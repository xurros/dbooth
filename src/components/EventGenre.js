import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend} from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS'];

      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  // const COLORS = ["#7E697A", "#525252", "#BB7D8C", "#8685EF", "#b58950"]
  const COLORS = ["#67A8BC", "#525252", "#C97CA6", "#97BC67", "#b58950"]

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Legend verticalAlign="bottom" height={36} />
        <Pie
          data={data}
          cx={350}
          cy={200}
          labelLine={false}
          outerRadius={120}
          dataKey="value"
          label={({ percent }) =>
            `${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
