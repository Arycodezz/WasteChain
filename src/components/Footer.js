export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12" id = "contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold mb-4">WasteChain</div>
                        <p className="text-gray-400">
                            Transforming retail through blockchain innovation
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Marketplace</a></li>
                            <li><a href="#" className="hover:text-white">Analytics</a></li>
                            <li><a href="#" className="hover:text-white">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Community</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">For Retailers</a></li>
                            <li><a href="#" className="hover:text-white">For Charities</a></li>
                            <li><a href="#" className="hover:text-white">For Recyclers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 WasteChain. Building a sustainable future.</p>
                </div>
            </div>
        </footer>
    );
}