"use client";
import React from 'react'
import Hero from "./components/Hero";
import HeroCards from './components/Home/HeroCards';
import HeroText from './components/Home/HeroText';
import HeroAbout from './components/Home/HeroAbout';
import TravelAgencyHomePage from './components/Home/TravelAgencyHomePage';
import SectionCards from './components/Home/SectionCards';
import LiveChatButton from './components/Home/LiveChatButton';
import Documentations from './components/Home/Docomentations';
import HomeContact from './components/Home/HomeContact';
// import RecruitmentProcess from './components/Home/RecruitmentProcess';

export default function Home() {
  return (
    <div >
      <Hero />
      <HeroCards />
      <HeroText />
      <Documentations />
      {/* <HeroAbout /> */}
      <TravelAgencyHomePage />
      <SectionCards />
      <HomeContact />
      <LiveChatButton />
    </div>
  );
}
