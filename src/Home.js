import React from "react";
import Carousel from "./Carousel";
import Box from "./Box";
import Aboutsection from "./Aboutsection";
import Countries from "./Countries";
import Countersection from "./Countersection";
import Whychooseus from "./Whychooseus";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Homeform from "./Homeform";
import Blogsection from "./Blogsection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
               <Helmet>
      <title>Best Study Visa Consultants Ferozepur-Ludhiana-Mohali | JVT Immigration</title>
    </Helmet>
    <main className="main-content">
      <Carousel />
      <Box />
      <Aboutsection />
      <Countries />
      <Countersection />
      <Whychooseus />
      <Gallery />
      <Testimonials />
      <Homeform />
      <Blogsection />
    </main>
    </>
  );
};

export default Home;
