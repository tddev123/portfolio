import React, { useState } from 'react';
import WhoTubeHeader from './WhoTubeHeader';




const WhoTubeMainPage = () => {

  

  return (
    <div className="min-h-screen flex flex-col">
      <WhoTubeHeader />
      <div className="flex flex-1 ">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};


 

const Sidebar = () => (
  <aside className="bg-gray-200 w-64 p-4 shadow-md">
    <nav>
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">AI Solutions</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Case Studies</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">Categories</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Machine Learning</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Natural Language Processing</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Computer Vision</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">Robotics</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-600">AI Ethics</a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">Subscribe</h2>
      <form>
        <input 
          type="email" 
          placeholder="Your email" 
          className="w-full px-2 py-1 mb-2 rounded bg-white text-gray-700 focus:outline-none"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </nav>
  </aside>
);


const Content = () => (
  <main className="flex-1 p-6 bg-gray-50 shadow-md">
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Welcome to AI Technologies</h2>
      <p className="text-gray-700">
        At AI Technologies, we are dedicated to harnessing the power of artificial intelligence to solve complex problems and drive innovation. Our solutions range from machine learning and natural language processing to computer vision and robotics.
      </p>
      
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Our AI Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\machinelearning.jpg" alt="Machine Learning" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
          <p className="text-gray-700">
            Our machine learning solutions help businesses make data-driven decisions and automate processes, improving efficiency and productivity.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\NATURALLANGUAGE.png" alt="Natural Language Processing" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Natural Language Processing</h3>
          <p className="text-gray-700">
            We develop NLP solutions that enable computers to understand and respond to human language, enhancing communication and customer service.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\Computer_vision.webp" alt="Computer Vision" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Computer Vision</h3>
          <p className="text-gray-700">
            Our computer vision technologies allow machines to interpret and make decisions based on visual data, with applications in various industries.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\The_Future_of_Robotics.avif" alt="Robotics" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Robotics</h3>
          <p className="text-gray-700">
            We design and implement robotic solutions that perform tasks autonomously, enhancing operational efficiency and safety.
          </p>
        </div>
      </div>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\aidoctorr.webp" alt="Healthcare AI" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Improving Healthcare with AI</h3>
          <p className="text-gray-700">
            Discover how our AI solutions have transformed healthcare by enhancing diagnostic accuracy and patient care.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\ARTIFICIAL-INTELLIGENCE-FINANCE.jpg" alt="Finance AI" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Revolutionizing Finance</h3>
          <p className="text-gray-700">
            Learn how AI is reshaping the finance industry by optimizing trading strategies and detecting fraud.
          </p>
        </div>
      </div>
    </section>
    
    <section>
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\AIBusiness.jpg" alt="AI in Business" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">The Future of AI in Business</h3>
          <p className="text-gray-700">
            Explore the potential of AI to revolutionize business operations and drive growth in various industries.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <img src=".\images\AI-and-Ethics_3x2.png" alt="Ethical AI" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Ethical AI: Balancing Innovation and Responsibility</h3>
          <p className="text-gray-700">
            A deep dive into the ethical considerations of AI development and implementation.
          </p>
        </div>
      </div>
    </section>
  </main>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="mb-2">123 Main Street</p>
        <p className="mb-2">City, State, ZIP</p>
        <p className="mb-2">Email: contact@yourcompany.com</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">About Us</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Services</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Contact</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Careers</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Resources</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Blog</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">FAQs</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Support</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">AI assistance</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <img src=".\images\icons8-facebook-48.png" alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src=".\images\icons8-x-67.png" alt="X" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src=".\images\icons8-instagram-48.png" alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src=".\images\icons8-linkedin-48.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400 text-sm">
      &copy; 2024 Your Company. All rights reserved.
    </div>
  </footer>
);

export default WhoTubeMainPage