import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-autocomplete';
import { Input } from './ui/input';

export default function Createform() {
  const [place, setPlace] = useState(null);

  return (
    <div className="sm:px-10 md:px-32 lg-px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your Travel preference</h2>
      <p className="mt-3 text-gray-500">
        Just provide some basic information and our Trip Planner will generate a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-9">
        <h2 className="text-xl my-3 font-medium">What is Your Destination of Choice</h2>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
          onPlaceSelected={(place) => {
            setPlace(place);
            //console.log("Selected place:", place);
          }}
          placeholder="Enter your destination"
          className="p-2 border rounded w-full"
        />
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">How many days are you Planning your trip ?</h2>
        <Input placeholder={'Example:3'} type =" number" ></Input>
      </div>
    </div>
  );
}

