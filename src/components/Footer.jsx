import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { cn } from "../lib/utils"; // Make sure this exists or remove `cn`

export default function Footer({ className }) {
  return (
    <footer className={cn("bg-white text-black py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            Flavorly
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-[2px] after:bg-pink-500">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-[2px] after:bg-pink-500">
              Get Help
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Order Status</a></li>
              <li><a href="#" className="hover:text-white transition">Payment Options</a></li>
            </ul>
          </div>

          {/* Online Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-[2px] after:bg-pink-500">
              Online Shop
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Watch</a></li>
              <li><a href="#" className="hover:text-white transition">Bag</a></li>
              <li><a href="#" className="hover:text-white transition">Shoes</a></li>
              <li><a href="#" className="hover:text-white transition">Dress</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-[2px] after:bg-pink-500">
              Follow Us
            </h4>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
