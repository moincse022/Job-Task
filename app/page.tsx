// app/page.tsx
"use client";
import AccountSetupForm from "@/Components/AccountSetupForm/AccountSetupForm";
import AddressDetailsForm from "@/Components/AddressDetailsForm/AddressDetailsForm";
import FormSummary from "@/Components/FormSummary/FormSummary";
import PersonalInfoForm from "@/Components/PersonalInfoForm/PersonalInfoForm";
import { useState } from "react";



export type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (data: Partial<FormData>) => {
    console.log("Updating form data:", data);
    setFormData((prev) => ({ ...prev, ...data }));
  };
console.log(formData)
  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };
console.log(step)
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Multi-Step Form</h1>
        
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber}
                </div>
                <span className="text-xs mt-1">
                  {stepNumber === 1 && "Personal"}
                  {stepNumber === 2 && "Address"}
                  {stepNumber === 3 && "Account"}
                  {stepNumber === 4 && "Summary"}
                </span>
              </div>
            ))}
          </div>
          <div className="relative h-2 mt-4">
            <div className="absolute top-0 left-0 h-full bg-gray-200 w-full rounded-full"></div>
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form steps */}
        {step === 1 && (
          <PersonalInfoForm
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        )}
        {step === 2 && (
          <AddressDetailsForm
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {step === 3 && (
          <AccountSetupForm
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {step === 4 && (
          <FormSummary
            formData={formData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
            isSubmitted={isSubmitted}
          />
        )}
      </div>
    </main>
  );
}