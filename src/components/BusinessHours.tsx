
import React from 'react';

const BusinessHours = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Monday - Friday</span>
          <span className="font-medium">8:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Saturday</span>
          <span className="font-medium">9:00 AM - 4:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Sunday</span>
          <span className="font-medium">Closed</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
