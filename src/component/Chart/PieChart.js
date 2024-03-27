import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10 }, // Tambahkan label untuk setiap data
  { id: 1, value: 15 },
];

export default function PieCharts() {
  return (
    <div>
      <PieChart
        series={[
          {
            data,
          },
        ]}
        height={400}
        width={600}
      />
    </div>
  );
}
