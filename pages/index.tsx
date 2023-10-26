import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import * as styles from "../styles/Home.css";

import { Dropzone } from "../components/Dropzone/Dropzone";
import Header from "../components/Header";
import Container from "../uikit/Container";
import Table from "../components/Table";

const knownFields = [
  "Date",
  "MCC",
  "Details",
  "Amount",
  "Commision",
  "Total After",
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>FinTrack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        Hello!
      </main>
    </div>
  );
}
