import React from "react";
import Footer from "./footer";
import Headerr from "./Header";

export const Hardware = () => {
  return (
    <>
      <Headerr />

      <main className="flex flex-col items-center pt-12 min-h-screen py-8">
        <div className="w-full max-w-3xl px-6 text-center">
          
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight mb-2">
            CAMRON
          </h1>

          {/* Description */}
          <p className=" text-2xl font-bold mb-6">
            Extremely Efficient Remote Activated Wireless Camera With Solar Charging Capability
          </p>

           {/* PDF link */}
          <div className="mt-6 mb-6">
            <a
              href="/CAMRON.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl underline"
            >
              View full project documentation (PDF)
            </a>
          </div>

          {/* Image */}
          <img
            src="/images/camronpic.jpeg"
            alt="CAMRON Project"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
          />

         

        </div>
      </main>

      <Footer />
    </>
  );
};
