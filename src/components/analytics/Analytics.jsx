import React, { useState } from "react";
import Style from "./Analytics.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const randomSalaryData = [
  {
    name: "Aug 2018",
    totalSalary: 15000,
    inHandSalary: 15000,
  },
  {
    name: "Sept 2018",
    totalSalary: 15000,
    inHandSalary: 15000,
  },
  {
    name: "Oct 2018",
    totalSalary: 21136,
    inHandSalary: 20030,
  },
  {
    name: "Feb 2019",
    totalSalary: 26300,
    inHandSalary: 25076,
  },
  {
    name: "May 2020",
    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Aug 2021",
    totalSalary: 59693,
    inHandSalary: 49168,
  },
  {
    name: "Dec 2021",
    totalSalary: 59693,
    inHandSalary: 50408,
  },
  {
    name: "Jan 2022",
    totalSalary: 70493,
    inHandSalary: 57808,
  },
  {
    name: "Dec 2023",

    totalSalary: 186236,
    inHandSalary: 143213,
  },
  {
    name: "June 2024",

    totalSalary: 198606,
    inHandSalary: 156493,
  },
  {
    name: "Future 2024",
    totalSalary: 300000,
    inHandSalary: 200000,
  },
];

const quadSalaryData = [
  {
    name: "Q1 2018 / month",
    totalSalary: 0,
    inHandSalary: 0,
  },
  {
    name: "Q2 2018 / month",
    totalSalary: 0,
    inHandSalary: 0,
  },
  {
    name: "Q3 2018 / month",
    month: "Aug 2018",
    totalSalary: 15000,
    inHandSalary: 15000,
  },
  {
    name: "Q4 2018 / month",
    month: "Oct 2018",
    totalSalary: 21136,
    inHandSalary: 20030,
  },
  {
    name: "Q1 2019 / month",
    month: "Feb 2019",
    totalSalary: 26300,
    inHandSalary: 25076,
  },
  {
    name: "Q2 2019 / month",

    totalSalary: 26300,
    inHandSalary: 25076,
  },
  {
    name: "Q3 2019 / month",

    totalSalary: 26300,
    inHandSalary: 25076,
  },
  {
    name: "Q4 2019 / month",

    totalSalary: 26300,
    inHandSalary: 25076,
  },
  {
    name: "Q1 2020 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Q2 2020 / month",
    month: "May 2020",
    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Q3 2020 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Q4 2020 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Q1 2021 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Q2 2021 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "Q3 2021 / month",
    month: "Aug 2021",
    totalSalary: 59693,
    inHandSalary: 49168,
  },
  {
    name: "Q4 2021 / month",

    totalSalary: 59693,
    inHandSalary: 49168,
  },
  {
    name: "Q1 2022 / month",
    month: "Apr 2022",
    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "Q2 2022 / month",

    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "Q3 2022 / month",

    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "Q4 2022 / month",

    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "Q1 2023 / month",

    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "Q2 2023 / month",
    month: "May 2023",
    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "Q3 2023 / month",
    month: "Aug 2023",
    totalSalary: 187236,
    inHandSalary: 129567,
  },
  {
    name: "Q4 2023 / month",
    month: "Dec 2023",
    totalSalary: 186236,
    inHandSalary: 143213,
  },
  {
    name: "Q1 2024 / month",
    month: "Mar 2024",
    totalSalary: 186236,
    inHandSalary: 131210,
  },
  {
    name: "Q2 2024 / month",
    month: "June 2024",
    totalSalary: 198606,
    inHandSalary: 156493,
  },
];

const halfSalaryData = [
  {
    name: "H1 2018 / month",
    totalSalary: 0,
    inHandSalary: 0,
  },

  {
    name: "H2 2018 / month",
    month: "Aug 2018",
    totalSalary: 15000,
    inHandSalary: 15000,
  },

  {
    name: "H1 2019 / month",
    month: "Feb 2019",
    totalSalary: 26300,
    inHandSalary: 25076,
  },
  {
    name: "H2 2019 / month",

    totalSalary: 26300,
    inHandSalary: 25076,
  },

  {
    name: "H1 2020 / month",
    month: "May 2020",
    totalSalary: 27180,
    inHandSalary: 25620,
  },

  {
    name: "H2 2020 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },

  {
    name: "H1 2021 / month",

    totalSalary: 27180,
    inHandSalary: 25620,
  },
  {
    name: "H2 2021 / month",
    month: "Aug 2021",
    totalSalary: 59693,
    inHandSalary: 49168,
  },
  {
    name: "H1 2022 / month",
    month: "Apr 2022",
    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "H2 2022 / month",

    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "H1 2023 / month",
    month: "May 2023",
    totalSalary: 186237,
    inHandSalary: 143216,
  },
  {
    name: "H2 2023 / month",
    month: "Aug 2023",
    totalSalary: 187236,
    inHandSalary: 129567,
  },
  {
    name: "H1 2024 / month",
    month: "June 2024",
    totalSalary: 198606,
    inHandSalary: 156493,
  },
  //   {
  //     name: "H1 2024 / month",

  //     totalSalary: 283300,
  //     inHandSalary: 192000,
  //   },
];

const pswd = "Rockon@007";
function Analytics() {
  let randomSalaryDataInfo = randomSalaryData.map((item, index) => {
    return {
      name: item.name,
      totalSalary: item.totalSalary,
      inHandSalary: item.inHandSalary,
      deductedSalary: item.totalSalary - item.inHandSalary,
      deductedPercentAge: (
        ((item.totalSalary - item.inHandSalary) / item.totalSalary) *
        100
      ).toFixed(3),
    };
  });

  let quadSalaryDataInfo = quadSalaryData.map((item, index) => {
    return {
      name: item.name,
      month: item.month ? item.month : "NULL",
      totalSalary: item.totalSalary,
      inHandSalary: item.inHandSalary,
      deductedSalary: item.totalSalary - item.inHandSalary,
      deductedPercentAge: (
        ((item.totalSalary - item.inHandSalary) / item.totalSalary) *
        100
      ).toFixed(3),
    };
  });

  let halflySalaryDataInfo = halfSalaryData.map((item, index) => {
    return {
      name: item.name,
      totalSalary: item.totalSalary,
      inHandSalary: item.inHandSalary,
      deductedSalary: item.totalSalary - item.inHandSalary,
      deductedPercentAge: (
        ((item.totalSalary - item.inHandSalary) / item.totalSalary) *
        100
      ).toFixed(3),
    };
  });

  const [password, setPassword] = useState("");
  const [showReport, setShowReport] = useState(false);

  const checkAccess = (password) => {
    password === pswd ? setShowReport(true) : setShowReport(false);
  };

  return (
    <>
      <div className={Style.permission}>
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(event) => {
            let input = event.target.value;
            setPassword(input);
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            // password === pswd ? setShowReport(true) : setShowReport(false);
            checkAccess(password);
          }}
        >
          Submit
        </Button>
      </div>
      {showReport && (
        <div className={Style.reports}>
          <br />
          <label className={Style.headings}>Random Salary per month</label>
          <br />
          <LineChart
            width={700}
            height={300}
            data={randomSalaryDataInfo}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalSalary"
              stroke="#82ca9d"
              label="Total Salary"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="inHandSalary"
              label="In Hand Salary"
              stroke="#8884d8"
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="deductedSalary"
              label="Deducted Salary"
              stroke="#2584d8"
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="deductedPercentAge"
              label="deducted Percent Age"
              stroke="red"
              activeDot={{ r: 4 }}
            />
          </LineChart>
          <br />
          <label className={Style.headings}>Quad Salary per month</label>
          <br />
          <LineChart
            width={1200}
            height={300}
            data={quadSalaryDataInfo}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="month"
              stroke="#000000"
              label="Total Salary"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="totalSalary"
              stroke="#82ca9d"
              label="Total Salary"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="inHandSalary"
              label="In Hand Salary"
              stroke="#8884d8"
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="deductedSalary"
              label="Deducted Salary"
              stroke="#2584d8"
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="deductedPercentAge"
              label="deducted Percent Age"
              stroke="red"
              activeDot={{ r: 4 }}
            />
          </LineChart>
          <br />
          <label className={Style.headings}>Half Salary per month</label>
          <br />
          <LineChart
            width={500}
            height={300}
            data={halflySalaryDataInfo}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalSalary"
              stroke="#82ca9d"
              label="Total Salary"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="inHandSalary"
              label="In Hand Salary"
              stroke="#8884d8"
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="deductedSalary"
              label="Deducted Salary"
              stroke="#2584d8"
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="deductedPercentAge"
              label="deducted Percent Age"
              stroke="red"
              activeDot={{ r: 4 }}
            />
          </LineChart>
          <br />
        </div>
      )}
    </>
  );
}

export default Analytics;
