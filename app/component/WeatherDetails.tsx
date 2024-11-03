import { BsSunrise, BsSunset } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

interface WeatherDetailsProps {
  data?: {
    current?: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast?: {
      forecastday?: {
        astro?: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}
export default function WeatherDetails({ data }: WeatherDetailsProps) {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-6 text-3xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-gray-500 after:mt-2 sm:after:ml-16">
          Weather Details
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex md:flex-row flex-col items-center justify-between">
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Wind Speed</h3>
              <h3>{data?.current?.wind_mph || "--"} mph</h3>
            </div>
            <div className="text-5xl">
              <GiWindSlap fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Humidity</h3>
              <h3>{data?.current?.humidity || "--"}%</h3>
            </div>
            <div className="text-5xl">
              <WiHumidity fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Wind Direction</h3>
              <h3>{data?.current?.wind_dir || "--"}</h3>
            </div>
            <div className="text-5xl">
              <GiCompass fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Sunrise</h3>
              <h3>
                {data?.forecast?.forecastday?.[0]?.astro?.sunrise || "--"}
              </h3>
            </div>
            <div className="text-5xl">
              <BsSunrise fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Sunset</h3>
              <h3>{data?.forecast?.forecastday?.[0]?.astro?.sunset || "--"}</h3>
            </div>
            <div className="text-5xl">
              <BsSunset fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Feel Like</h3>
              <h3>{data?.current?.feelslike_c || "--"}°</h3>
            </div>
            <div className="text-5xl">
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Air Pressure</h3>
              <h3>{data?.current?.pressure_mb || "--"} hPa</h3>
            </div>
            <div className="text-5xl">
              <MdAir fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 p-4 items-center justify-center gap-6 rounded-xl hover:bg-white/70 hover:translate-y-[-3px] hover:duration-[.3s] hover:cursor-pointer">
            <div className="test-2xl">
              <h3>Visibility</h3>
              <h3>{data?.current?.vis_km || "--"} km</h3>
            </div>
            <div className="text-5xl">
              <FaEye fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
