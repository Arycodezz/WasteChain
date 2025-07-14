'use client';

import CharityCard from "@/components/charity-card";
import MainPageHeader from "@/components/mainpage-header";
import { useSearchParams } from "next/navigation";


export default function Partners() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  return (
    <div className="min-h-screen bg-gray-50">
      <MainPageHeader source={source} highlighted={1} />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-4 mt-5">Partners</h1>
        <p className="text-lg text-gray-700 mb-8">
          Organizations ready to receive and redistribute excess inventory
        </p>
      </div>
      <CharityCard/>
    </div>
  );
}
