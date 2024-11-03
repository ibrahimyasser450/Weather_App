import React from "react";

interface DayForecast {
  date: string;
  day?: {
    condition?: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data?: {
    forecast?: {
      forecastday?: DayForecast[];
    };
    location?: {
      name: string;
    };
  };
}
export default function WeekForecast({ data }: WeekForecastProps) {
  return (
    <div className="p-12">
      <h1 className="mb-6 text-3xl font-bold text-white after:content-[''] after:block after:w-40 after:h-1 after:bg-gray-500 after:mt-2 sm:after:ml-20">
        {data?.location?.name} Weather for 7 days
      </h1>
      <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
        {data?.forecast?.forecastday?.map((day, index) => (
          <div
            key={index}
            className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center hover:bg-white/60 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer"
          >
            <p>
              {day.date
                ? new Date(day.date).toLocaleString("en-US", {
                    weekday: "short",
                  })
                : "N/A"}
            </p>
            <img
              src={day?.day?.condition?.icon || "--"}
              alt={day?.day?.condition?.text || "Weather icon"}
            />
            <div>
              <p>H {day?.day?.maxtemp_c.toFixed() || "--"}°</p>
              <p>L {day?.day?.mintemp_c.toFixed() || "--"}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
