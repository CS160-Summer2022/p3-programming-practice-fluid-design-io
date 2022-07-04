import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { WeatherProp } from "typings";

const WEATHER_API_KEY = "fe243583d6daaee2d0b3783aa6413537";

function ViewTwo() {
  const [weather, setWeather] = useState<WeatherProp | null>(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentTime, setCurrentTime] = useState(null);
  const fetchWeather = async (city: {
    city: string;
    lat: number;
    lon: number;
  }) => {
    const { city: cityName, lat, lon } = city;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`
      );
      const data = (await response.json()) as WeatherProp;
      setWeather(data);
    } catch (error) {
      setError(error);
    }
  };
  const weatherList = [
    {
      city: "Berkeley",
      lat: 37.87159,
      lon: -122.27084,
    },
    {
      city: "London",
      lat: 51.509865,
      lon: -0.118092,
    },
    {
      city: "Long Island City",
      lat: 40.73061,
      lon: -73.935242,
    },
    {
      city: "Tokyo",
      lat: 35.689487,
      lon: 139.691711,
    },
    {
      city: "San Jose",
      lat: 37.338208,
      lon: -121.886329,
    },
  ];
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, [weather]);
  useEffect(() => {
    fetchWeather(weatherList[0]);
  }, []);
  return (
    <Layout title="Weather">
      <div className="flex flex-col items-center bg-gray-50 h-screen">
        <div className="flex justify-between gap-4 flex-wrap w-4/5 mt-8">
          {weatherList.map((city) => (
            <button
              key={city.city}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => fetchWeather(city)}
            >
              {city.city}
            </button>
          ))}
        </div>
        <div className="max-w-md rounded-2xl shadow-indigo-200/20 shadow-xl p-4 bg-white mt-12">
          <div>
            {/* Current time */}
            <div className="text-center flex justify-between items-center flex-col min-w-[9rem]">
              <h2 className="text-2xl font-bold text-indigo-900">
                {weather?.city.name}
              </h2>
              <h2 className="font-bold text-indigo-400 flex flex-col">
                <span>Current time: {currentTime}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly gap-6 items-center flex-wrap px-6 mt-12">
          {weather &&
            weather.list.map((item, i) =>
              i < 8 ? (
                <div
                  key={item.dt}
                  className="flex flex-col items-center max-w-md rounded-2xl shadow-indigo-200/20 shadow-xl p-4 bg-white"
                >
                  <div className="flex items-center justify-between gap-4 min-w-[8rem] flex-col">
                    <div className="text-center">
                      <span className="text-sm text-indigo-400">
                        {
                          // convert time to local time
                          new Date(item.dt * 1000).toLocaleTimeString()
                        }
                      </span>
                      <h1 className="text-3xl font-bold text-indigo-900 py-2">
                        {item.main.temp}&#8457;
                      </h1>
                      <h2 className="text font-semibold text-indigo-700">
                        {item.weather[0].main}
                      </h2>
                      <p className="text-sm text-indigo-400">
                        {item.weather[0].description}
                      </p>
                      <p className="text-sm text-indigo-400 flex justify-between">
                        <span>Wind:</span>
                        <span>{item.wind.speed} mph</span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : null
            )}
        </div>
        {!weather && <div className="text-center">Loading...</div>}
        {error && (
          <div>
            <p>{error.message}</p>
          </div>
        )}
      </div>
      
      <textarea
        className="h-48 w-full whitespace-pre border-none bg-transparent text-xs font-medium outline-none dark:text-gray-50"
        readOnly
        value={JSON.stringify(weather, null, "\t")}
      />
    </Layout>
  );
}
export default ViewTwo;
