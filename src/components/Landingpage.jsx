import { useState } from 'react';
import { Star, Users, CheckCircle, MapPin,Globe } from 'lucide-react';
import Navbar from './Navbar';

export default function Landingpage() {
  const [email, setEmail] = useState('');
  
  const testimonials = [
    {
      name: "Sarah T.",
      comment: "Created the perfect 2-week itinerary for Japan in seconds!",
      rating: 5
    },
    {
      name: "Michael R.",
      comment: "Saved me hours of planning for our family trip to Europe.",
      rating: 5
    },
    {
      name: "Ava P.",
      comment: "Suggested hidden gems I would have never found on my own.",
      rating: 4
    }
  ];
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
              Your AI Travel Planner for Perfect Itineraries
            </h1>
            <p className="text-lg text-gray-700">
              Create personalized travel plans in seconds. Our AI analyzes thousands of destinations to craft the perfect itinerary tailored to your preferences, budget, and travel style.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
             
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-lg">
                Create Your Itinerary
              </button>
              
              <button className="px-8 py-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium text-lg">
                How It Works
              </button>
            </div>
            
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-700">
                Trusted by 10,000+ travelers worldwide
              </span>
            </div>
          </div>
          
          {/* Right Column - Laptop Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Laptop Base */}
              <div className="bg-gray-800 rounded-b-lg h-12 mx-auto" style={{width: '85%'}}></div>
              
              {/* Laptop Screen */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl p-2">
                {/* Screen Content - Dashboard Preview */}
                <div className="bg-white rounded-md overflow-hidden">
                  <div className="bg-indigo-700 p-4 text-white flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <MapPin size={18} />
                      <span className="font-medium">Paris Exploration - 7 Days</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded bg-indigo-600 hover:bg-indigo-800">
                        <Users size={16} />
                      </button>
                      <button className="p-1 rounded bg-indigo-600 hover:bg-indigo-800">
                        <CheckCircle size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 p-3 bg-gray-50">
                    <div className="col-span-2 space-y-3">
                      <div className="bg-white p-3 shadow rounded-lg">
                        <div className="font-medium">Day 1: Arrival & Eiffel Tower</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Morning: Check-in at hotel
                          <br />
                          Afternoon: Eiffel Tower visit
                          <br />
                          Evening: Seine River dinner cruise
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 shadow rounded-lg">
                        <div className="font-medium">Day 2: Louvre & Notre Dame</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Morning: Louvre Museum
                          <br />
                          Afternoon: Notre Dame Cathedral
                          <br />
                          Evening: Latin Quarter exploration
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 shadow rounded-lg">
                      <div className="font-medium">Trip Summary</div>
                      <div className="mt-2 text-sm">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">7 Days</span>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span>Budget:</span>
                          <span className="font-medium">$$</span>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span>Activities:</span>
                          <span className="font-medium">12</span>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span>Hotels:</span>
                          <span className="font-medium">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg border border-gray-200 transform rotate-3">
              <div className="text-sm font-medium">AI Suggestion</div>
              <div className="text-xs text-gray-600 mt-1">Visit Montmartre on Day 3 morning for beautiful city views</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200 transform -rotate-3">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <CheckCircle size={14} className="text-green-600" />
                </div>
                <div className="text-sm">Weather-optimized schedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Benefits */}
      <div id='features'className="container mx-auto px-6 py-16 bg-white rounded-t-3xl shadow-inner">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600">Access to 10,000+ destinations worldwide with local insights and hidden gems.</p>
          </div>
          
          <div className="text-center p-6 bg-indigo-50 rounded-xl">
            <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
            <p className="text-gray-600">Custom itineraries based on your preferences, travel style, and budget.</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-600">Instantly adjust plans with real-time weather and event information.</p>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div id='Testimonials'className="container mx-auto px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.comment}"</p>
              <div className="font-medium">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to plan your dream vacation?</h2>
          <p className="text-lg mb-8">Join thousands of happy travelers who have discovered the perfect itinerary.</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-l-lg w-full text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="mt-3 sm:mt-0 px-6 py-3 bg-yellow-500 rounded-r-lg font-medium hover:bg-yellow-400 text-gray-900">
                Get Started
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-200">
              Free 7-day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}