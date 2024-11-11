import { totalDataCountList } from "@/constants";
import "chart.js/auto";
import { ChartData, ChartOptions } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import AnalyticsCard from "./AnalyticsCard";
import AppointmentCalender from "./AppointmentCalender";
import TotalDataCard from "./TotalDataCard";

const MainDashboardPage: React.FC = () => {
  
  const data: ChartData<"bar"> = {
    labels: [
      "19 Sept",
      "20 Sept",
      "21 Sept",
      "22 Sept",
      "24 Sept",
      "25 Sept",
      "26 Sept",
      "27 Sept",
    ],
    datasets: [
      {
        label: "Productive Hours",
        data: [4, 5, 3, 2, 3, 1, 3, 5],
        backgroundColor: "#2563eb",
        borderRadius: 100,
        barPercentage: 0.7, // Width of the bars relative to the category
        categoryPercentage: 0.7, // Set fixed bar thickness in pixels
      },
    ],
  };
  const options: ChartOptions<"bar"> = {
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
        ticks: {
          color: "#000",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#000",
          stepSize: 1,
        },
      },
    },
  };

  return (
    // Total doctors, patients, request for appointment, reshedules, cancelations, revenue
    <div className="w-full h-full relative flex flex-col items-start justify-start">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {totalDataCountList.map((data) => {
          return (
            <TotalDataCard
              key={data.title}
              numbers={data.numbersData}
              title={data.title}
              growth={data.growth}
              iconBgColor={data.iconBgColor}
            >
              <data.icon className={`h-5 w-5 ${data.iconTextColor}`} />
            </TotalDataCard>
          );
        })}
      </div>
      <div className="w-full h-[21rem] flex gap-8 items-center justify-between">
        <AnalyticsCard>
          <Bar data={data} options={options} className="h-full" />
        </AnalyticsCard>

        <AppointmentCalender/>
      </div>
    </div>
  );
};

export default MainDashboardPage;
