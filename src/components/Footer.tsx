import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="grid md:grid-cols-5 gap-8 align-center">
          
          <div>
            <h3 className="text-xl font-bold mb-4">Jingle Holiday bazar</h3>
            <p className="text-gray-400 mb-4">Travel with us from here to any where...</p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-semibold">Phone:</span> +91 8506922777 / +91 8506944777
              </p>
              <p>
                <span className="font-semibold">Email:</span> jingleholidaybazar@gmail.com
              </p>
              <p>thejingleholidaybazar@gmail.com</p>
              <p className="mt-4 text-gray-300">24/7 Dedicated Customer Support</p>
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">Blog list</Link>
              </li>
              <li>
                <Link to="/place/destinations" className="hover:text-white transition">Destinations</Link>
              </li>
              <li>
                <Link to="/place/hotels" className="hover:text-white transition">Hotels</Link>
              </li>
              <li>
                <Link to="/place/gallery" className="hover:text-white transition">Gallery</Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Domestic Packages</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white transition">Uttarakhand</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Mumbai</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Ladakh</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Meghalaya</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">North East India</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Rajasthan</Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">International Packages</h3>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li>
                <Link to="#" className="hover:text-white transition">Maldives</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Singapore</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Switzerland</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Saudi Arabia</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Thailand</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Dubai</Link>
              </li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4">Yatra</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white transition">Mata Vaishno</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Kedarnath</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Badrinath</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Char Dham Yatra</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">Ramayana Yatra</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">9 Devi Yatra</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Powered By | Namrata Universal | All Rights are Reserved by Jingleholidaybazar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

