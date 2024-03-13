import React from 'react'
import Signup from '../components/Signup';

function SignupPage() {
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center">
          <div className="md:w-[85%] lg:w-[75%] mx-auto md:flex p-4 items-center">
    
            <div className="flex justify-center">
              <div className="text-center md:text-left md:pr-20">
                <h1 className="text-3xl md:text-6xl font-bold text-blue-500 my-2 md:my-4">Picpulse</h1>
                <p className="text-md md:text-xl">
                  Picpulse helps you connect and share with the people in your life.
                </p>
              </div>
    
            </div>
            <div className="flex justify-center mt-8 md:mt-0 p-5">
              <Signup/>
            </div>
    
          </div>
        </div>
      );
}

export default SignupPage