"use client";
import React, { useState } from "react";

import Input from "./component/Input";
import Current from "./component/Current";
import WeekForecast from "./component/WeekForecast";
import WeatherDetails from "./component/WeatherDetails";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=8bb336fe21aa44c4804165605243110&q=${location}&days=7&aqi=yes&alerts=yes`;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setData(data);
      setLocation("");
      setError("");
    } catch (error) {
      setError("City not found");
      setData({});
    }
  };

  const handelSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchWeatherData();
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=8bb336fe21aa44c4804165605243110&q=${latitude},${longitude}&days=7&aqi=yes&alerts=yes`
            );
            if (!response.ok) throw new Error();
            const data = await response.json();
            setData(data);
            setLocation(data.location.name);
            setError("");
          } catch {
            setError("Location not found");
          }
        },
        () =>
          setError(
            "Unable to retrieve location, Please reset location permission to grant access again."
          )
      );
    } else {
      setError("Geolocation not supported by your browser");
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather app</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City Not Found</p>
        <p className="text-xl">Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div>
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        <h1 className=" my-8 text-white rounded-xl italic text-3xl font-bold text-center">
          Weather App.
        </h1>
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-around items-center p-12">
          <Input
            handleSearch={handelSearch}
            setLocation={setLocation}
            onSearchClick={fetchWeatherData}
            onCurrentLocationClick={handleCurrentLocation}
          />
          {Object.keys(data).length > 0 && <Current data={data} />}
        </div>
        {content}
      </div>
    </div>
  );
}
