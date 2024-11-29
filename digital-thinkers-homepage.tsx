import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Menu, Search } from 'lucide-react';

const Homepage = () => {
  const categories = [
    {
      name: "Platform Economics",
      videos: [
        { title: "Network Effects in Digital Markets", duration: "5:32" },
        { title: "Multi-sided Platform Dynamics", duration: "6:15" }
      ]
    },
    {
      name: "Business Strategy",
      videos: [
        { title: "Competitive Advantage in Digital Age", duration: "7:45" },
        { title: "Strategic Innovation Frameworks", duration: "6:20" }
      ]
    },
    {
      name: "Digital Transformation",
      videos: [
        { title: "Legacy to Digital Migration", duration: "8:10" },
        { title: "Cultural Change in Digital Era", duration: "5:55" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold">Digital Thinkers' Club</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-teal-600">Home</a>
                <a href="#" className="text-gray-600 hover:text-teal-600">Videos</a>
                <a href="#" className="text-gray-600 hover:text-teal-600">About</a>
                <a href="#" className="text-gray-600 hover:text-teal-600">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-400" />
              <Menu className="md:hidden w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Video Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:items-center lg:justify-between gap-12">
            <div className="relative aspect-video w-full lg:w-2/3 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-80" />
              </div>
              <img 
                src="/api/placeholder/800/450" 
                alt="Platform Economy Video Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <span className="text-teal-600 font-medium">Featured</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Platform Economy: A Deep Dive</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Explore the fundamental concepts of the platform economy and its transformative impact on modern business strategy.
              </p>
              <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories and Videos */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-12 last:mb-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
              <button className="text-teal-600 hover:text-teal-700">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {category.videos.map((video, vidIdx) => (
                <Card key={vidIdx} className="hover:shadow-lg transition-shadow">
                  <div className="flex space-x-4 p-4">
                    <div className="relative w-40 h-24 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white opacity-80" />
                      </div>
                      <img 
                        src="/api/placeholder/160/96" 
                        alt={`${video.title} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{video.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{video.duration}</p>
                      </div>
                      <button className="text-teal-600 text-sm hover:text-teal-700 w-fit">
                        Watch Video →
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
