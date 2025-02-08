import React, { useEffect, useState } from 'react';
import { CircleIcon } from 'lucide-react';
import ellipseImage from './public/Subtract (1).png';
import { Copy, Layers, MessageCircle, MousePointer, X, MessageSquare, Snowflake, MailCheck, Workflow } from 'lucide-react';
import cardImage from './public/1.png';
import Card from './component/card';
import mapImage from './public/Frame.png';
import Contact from './component/Contact';
import Footer from './component/Footer';
import {features} from './component/feature';
import Loading from './component/Loading';
interface Data {
  subtitle: string;
  title: string;
  feature_box: string;
  main_title: string;
  contact_box: string;
  contact_box_description: string;
}


const companyLogos = [
  { name: 'Smile', className: 'w-24' },
  { name: 'Urban', className: 'w-24' },
  { name: 'natural', className: 'w-24' },
  { name: 'WAVE', className: 'w-24' },
  { name: 'WING', className: 'w-24' },
  { name: 'Alba', className: 'w-24' },
];

function App() {
  const [data, setData] = useState<Data[]>([]);
  async function getData() {
    const response = await fetch('https://sheetdb.io/api/v1/hl5az7ilie4eu');
    
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, [])

  if (!data.length) {
    return <Loading />
  }
  return (
    <div className="ellipse-background min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">


      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CircleIcon className="w-8 h-8 text-white" />
            <span className="font-bold text-xl">Squid</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About us</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact us</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:opacity-90 transition-opacity">
            why choose us?
          </button>
        </nav>

        {/* Hero Section */}
        <section className="px-4 pt-20 pb-60 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {data[0].main_title}
            <br />
            {data[0].title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {data[0].subtitle}
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:opacity-90 transition-opacity">
            our clients
          </button>
        </section>
        <img src={ellipseImage} alt="Ellipse" className="w-full h-[474.4px]" />


        {/* card */}

        <div className="absolute rounded-lg top-[447px] left-[20%] m-auto w-[800px] h-[500px] rounded-md bg-[#0C0D0F]">
          <img src={cardImage} alt="Ellipse" className="w-full h-full rounded-md" />
        </div>

        <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Feature Boxes</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {data[0].feature_box}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* another section */}

        <div className="min-h-screen bg-black text-white flex items-center">
          <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Orbital Animation */}
            <div className="relative w-[400px] h-[400px] flex-shrink-0">
              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center">
                <Workflow className="w-10 h-10 text-white" />
              </div>

              {/* Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-zinc-800 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-zinc-800 animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-zinc-800 animate-[spin_10s_linear_infinite]" />

              {/* Orbital Items */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-6">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <MailCheck className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="absolute bottom-1/4 left-0">
                <div className="bg-blue-600 p-3 rounded-full">
                  <span className="font-bold text-xl">W</span>
                </div>
              </div>

              {/* Purple Dots */}
              <div className="absolute top-1/4 right-12 w-3 h-3 bg-purple-500 rounded-full" />
              <div className="absolute bottom-1/4 left-12 w-3 h-3 bg-purple-500 rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-500 rounded-full" />
            </div>

            {/* Content */}
            <div className="lg:max-w-xl">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
               {data[0].contact_box}
              </h1>
              <p className="text-gray-400 text-lg mb-8">
               {data[0].contact_box_description}
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Download
              </button>
            </div>
          </div>
        </div>

        <section className="px-4 py-10 max-w-5xl mx-auto h-[400px]">
          <div className="bg-[#111111] rounded-2xl p-2 md:p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <CircleIcon className="w-10 h-10 mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <div className="w-24 h-24 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600"></div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <div className="space-y-3">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Preview */}
        <div className='relative border border-zinc-800'>

          <div className="h-[400px] pb-16 bg-[#111111] text-white">
            {/* Companies Section */}
            <section className="container mx-auto px-4 py-16 text-center">
              <h2 className="text-3xl font-bold mb-12">
                Companies we Worked<br />With in Since 2015
              </h2>
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                {companyLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="bg-black italic px-8 py-4 rounded-lg opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-xl font-semibold">{logo.name}</span>
                  </div>
                ))}
              </div>
            </section>


          </div>

          {/* Trial Section */}
          <section className="absolute top-[300px] left-[10%] container mx-auto px-4 mb-16 w-[1110px] h-[425px]">
            <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative z-10">
                  <p className="text-sm font-medium mb-2">Love Our Tool?</p>
                  <h3 className="text-2xl font-bold mb-4">
                    Feel Free to Join our<br />15 Days Free Trial
                  </h3>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                    Download Complete
                  </button>
                </div>
                <div className="relative h-48 md:h-full min-h-[200px]">
                  <div className="absolute inset-0">
                    <img src={mapImage} alt="Map" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </div>

    </div>

  );
}

export default App;