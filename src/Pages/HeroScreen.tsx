import { useState } from "react";
import CardScreen from "../Pages/CardScreen";
import HeroPage from "../Pages/HeroPage";
import Layer from "../Pages/Layer";

const HomeScreen = () => {
  return (
    <div>
      <HeroPage />
      <Layer />
      <CardScreen />
    </div>
  );
};

export default HomeScreen;
