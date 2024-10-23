import heartImg from "@/assets/img/heart-img.png";
import AnalyticsBox from "./AnalyticsBox";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const MainDashboard: React.FC = () => {

  const data = {
    labels: [
      "19 Sept",
      "20 Sept",
      "21 Sept",
      "22 Sept",
    ],
    datasets: [
      {
        label: "Productive Hours",
        data: [4, 5, 3, 2, 3, 1, 3, 5, 3],
        backgroundColor: "#580ff5",
      },
      {
        label: "Non-Productive Hours",
        data: [2, 1, 1, 1, 1, 2, 2, 1, 3],
        backgroundColor: "#7c47ed",
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="flex w-full h-full relative items-center justify-center">
      <div className="w-full h-full z-10 absolute top-0 left-0 flex">
        <AnalyticsBox>
          <Bar data={data} options={options} className="h-full"/>
        </AnalyticsBox>
      </div>
      <div className="w-[27rem] h-[27rem]">
        <img src={heartImg} className="img-contain" />
      </div>

    </div>
  )
}

export default MainDashboard