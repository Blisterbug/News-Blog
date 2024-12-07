import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-32 px-6 w-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-blue-600">Buzzed</span>, your trusted source for the latest and most reliable news from around the globe. Our mission is to deliver up-to-the-minute news coverage that helps you stay informed and make sense of the ever-changing world.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With a team of experienced journalists and editors, we strive to maintain the highest standards of accuracy, objectivity, and engagement. Our stories cover everything from current events and politics to technology and entertainment.
        </p>
        <p className="text-lg text-gray-600">
          At Buzzed, we believe that informed citizens are the backbone of a strong community, and we aim to contribute to a better-informed society.
        </p>
        <div className="mt-6">
          <p className="font-semibold text-gray-800">Connect with us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/Rubanraj02" className="text-blue-600 hover:underline" target='_blank'>Github</a>
            <a href="https://x.com/ruban_devil" className="text-blue-600 hover:underline" target='_blank'>Twitter</a>
            <a href="https://www.instagram.com/blisterbug1/" className="text-blue-600 hover:underline" target='_blank'>Instagram</a>
            <a href="https://www.linkedin.com/in/rubanraj02/" className="text-blue-600 hover:underline" target='_blank'>LinkedIn</a>
          </div>
        </div>
        <div className="mt-6 border-t pt-2">
          <p className="text-lg text-gray-600">
            We extend our gratitude to <a href="https://newsapi.org/docs" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NewsAPI</a> for providing the essential API support that powers this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
