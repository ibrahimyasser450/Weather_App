import getCurrentDate from "../utils/currentDate";
import { MdLocationOn } from "react-icons/md";

interface CurrentProps {
  data?: {
    current?: {
      humidity: number;
      wind_mph: number;
      temp_c: number;
    };
    forecast?: {
      forecastday?: Array<{
        day?: {
          condition?: {
            icon: string;
            text: string;
          };
        };
      }>;
    };
    location?: {
      name: string;
      country: string;
    };
  };
}

export default function Current({ data }: CurrentProps) {
  const currentDate = getCurrentDate();
  const weatherIcon = data?.forecast?.forecastday?.[0]?.day?.condition?.icon;
  const weatherText =
    data?.forecast?.forecastday?.[0]?.day?.condition?.text || "Weather icon";
  return (
    <div className="bg-blue-500 text-white shadow-lg w-full max-w-md md:max-w-sm md:mb-0 order-1 py-2 px-4 rounded-xl md:ml-6 mt-6 hover:bg-blue-600 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
      <div className="flex items-center rounded-xl text-xl font-bold italic">
        <MdLocationOn />
        <h3 className="ml-2">{data?.location?.name || "Location"},</h3>
        <span className="ml-2">{data?.location?.country || "Unknown"}</span>
      </div>
      <p className="text-base font-semibold ml-4">({currentDate})</p>
      <div className="flex items-center flex-row justify-between">
        <div className=" test-xl font-bold">
          <p>Temp: {data?.current?.temp_c?.toFixed() || "--"}°C</p>
          <p>Wind: {data?.current?.wind_mph?.toFixed(1) || "--"} M/S</p>
          <p>Humidity: {data?.current?.humidity || "--"}%</p>
        </div>
        <div className="flex flex-col mr-6 mb-4">
          <div className="flex justify-center">
            {weatherIcon && (
              <img
                className="w-12 h-12 bg-sky-600 rounded-full"
                src={weatherIcon}
                alt={weatherText}
              />
            )}
          </div>
          <p className="text-lg font-bold text-center">
            {weatherText || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
