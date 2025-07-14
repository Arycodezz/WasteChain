import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, ShoppingCart, Recycle, ArrowRight } from "lucide-react";

export default function Choice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-600 p-4 rounded-full shadow-lg">
              <Recycle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to WasteChain
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your path to sustainable retail waste redistribution
          </p>
        </div>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Partner Network Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Partner Network
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Become a verified partner to buy surplus goods at
                  discounted rates
                </p>
                
                <Link href="/marketplace?source=partner" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors group cursor-pointer">
                    Join Partner Network
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Marketplace Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-6">
                  <ShoppingCart className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Marketplace
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sell surplus goods directly with other businesses at
                  competitive market prices
                </p>
                <Link href="/marketplace?source=marketplace" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors group cursor-pointer">
                    Enter Marketplace
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 font-medium bg-white px-4 py-2 rounded-full border">
            OR
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-600 max-w-lg mx-auto">
          <p className="text-sm">
            Not sure which option is right for you? Both paths lead to
            sustainable waste reduction and community impact.
          </p>
        </div>
      </div>
    </div>
  );
}
