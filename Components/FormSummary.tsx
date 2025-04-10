
import { FormData } from "@/app/page";

type FormSummaryProps = {
  formData: FormData;
  onSubmit: () => void;
  onPrevious: () => void;
  isSubmitted: boolean;
};

export default function FormSummary({
  formData,
  onSubmit,
  onPrevious,
  isSubmitted,
}: FormSummaryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      
      {isSubmitted ? (
        <div className="bg-green-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Form Submitted Successfully</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Thank you for submitting your information.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Personal Information</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Full Name:</span> {formData.fullName}
                  </p>
                  <p className="text-sm text-gray-900 mt-1">
                    <span className="font-medium">Email:</span> {formData.email}
                  </p>
                  <p className="text-sm text-gray-900 mt-1">
                    <span className="font-medium">Phone Number:</span> {formData.phoneNumber}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Address Details</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Street Address:</span> {formData.streetAddress}
                  </p>
                  <p className="text-sm text-gray-900 mt-1">
                    <span className="font-medium">City:</span> {formData.city}
                  </p>
                  <p className="text-sm text-gray-900 mt-1">
                    <span className="font-medium">Zip Code:</span> {formData.zipCode}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Account Information</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Username:</span> {formData.username}
                  </p>
                  <p className="text-sm text-gray-900 mt-1">
                    <span className="font-medium">Password:</span> ••••••••
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onPrevious}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}