import React from "react";
import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ArrDoughnut(props) {
  const { labels, amounts } = props;
  

  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  const data = {
    labels,
    datasets: [
      {
        label: "# of Votes needed",
        data: amounts,
        backgroundColor: amounts.map((item) => randomColor()),
        // borderColor: formValues.income.map(item => random_rgba()),
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
}
