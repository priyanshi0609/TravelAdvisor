import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-autocomplete';
import { Input } from './ui/input';
import { Button } from './ui/button'; 
import { SelectBudgetOptions, SelectTravelesList } from './Options';

export default function Createform() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGenerateTrip=()=>{
    if(formData?.days>5){
      
      return;
    }
    console.log(formData);

  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your Travel preference</h2>
      <p className="mt-3 text-gray-500">
        Just provide some basic information and our Trip Planner will generate a customized itinerary based on your preferences.
      </p>

      {/* Destination input */}
      <div className="mt-20 flex flex-col gap-9">
        <h2 className="text-xl my-3 font-medium">What is Your Destination of Choice</h2>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
          onPlaceSelected={(place) => {
            setPlace(place);
            handleInputChange('location', place.formatted_address || place.name);
          }}
          placeholder="Enter your destination"
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Trip duration */}
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">How many days are you Planning your trip?</h2>
        <Input
          placeholder="Example: 3"
          type="number"
          onChange={(e) => handleInputChange('days', e.target.value)}
        />
      </div>

      {/* Budget selection */}
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <p className="mt-3 text-gray-500">
          This budget is exclusively allocated for activities and dining purposes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow cursor-pointer"
                onClick={() => handleInputChange('budget', item.title)}
              >
                <Icon className="text-4xl text-blue-600 mb-3" />
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* Person selection */}
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">Who do you plan on travelling with on your next adventure?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow cursor-pointer"
                onClick={() => handleInputChange('companions', item.title)}
              >
                <Icon className="text-4xl text-blue-600 mb-3" />
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submit button */}
      <div className="my-10 flex justify-end">
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}
