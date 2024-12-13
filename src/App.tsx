// Import necessary hooks and components
import { useState } from "react";
import { Alert, Input } from "antd"; // Ant Design components
import { isValidSIN } from "./utils/verifySin"; // Utility function to validate SIN
import { OTPProps } from "antd/es/input/OTP"; // Type definitions for OTP Input

function App() {
  // State variables to store the SIN input and its validation status
  const [sin, setSin] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // Handler function for SIN input
  const handleSinInput: OTPProps["onInput"] = (value: String[]) => {
    const sinValue = value.join(""); // Combine array of digits into a single string
    const response = isValidSIN(sinValue); // Validate SIN using the utility function
    setSin(sinValue); // Update the SIN state
    setIsValid(response); // Update the validation status state
  };

  return (
    // Creating a section with a gradient background and positioning items in the center
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-extrabold mb-4 text-center">
          SIN Validation
        </h1>

        <p className="mb-5 text-center">
          Enter your 9-digit SIN number below to validate
        </p>

        {/* OTP Input field for entering SIN */}
        <div className="flex justify-center">
          <Input.OTP length={9} size="large" onInput={handleSinInput} />
        </div>
      </div>
    </section>
  );
}

export default App;
