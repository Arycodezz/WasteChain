"use client";

import MainPageHeader from "@/components/mainpage-header";
import { partnerFormControls, initialPartnerFormData } from "@/utils";
import { Label } from "@/components/ui/label";
import CommonFormElement from "@/components/form-element";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createPartner } from "@/actions/partnerActions";
import { Button } from "@/components/ui/button";

export default function AddListing() {
  const { user, isLoaded } = useUser();
  const [partnerFormData, setPartnerFormData] = useState(
    initialPartnerFormData
  );

  useEffect(() => {
    try {
      if (isLoaded && user) {
        setPartnerFormData((prevData) => ({
          ...prevData,
          email: user.primaryEmailAddress?.emailAddress || "",
          phoneNumber: user.primaryPhoneNumber?.phoneNumber || "",
        }));
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [isLoaded, user]);

  const handleFormChange = (e) => {
    return setPartnerFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await createPartner(
        partnerFormData.name,
        partnerFormData.itemName,
        partnerFormData.quantity,
        partnerFormData.category,
        partnerFormData.location,
        partnerFormData.price,
        partnerFormData.description,
        partnerFormData.email,
        partnerFormData.phoneNumber
      );
      if (result?.success) {
        console.log("Partner created successfully:", result.partner);
      } else {
        console.error(
          "Failed to create partner:",
          result?.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error creating partner:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <MainPageHeader source="marketplace" highlighted={2} />
      <div className="mb-8 ml-8 mt-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Partner Information</h2>
          {/* Partner details will be displayed here */}
          {!isLoaded && (
            <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded">
              <p className="text-blue-700">Loading authentication...</p>
            </div>
          )}

          {isLoaded && !user && (
            <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
              <p className="text-yellow-700">
                ⚠️ You're not logged in. Please log in to auto-fill your email
                and phone number.
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
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6 py-8">
          {/* Form Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Add Product
            </h2>
          </div>

          {/* Form Fields Container */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerFormControls.map((controlItem, index) => (
                <div
                  key={index}
                  className={
                    controlItem.componentType === "textarea" ||
                    controlItem.name === "description" ||
                    controlItem.name === "address"
                      ? "md:col-span-2"
                      : "md:col-span-1"
                  }
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
                      value={partnerFormData[controlItem.name] || ""}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 bg-gray-50 hover:bg-white"
                    />

                    {/* Field validation indicator */}
                    {partnerFormData[controlItem.name] && (
                      <div className="absolute right-3 top-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Helper text for specific fields */}
                  {controlItem.name === "email" && (
                    <p className="text-xs text-gray-500 mt-1">
                      We'll use this for important updates and communications
                    </p>
                  )}
                  {controlItem.name === "phoneNumber" && (
                    <p className="text-xs text-gray-500 mt-1">
                      Included country code (e.g., +91 for India)
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Form Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                type="submit"
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg
                cursor-pointer"
              >
                Submit Application
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
