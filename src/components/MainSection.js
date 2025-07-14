import Link from "next/link";


export default function MainSection() {
    return (
        <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Transform Retail Waste into
                            <span className="text-blue-600"> Community Value</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8">
                            Connect retailers with charities, recyclers, and second-hand markets
                            through blockchain transparency. Reduce waste, create impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/choice">
                                <button
                                    type="button"
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white font-semibold cursor-pointer"
                                >
                                    Explore MarketPlace
                                </button>
                            </Link>
                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white font-semibold cursor-pointer">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="flex justify-center">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-lg p-6 mb-4 text-4xl">
                                🏪
                            </div>
                            <div className="w-1 h-8 bg-blue-600 mx-auto mb-4"></div>
                            <div className="bg-purple-600 text-white rounded-lg p-6 mb-4 text-4xl">
                                🔗
                            </div>
                            <div className="w-1 h-8 bg-blue-600 mx-auto mb-4"></div>
                            <div className="bg-green-600 text-white rounded-lg p-6 text-4xl">
                                💚
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}