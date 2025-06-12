'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, AtSign, MessageCircle, Phone } from 'lucide-react';

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
  return <div className={`rounded-2xl shadow-md ${className}`}>{children}</div>;
};

// CardContent component
export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

// Landing Page
const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const phone = '916290074508';
  const message = "Hi! I'm reaching out from your website.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header
        className={`sticky top-0 z-50 bg-opacity-90 shadow-md ${scrollPosition > 270 ? 'bg-gray-950' : ''}`}
      >
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-yellow-400 cursor-pointer hover:text-yellow-300 sm:text-4xl"
          >
            MOON FF
          </h1>
          <ul className="flex gap-4 sm:gap-6 text-yellow-400 font-medium text-sm sm:text-base">
            <li>
              <a href="#features" className="hover:text-yellow-300">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-40 text-center px-4 py-20 space-y-10">
        <h2 className="text-5xl font-extrabold max-w-3xl leading-tight">
          Bet Smarter, Win Bigger
        </h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Join the next generation of betting with real-time insights, seamless experience, and top-tier security.
        </p>
        <div className="flex gap-x-12 sm:flex-row flex-col sm:gap-y-0 gap-y-8 w-full max-w-xl">
          <a href="/files/app.apk" download className="w-full">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex items-center justify-center gap-2 cursor-pointer w-full">
              Download the app <ArrowRight size={20} />
            </Button>
          </a>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex items-center gap-2 cursor-pointer w-full">
            <a className="flex items-center justify-center gap-x-1.5 w-full" href="#contact">
              Contact us <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </main>

      <section
        id="features"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto py-20"
      >
        {["Live Betting", "Secure Payments", "Expert Insights"].map((title, idx) => (
          <Card
            key={idx}
            className="bg-gray-800 text-white text-xl flex items-center justify-center text-center min-h-[250px]"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">
                {title === "Live Betting"
                  ? "Place bets in real-time and experience the thrill of live sports."
                  : title === "Secure Payments"
                  ? "Enjoy fast, secure deposits and withdrawals with multiple payment options."
                  : "Get data-driven tips and predictions from betting professionals."}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">About FF MOON</h2>
        <p className="text-gray-300 max-w-2xl text-xl">
          FF MOON is a revolutionary betting platform designed for enthusiasts who demand performance, speed, and cutting-edge analytics. We believe betting should be transparent, responsible, and thrilling.
        </p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h2>
        <p className="text-gray-300 max-w-xl mb-6 text-xl text-center">
          Have questions or need support? Reach out to us anytime, and our dedicated team will assist you.
        </p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex gap-x-2 mb-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ffm4968@gmail.com"
            className="flex items-center gap-x-1.5"
          >
            <AtSign /> ffm4968@gmail.com
          </a>
        </Button>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => window.open('tel:+91-6290074508')}
            className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex justify-center"
          >
            <Phone />
          </Button>

          <Button
            onClick={() =>
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`)
            }
            className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-3 flex justify-center"
          >
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
