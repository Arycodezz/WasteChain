"use client";

import MainPageHeader from "@/components/mainpage-header";
import { initialCharityFormData, charityFormControls } from "@/utils";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import CommonFormElement from "@/components/form-element";
import { Label } from "@/components/ui/label";
import { createCharity } from "@/actions/charityActions";

export default function CharityDetails({ source }) {
  const { user, isLoaded } = useUser();
  const [charityFormData, setCharityFormData] = useState(
    initialCharityFormData
  );

  useEffect(() => {
    console.log("=== USEEFFECT RUNNING ===");
    try {
      if (isLoaded && user) {
        console.log("User email:", user.primaryEmailAddress?.emailAddress);
        console.log("User phone:", user.primaryPhoneNumber?.phoneNumber);

        setCharityFormData((prevData) => {
          const newData = {
            ...prevData,
            email: user.primaryEmailAddress?.emailAddress || "",
            phoneNumber: user.primaryPhoneNumber?.phoneNumber || "",
            // Ensure defaults are set for select fields
          };
          console.log("Setting new form data:", newData);
          return newData;
        });
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [isLoaded, user]);

  const resetFormData = () => {
    setCharityFormData(initialCharityFormData);
    console.log("Form data reset to initial state:", initialCharityFormData);
  }

  // Add debugging to your form submission:
  async function handleSubmit(event) {
    event.preventDefault();

    // Debug: Log the exact form data being sent
    console.log("=== FORM SUBMISSION DEBUG ===");
    console.log("Complete form data:", charityFormData);
    console.log("organizationType value:", charityFormData.organizationType);
    console.log(
      "organizationType type:",
      typeof charityFormData.organizationType
    );

    // Check if organizationType is actually set
    if (!charityFormData.organizationType) {
      console.error("organizationType is missing!");
      alert("Organization Type is required");
      return;
    }

    try {
      const result = await createCharity(
        charityFormData.name,
        charityFormData.capacity,
        charityFormData.location,
        charityFormData.organizationType,
        charityFormData.accepts,
        charityFormData.email,
        charityFormData.phoneNumber
      );

      if (result?.success) {
        console.log("Charity created successfully:", result.charity);
        resetFormData(); // Reset form data on success
      } else {
        console.error("Failed to create charity:", result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  const handleFormChange = (e) => {
    console.log("=== FORM CHANGE EVENT ===");
    console.log("Raw event:", e);
    console.log("Event target:", e.target);
    console.log("Event target name:", e.target.name);
    console.log("Event target value:", e.target.value);

    const { name, value } = e.target;

    console.log("Extracted name:", name);
    console.log("Extracted value:", value);

    if (!name) {
      console.error("WARNING: No name attribute found!");
      return;
    }

    setCharityFormData((prevData) => {
      console.log("Previous data:", prevData);
      const newData = {
        ...prevData,
        [name]: value,
      };
      console.log("New data after change:", newData);
      return newData;
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {source === "marketplace" ? (
        <h1 className="text-center text-red-500">
          This page is not available in the Marketplace. Please visit the{" "}
          <a href="/partners" className="text-blue-500 underline">
            Partners
          </a>{" "}
          page to access charity details.
        </h1>
      ) : (
        <>
          {/* Header */}
          <MainPageHeader source="partner" highlighted={3} />
          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 py-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Partner Information
              </h2>
              {/* Partner details will be displayed here */}
              {!isLoaded && (
                <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded">
                  <p className="text-blue-700">Loading authentication...</p>
                </div>
              )}

              {isLoaded && !user && (
                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
                  <p className="text-yellow-700">
                    ⚠️ You're not logged in. Please log in to auto-fill your
                    email and phone number.
                  </p>
                </div>
              )}

              {isLoaded && user && (
                <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded">
                  <p className="text-green-700">
                    ✅ Logged in as:{" "}
                    {user.primaryEmailAddress?.emailAddress || "Unknown"}
                  </p>
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto px-6 py-8"
            >
              {/* Form Header */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Partner Registration
                </h2>
                <p className="text-gray-600">
                  Join our network of verified partners and charities
                </p>
              </div>

              {/* Form Fields Container */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {charityFormControls.map((controlItem, index) => (
                    <div
                      key={index}
                      className={`${
                        controlItem.componentType === "textarea" ||
                        controlItem.name === "description" ||
                        controlItem.name === "address"
                          ? "md:col-span-2"
                          : "md:col-span-1"
                      }`}
                    >
                      <Label
                        htmlFor={controlItem.name}
                        className="block text-sm font-semibold text-gray-800 mb-2"
                      >
                        {controlItem.label}
                        {controlItem.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </Label>

                      <div className="relative">
                        <CommonFormElement
                          key={index}
                          currentItem={controlItem}
                          value={charityFormData[controlItem.name] || ""}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 bg-gray-50 hover:bg-white"
                        />

                        {/* Field validation indicator */}
                        {charityFormData[controlItem.name] && (
                          <div className="absolute right-3 top-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        )}
                      </div>

                      {/* Helper text for specific fields */}
                      {controlItem.name === "email" && (
                        <p className="text-xs text-gray-500 mt-1">
                          We'll use this for important updates and
                          communications
                        </p>
                      )}
                      {controlItem.name === "phoneNumber" && (
                        <p className="text-xs text-gray-500">
                          Included country code (e.g., +91 for India)
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Form Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </div>

             
            </form>
          </main>
        </>
      )}
    </div>
  );
}
