'use client'

import React, { useState } from 'react';
import { Package, Users, Recycle, Plus, MapPin, Clock, Tag } from 'lucide-react';

const WasteChain = () => {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [listings, setListings] = useState([
    {
      id: 1,
      retailer: "FreshMart Groceries",
      item: "Organic Apples",
      quantity: "50 lbs",
      expiryDate: "2025-07-02",
      location: "Downtown Store",
      category: "Food",
      urgency: "high",
      description: "Fresh organic apples approaching expiry date"
    },
    {
      id: 2,
      retailer: "TechWorld Electronics",
      item: "Bluetooth Headphones",
      quantity: "25 units",
      expiryDate: "N/A",
      location: "Mall Location",
      category: "Electronics",
      urgency: "low",
      description: "Previous season models, fully functional"
    },
    {
      id: 3,
      retailer: "StyleHub Fashion",
      item: "Winter Jackets",
      quantity: "40 pieces",
      expiryDate: "N/A",
      location: "Main Street",
      category: "Clothing",
      urgency: "medium",
      description: "End of season inventory clearance"
    }
  ]);

  const [receivers] = useState([
    {
      id: 1,
      name: "City Food Bank",
      type: "Charity",
      accepts: ["Food", "Household"],
      location: "Central District",
      capacity: "High"
    },
    {
      id: 2,
      name: "Second Chance Thrift",
      type: "Second-hand Store",
      accepts: ["Clothing", "Electronics", "Household"],
      location: "West Side",
      capacity: "Medium"
    },
    {
      id: 3,
      name: "Green Recycling Co.",
      type: "Recycler",
      accepts: ["Electronics", "Plastics", "Paper"],
      location: "Industrial Zone",
      capacity: "High"
    }
  ]);

  const [newListing, setNewListing] = useState({
    retailer: '',
    item: '',
    quantity: '',
    category: 'Food',
    location: '',
    description: ''
  });

  const handleAddListing = () => {
    if (newListing.retailer && newListing.item && newListing.quantity) {
      const listing = {
        id: listings.length + 1,
        ...newListing,
        expiryDate: newListing.category === 'Food' ? '2025-07-05' : 'N/A',
        urgency: 'medium'
      };
      setListings([listing, ...listings]);
      setNewListing({
        retailer: '',
        item: '',
        quantity: '',
        category: 'Food',
        location: '',
        description: ''
      });
      setActiveTab('marketplace');
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Food': return '🍎';
      case 'Electronics': return '📱';
      case 'Clothing': return '👕';
      case 'Household': return '🏠';
      default: return '📦';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">WasteChain</h1>
                <p className="text-sm text-gray-600">Retail Waste Redistribution Network</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'marketplace'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                <Package className="inline h-4 w-4 mr-2" />
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab('receivers')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'receivers'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                <Users className="inline h-4 w-4 mr-2" />
                Partners
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'add'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                <Plus className="inline h-4 w-4 mr-2" />
                Add Listing
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Marketplace Tab */}
        {activeTab === 'marketplace' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Inventory</h2>
              <p className="text-gray-600">Connect excess inventory with organizations that can use them</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getCategoryIcon(listing.category)}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900">{listing.item}</h3>
                          <p className="text-sm text-gray-600">{listing.retailer}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(listing.urgency)}`}>
                        {listing.urgency} priority
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Tag className="h-4 w-4 mr-2" />
                        <span>{listing.quantity}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{listing.location}</span>
                      </div>
                      {listing.expiryDate !== 'N/A' && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Expires: {listing.expiryDate}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-gray-700 mt-4 mb-4">{listing.description}</p>

                    <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                      Request Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === 'receivers' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Partner Network</h2>
              <p className="text-gray-600">Organizations ready to receive and redistribute excess inventory</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {receivers.map((receiver) => (
                <div key={receiver.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{receiver.name}</h3>
                        <p className="text-sm text-emerald-600 font-medium">{receiver.type}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {receiver.capacity} Capacity
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{receiver.location}</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Accepts:</p>
                        <div className="flex flex-wrap gap-1">
                          {receiver.accepts.map((category, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Listing Tab */}
        {activeTab === 'add' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Add New Listing</h2>
              <p className="text-gray-600">List your excess inventory for redistribution</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="grid gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Retailer/Business Name
                    </div>
                    <input
                      type="text"
                      value={newListing.retailer}
                      onChange={(e) => setNewListing({...newListing, retailer: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">
                        Item Name
                      </div>
                      <input
                        type="text"
                        value={newListing.item}
                        onChange={(e) => setNewListing({...newListing, item: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="e.g., Organic Bananas"
                      />
                    </div>

                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </div>
                      <input
                        type="text"
                        value={newListing.quantity}
                        onChange={(e) => setNewListing({...newListing, quantity: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="e.g., 30 lbs, 15 units"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </div>
                      <select
                        value={newListing.category}
                        onChange={(e) => setNewListing({...newListing, category: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="Food">Food</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Household">Household</option>
                      </select>
                    </div>

                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </div>
                      <input
                        type="text"
                        value={newListing.location}
                        onChange={(e) => setNewListing({...newListing, location: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Store location"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </div>
                    <textarea
                      value={newListing.description}
                      onChange={(e) => setNewListing({...newListing, description: e.target.value})}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Additional details about the items..."
                    />
                  </div>

                  <button
                    onClick={handleAddListing}
                    className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    Create Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WasteChain;