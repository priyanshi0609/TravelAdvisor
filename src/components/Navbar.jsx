import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <Globe className="text-indigo-600" size={28} />
        <span className="text-xl font-bold text-indigo-900">TravelAdvisor</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600">How It Works</a>
        <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Pricing</a>
        <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
      </div>
      <div className="flex space-x-3">
        <button className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200">Login</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Sign Up</button>
      </div>
    </nav>
  );
}