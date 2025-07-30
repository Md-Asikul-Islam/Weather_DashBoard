import React from "react";
import Header from "./Header/Header";
import WeatherBoard from "./Weather/WeatherBoard";

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};

export default App;
