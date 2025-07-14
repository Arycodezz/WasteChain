import { Recycle, Package } from "lucide-react";
import Link from "next/link";

export default function MainPageHeader({ source, highlighted = 0 }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Recycle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">WasteChain</h1>
            <p className="text-sm text-gray-600">
              Retail Waste Redistribution Network
            </p>
          </div>
        </div>
        <nav className="flex space-x-4">
          <Link
            href={`/marketplace?source=${source}`}
           className={`px-4 py-2 rounded-lg flex items-center ${
              highlighted === 0 ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-emerald-600"
            }`}
          >
            <Package className="h-4 w-4 mr-1" />
            Marketplace
          </Link>
          <Link
            href={`/partners?source=${source}`}
            className={`px-4 py-2 rounded-lg flex items-center ${
              highlighted === 1 ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-emerald-600"
            }`}
          >
            Partners
          </Link>
          {source === "marketplace" ? (
            <Link
              href={`/add-listing?source=${source}`}
              className={`px-4 py-2 rounded-lg flex items-center ${
                highlighted === 2 ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              + Add Listing
            </Link>
          ) : (
            <Link
              href={`/charity-details?source=${source}`}
              className={`px-4 py-2 rounded-lg flex items-center ${
                highlighted === 3 ? "bg-emerald-600 text-white" : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Add your Details
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
