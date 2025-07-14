import Link from "next/link";


export default function Navigation() {

    return (
        <>
            <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </nav>
            <Link href = {'/choice'}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                Get Started
            </button></Link>

                <div className="md:hidden py-4 border-t">
                    <a href="#features" className="block py-2 text-gray-600">Features</a>
                    <a href="#how-it-works" className="block py-2 text-gray-600">How It Works</a>
                    <a href="#contact" className="block py-2 text-gray-600">Contact</a>
                </div>
        </>
    );
}