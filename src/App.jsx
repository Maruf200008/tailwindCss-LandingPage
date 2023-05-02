import React from "react";
import "./App.css";
import {
  Achievement,
  Categories,
  Companies,
  Courses,
  Feedback,
  Hero,
  Navbar,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
    </div>
  );
};

export default App;
