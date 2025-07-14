"use client";

import MainPageHeader from "@/components/mainpage-header";
import StoreCard from "@/components/store-card";
import { useSearchParams } from "next/navigation";


export default function Marketplace() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <MainPageHeader source={source} />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Available Inventory
          </h2>
          <p className="text-gray-600">
            Connect excess inventory with organizations that can use them
          </p>
          <StoreCard/>
        </div>
      </main>
    </div>
  );
}
