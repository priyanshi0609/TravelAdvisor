import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GooglePlacesAutocomplete from 'react-google-autocomplete';
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Map, Plane, DollarSign, Users, CalendarDays, Sparkles } from 'lucide-react';
import { SelectBudgetOptions, SelectTravelesList } from './Options';
import { generateItinerary } from '../service/AImodel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";
import { FcGoogle } from "react-icons/fc";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function CreateForm() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedCompanions, setSelectedCompanions] = useState(null);
  const [itinerary, setItinerary] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const selectBudget = (budget) => {
    setSelectedBudget(budget);
    handleInputChange('budget', budget);
  };

  const selectCompanions = (companions) => {
    setSelectedCompanions(companions);
    handleInputChange('companions', companions);
  };

  // Firebase Google login configuration
  const provider = new GoogleAuthProvider();
  
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      console.log("Login successful:", user);
      
      // Save user data to localStorage
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Close the dialog
      setOpenDialog(false);
      alert("Login successful! You can now generate your trip.");
      
    } catch (error) {
      console.log("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const onGenerateTrip = async () => {
    const user = localStorage.getItem('user');
    console.log("user from localStorage:", user);

    // Check if user exists and is valid
    if (!user || user === "null" || user === "undefined" || user === "") {
      setOpenDialog(true);
      console.warn("Blocked trip generation: no user found in localStorage.");
      return; // Stop here - don't generate itinerary
    }

    // Form validations
    if (!formData.location) {
      alert("Please enter a destination");
      return;
    }

    if (!formData.days || formData.days < 1 || formData.days > 10) {
      alert("Please enter a valid number of days (1–10)");
      return;
    }

    if (!formData.budget) {
      alert("Please select a budget");
      return;
    }

    if (!formData.companions) {
      alert("Please select your travel companions");
      return;
    }

    // Only reach here if user is logged in and form is valid
    setIsSubmitting(true);

    try {
      const result = await generateItinerary(
        formData.location,
        formData.days,
        formData.companions,
        formData.budget
      );

      setItinerary(result);
      console.log("Generated Itinerary:", result);
      alert("Trip itinerary generated successfully! Check console for details.");
    } catch (error) {
      console.error("Itinerary generation failed:", error);
      alert("Failed to generate itinerary. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 my-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Plane className="text-indigo-600 mr-2" size={28} />
            <h1 className="font-bold text-4xl text-indigo-600">Travel Planner</h1>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Let our AI create your perfect travel itinerary based on your preferences.
          </p>
        </motion.div>

        {/* Destination Input */}
        <motion.div variants={itemVariants} className="bg-indigo-50 p-6 rounded-lg mb-10 border-l-4 border-indigo-600">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-indigo-800">
            <Map className="mr-2" />
            Destination
          </h2>
          <div className="relative">
            <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 z-10" size={18} />
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
              onPlaceSelected={(place) => {
                setPlace(place);
                handleInputChange('location', place.formatted_address || place.name);
              }}
              options={{ types: ['(cities)'], componentRestrictions: { country: [] } }}
              defaultValue={formData?.location || ''}
              placeholder="Enter your destination"
              style={{
                width: '100%',
                padding: '1rem',
                paddingLeft: '2.5rem',
                fontSize: '1.125rem',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}
              className="focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg"
            />
          </div>
        </motion.div>

        {/* Trip Duration */}
        <motion.div variants={itemVariants} className="bg-indigo-50 p-6 rounded-lg mb-10 border-l-4 border-indigo-600">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-indigo-800">
            <CalendarDays className="mr-2" />
            Trip Duration
          </h2>
          <div className="relative">
            <Input
              placeholder="Number of days (1–10)"
              type="number"
              min="1"
              max="10"
              className="p-4 pl-10 text-lg bg-white border-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg transition-all duration-300"
              onChange={(e) => handleInputChange('days', e.target.value)}
            />
            <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
          </div>
        </motion.div>

        {/* Budget Selection */}
        <motion.div variants={itemVariants} className="bg-indigo-50 p-6 rounded-lg mb-10 border-l-4 border-indigo-600">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-indigo-800">
            <DollarSign className="mr-2" />
            Budget
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SelectBudgetOptions.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedBudget === item.title;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 bg-white rounded-xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                  onClick={() => selectBudget(item.title)}
                >
                  <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${isSelected ? 'bg-indigo-600' : 'bg-indigo-100'}`}>
                    <Icon className={isSelected ? 'text-white' : 'text-indigo-600'} size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Companions Selection */}
        <motion.div variants={itemVariants} className="bg-indigo-50 p-6 rounded-lg mb-10 border-l-4 border-indigo-600">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-indigo-800">
            <Users className="mr-2" />
            Travel Companions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SelectTravelesList.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedCompanions === item.title;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 bg-white rounded-xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                  onClick={() => selectCompanions(item.title)}
                >
                  <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${isSelected ? 'bg-indigo-600' : 'bg-indigo-100'}`}>
                    <Icon className={isSelected ? 'text-white' : 'text-indigo-600'} size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants} className="flex justify-center mt-10">
          <Button
            onClick={onGenerateTrip}
            disabled={isSubmitting}
            className="py-6 px-10 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-xl transition-all duration-300 transform flex items-center justify-center min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                Creating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2" size={20} />
                Generate Trip
              </>
            )}
          </Button>
        </motion.div>

        {/* Dialog shown when no user */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto border border-gray-200">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800">Login Required</DialogTitle>
              <DialogDescription className="text-gray-600 mt-2">
                Please sign in with Google to use the AI travel planner and generate a personalized itinerary.
              </DialogDescription>
            </DialogHeader>

            <Button
              onClick={login}
              className="w-full mt-6 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-200">
              <FcGoogle className='h-6 w-6' />
              Sign In with Google
            </Button>
          </DialogContent>
        </Dialog>

        {itinerary && (
          <motion.div className="mt-10 text-sm text-green-600 text-center">
            ✅ Trip generated! (You can render itinerary details here or navigate.)
          </motion.div>
        )}
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="text-center text-gray-400 mt-8 text-sm"
      >
        Our AI analyzes thousands of destinations to craft the perfect itinerary
        tailored to your preferences, budget, and travel style.
      </motion.div>
    </>
  );
}