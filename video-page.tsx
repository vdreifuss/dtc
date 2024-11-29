import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, ArrowLeft, Share2, BookmarkPlus, Clock, Tag, Book, Users } from 'lucide-react';

const VideoPage = () => {
  const [activeTab, setActiveTab] = useState('transcript');
  
  // Video metadata for SEO
  const videoData = {
    title: "Platform Economy: A Deep Dive - Digital Business Strategy Guide",
    description: "Explore the fundamental concepts of the platform economy and its transformative impact on modern business strategy. Learn about network effects, platform dynamics, and value creation in digital markets.",
    duration: "PT7M",
    uploadDate: "2024-10-15",
    thumbnailUrl: "/api/placeholder/800/450",
    tags: ["platform economy", "digital strategy", "business models", "network effects", "digital transformation"],
    category: "Business Strategy",
    difficulty: "Intermediate",
    author: "Digital Thinkers' Club",
    transcript: "Welcome to Digital Thinkers' Club. Today, we're diving deep into the platform economy...",
    prerequisites: ["Digital Business Fundamentals", "Business Model Innovation"],
    learningObjectives: ["Understanding platform dynamics", "Network effects analysis", "Platform monetization strategies"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            <a href="/" className="flex items-center text-gray-600 hover:text-teal-600">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Videos
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:flex lg:gap-8">
          {/* Video Content Column */}
          <div className="lg:w-2/3">
            {/* Video Player */}
            <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-80" />
              </div>
              <img 
                src={videoData.thumbnailUrl}
                alt={videoData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Enhanced Metadata Display */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">{videoData.title}</h1>
              <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>7 minutes</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>{videoData.category}</span>
                </div>
                <div className="flex items-center">
                  <Book className="w-4 h-4 mr-1" />
                  <span>{videoData.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{videoData.author}</span>
                </div>
              </div>

              {/* Tags for SEO */}
              <div className="flex flex-wrap gap-2 mt-4">
                {videoData.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mt-6">
                <button className="inline-flex items-center px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save
                </button>
                <button className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            {/* Prerequisites and Learning Objectives */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="font-semibold mb-2">Prerequisites</h2>
              <ul className="list-disc list-inside mb-4">
                {videoData.prerequisites.map((prereq, index) => (
                  <li key={index} className="text-gray-600">{prereq}</li>
                ))}
              </ul>
              <h2 className="font-semibold mb-2">Learning Objectives</h2>
              <ul className="list-disc list-inside">
                {videoData.learningObjectives.map((objective, index) => (
                  <li key={index} className="text-gray-600">{objective}</li>
                ))}
              </ul>
            </div>

            {/* Content Tabs */}
            <div className="border-b mb-6">
              <div className="flex space-x-8">
                <button
                  className={`pb-4 px-1 ${
                    activeTab === 'transcript'
                      ? 'border-b-2 border-teal-600 text-teal-600'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setActiveTab('transcript')}
                >
                  Transcript
                </button>
                <button
                  className={`pb-4 px-1 ${
                    activeTab === 'notes'
                      ? 'border-b-2 border-teal-600 text-teal-600'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setActiveTab('notes')}
                >
                  Notes
                </button>
              </div>
            </div>

            {/* Transcript Content */}
            {activeTab === 'transcript' && (
              <div className="prose max-w-none">
                <p className="mb-4">
                  Welcome to Digital Thinkers' Club. Today, we're diving deep into the platform economy and its implications for modern business strategy.
                </p>
                <p className="mb-4">
                  The platform economy represents a fundamental shift in how businesses create and capture value. Unlike traditional linear business models, platforms facilitate interactions between multiple groups of users, creating network effects that can lead to exponential growth.
                </p>
                <p className="mb-4">
                  Let's break down the key components that make platforms successful:
                </p>
                <p className="mb-4">
                  First, we have network effects. The more users a platform has, the more valuable it becomes for all participants. This creates a powerful growth engine that can lead to market dominance.
                </p>
                <p className="mb-4">
                  Second, platforms need to solve the chicken-and-egg problem. How do you attract both sides of the market simultaneously? We'll explore various strategies that successful platforms have used to overcome this challenge.
                </p>
              </div>
            )}

            {/* Notes Content */}
            {activeTab === 'notes' && (
              <div className="prose max-w-none">
                <ul className="space-y-2">
                  <li>Key concept: Network effects drive platform growth</li>
                  <li>Challenge: Chicken-and-egg problem in platform adoption</li>
                  <li>Strategy: Focus on one side of the market first</li>
                  <li>Important metrics: User engagement and retention</li>
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
            <div className="space-y-4">
              {[1, 2].map((_, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <div className="flex space-x-4 p-4">
                    <div className="relative w-32 h-20 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white opacity-80" />
                      </div>
                      <img 
                        src="/api/placeholder/128/80" 
                        alt="Related video thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Related Video Title {idx + 1}</h3>
                      <p className="text-sm text-gray-500 mt-1">6:15</p>
                      <p className="text-sm text-gray-500">1.2k views</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
