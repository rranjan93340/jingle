import { Link } from 'react-router-dom';

function Header() {
    

    return (
        <header className="bg-gradient-to-b from-sky-900 to-sky-500 shadow-md sticky top-0 z-50">
            <div className="flex items-center justify-center py-3">
                <div className="flex items-center px-20">
                    <img
                        src="/logo.gif"
                        alt="Jingle Holiday Bazar"
                        className="h-20 w-20 rounded-full object-cover"
                    />
                </div>
                
                <div className="flex-1 max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-10">
                    <div className="flex items-center justify-center">

                        <nav className="hidden lg:flex items-center space-x-6 text-lg font-semibold text-white">
                            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                            <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>
                            <Link to="/place/destinations" className="hover:text-yellow-400 transition">Domestic</Link>
                            <Link to="/place/hotels" className="hover:text-yellow-400 transition">International</Link>
                            <Link to="/place/gallery" className="hover:text-yellow-400 transition">Place</Link>
                            <Link to="/packages/domestic" className="hover:text-yellow-400 transition">Packages</Link>
                            <Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link>
                            <Link to="/contact" className="hover:text-yellow-400 transition">+91-8506922777</Link>
                            <Link
                                to="/pay"
                                className="bg-yellow-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                            >
                                PAY NOW
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;