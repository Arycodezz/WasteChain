"use client";

import { getCharities } from "@/actions/charityActions";
import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function CharityCard() {
  const [listOfCharities, setListOfCharities] = useState(null);
  useEffect(() => {
    async function fetchCharities() {
      try {
        const charities = await getCharities();
        setListOfCharities(charities);
        console.log("List of charities:", charities);
      } catch (error) {
        console.error("Error fetching charities:", error);
      }
    }
    fetchCharities();
  }, []);

  function upperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ml-5">
      {listOfCharities?.success && listOfCharities.charities.length > 0 ? (
        listOfCharities.charities.map((charity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{charity.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium">
                    {charity.organizationType}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {upperCaseFirstLetter(charity.capacity)} Capacity
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{charity.location}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Accepts:</p>
                  <div className="flex flex-wrap gap-1">
                    {charity.accepts.split(",").map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4 cursor-pointer"
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white rounded-lg shadow-xl p-6">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                      Charity Details
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Information about the charity.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 mt-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Name:</span> {charity.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span>{" "}
                      {charity.email}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Phone:</span>{" "}
                      {charity.phoneNumber}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <DialogClose asChild>
                      <Button
                        variant="secondary"
                        className="bg-blue-600 text-white hover:bg-blue-700 transition rounded-md"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))
      ) : (
        <p>No charities to show</p>
      )}
    </div>
  );
}
