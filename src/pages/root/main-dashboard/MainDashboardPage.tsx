import "chart.js/auto";
import { ChartData, ChartOptions } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import AnalyticsBox from "./AnalyticsBox";

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
        borderRadius: 8,
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
    <div className="flex w-full h-full relative items-center justify-center">
      <AnalyticsBox>
            <Bar data={data} options={options} className="h-full" />
          </AnalyticsBox>
      {/* <div className="w-full h-full z-10 absolute top-0 left-0 flex gap-20 justify-between">
        <section className="md:w-1/2">
          <AnalyticsBox>
            <Bar data={data} options={options} className="h-full" />
          </AnalyticsBox>
        </section>
        <section className="grid grid-cols-2 place-content-start gap-2">
          <div className="w-[12rem] h-[12rem] relative bg-zinc-50 opacity-90 p-1 rounded-2xl flex flex-col items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[3.2rem] h-[3.2rem] bg-background rounded-2xl flex items-center justify-center">
                <ClipboardPlus className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm leading-none">
                  Users count
                </p>
                <p className="text-lg font-semibold">163</p>
              </div>
            </div>

            <div className="w-full h-[70%] bg-background rounded-2xl flex justify-end gap-4">
              <div className="flex items-center flex-col justify-center gap-3">
                <p className="text-xl font-medium">Doctors</p>
                <p className="text-xl font-medium">Patients</p>
              </div>
              <div className="h-full w-[4rem] bg-primary rounded-2xl flex-col text-white flex items-center justify-center gap-3">
                <p className="text-2xl font-medium">23</p>
                <p className="text-2xl font-medium">123</p>
              </div>
            </div>
            <div className="w-4 h-14 bg-zinc-50 absolute right-0 translate-x-full top-1/2 -translate-y-1/2"></div>
            <div className="w-14 h-4 bg-zinc-50 absolute bottom-0 -translate-x-1/2 left-1/2 translate-y-full"></div>
          </div>
          
          <div className="w-[12rem] h-[12rem] bg-zinc-50 opacity-90 p-1 rounded-2xl flex items-end justify-center">
            <div className="w-full h-[70%] bg-background rounded-2xl"></div>
          </div>
          <div className="w-[12rem] h-[12rem] bg-zinc-50 opacity-90 p-1 rounded-2xl flex items-end justify-center">
            <div className="w-full h-[70%] bg-background rounded-2xl"></div>
          </div>
          <div className="w-[12rem] h-[12rem] bg-zinc-50 opacity-90 p-1 rounded-2xl flex items-end justify-center">
            <div className="w-full h-[70%] bg-background rounded-2xl"></div>
          </div>
        </section>
      </div>
      <div className="w-[27rem] h-[27rem]">
        <img src={heartImg} className="img-contain" />
      </div> */}
    </div>
  );
};

export default MainDashboardPage;
