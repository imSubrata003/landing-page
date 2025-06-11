'use client'

import React, { useEffect, useState } from "react";
import { ArrowRight, AtSign, MessageCircle, Phone } from "lucide-react";

// Button component
export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded-2xl px-4 py-2 font-medium transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card component
export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

// CardContent component
export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

// Landing Page
const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  //how to get the height of the screen after scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
    // console.log(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className={`sticky top-0 z-50 bg-opacity-90 shadow-md ${scrollPosition > 730 ? "bg-gray-950" : ""}`}>
        <nav className={`flex justify-between items-center p-6 max-w-7xl mx-auto `}>
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-3xl font-bold text-yellow-400 cursor-pointer hover:text-yellow-300"
          >
            FF MOON
          </h1>
          <ul className="flex gap-6 text-yellow-400 font-medium">
            <li><a href="#features" className="hover:text-yellow-300">Features</a></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" className="flex flex-col items-center mt-40 text-center px-4 py-20 space-y-10">
        <h2 className="text-5xl font-extrabold max-w-3xl leading-tight">
          Bet Smarter, Win Bigger
        </h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Join the next generation of betting with real-time insights, seamless experience, and top-tier security.
        </p>
        <div className="flex gap-x-12">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex items-center gap-2 cursor-pointer">
            Download the app <ArrowRight size={20} />
          </Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex items-center gap-2 cursor-pointer">
            <a className="flex items-center gap-x-1.5" href="#contact">
              Contact us <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </main>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto py-20 h-screen flex-col items-center justify-center">
        <Card className="bg-gray-800 text-white h-80 text-xl flex items-center justify-center text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Live Betting</h3>
            <p className="text-gray-400">
              Place bets in real-time and experience the thrill of live sports.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white h-80 text-xl flex items-center justify-center text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-400">
              Enjoy fast, secure deposits and withdrawals with multiple payment options.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white h-80 text-xl flex items-center justify-center text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
            <p className="text-gray-400">
              Get data-driven tips and predictions from betting professionals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="about" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">About FF MOON</h2>
        <p className="text-gray-300 max-w-2xl text-xl">
          FF MOON is a revolutionary betting platform designed for enthusiasts who demand performance, speed, and cutting-edge analytics. We believe betting should be transparent, responsible, and thrilling.
        </p>
      </section>

      <section id="contact" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h2>
        <p className="text-gray-300 max-w-xl mb-6 text-xl text-center">
          Have questions or need support? Reach out to us anytime, and our dedicated team will assist you.
        </p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex gap-x-2">
          <AtSign /> ffm4968@gmail.com
        </Button>
        <div className="flex gap-x-12 mt-6">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3">
            <Phone />
          </Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3">
          <MessageCircle />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 text-center py-6">
        &copy; {new Date().getFullYear()} FF MOON. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
