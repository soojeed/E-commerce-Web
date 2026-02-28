import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">FreshMart</h2>
            <p className="mt-3 text-sm text-gray-400">
              Fresh groceries delivered to your door. Quality you can trust,
              prices you will love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <div className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaTwitter />
              </div>
              <div className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaGithub />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FreshMart. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;