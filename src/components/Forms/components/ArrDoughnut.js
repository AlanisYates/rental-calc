import React from "react";
import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ArrDoughnut(props) {
  const { labels, amounts } = props;
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }

  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: amounts,
        backgroundColor: amounts.map((item) => random_rgba()),
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
