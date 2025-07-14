"use client";

import { getPartners } from "@/actions/partnerActions";
import { IndianRupee, MapPin, Tag } from "lucide-react";
import { useEffect, useState } from "react";

export default function StoreCard() {
  const [listOfPartners, setListOfPartners] = useState(null);
  useEffect(() => {
    async function fetchPartners() {
      try {
        const partners = await getPartners();
        setListOfPartners(partners);
        console.log("List of partners:", partners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    }
    fetchPartners();
  }, []);

 const getCategoryIcon = (category) => {
  switch (category) {
    case "Food":
      return "🍎";
    case "Electronics":
      return "📱";
    case "Clothing":
      return "👕";
    case "Household":
      return "🏠";
    case "Books":
      return "📚";
    case "Furniture":
      return "🪑";
    default:
      return "📦";
  }
};

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {listOfPartners?.success && listOfPartners.partners.length > 0 ? (
        listOfPartners.partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow mt-5"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">
                    {getCategoryIcon(partner.category)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {partner.itemName}
                    </h3>
                    <p className="text-sm text-gray-600">{partner.name}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{partner.quantity} units</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{partner.location}</span>
                </div>
                {partner.price ? (
                  <div className="flex items-center text-sm text-gray-600">
                    <IndianRupee className="h-4 w-4 mr-2" />
                    <span>{partner.price}</span>
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="italic">Free Item</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-4 mb-4">
                {partner.description}
              </p>

              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium cursor-pointer">
                Request Item
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold">No Partners Found</h3>
          <p className="text-sm text-gray-600">
            There are currently no partners available.
          </p>
        </div>
      )}
    </div>
  );
}
