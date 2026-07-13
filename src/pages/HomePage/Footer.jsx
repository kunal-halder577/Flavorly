import React from "react";
import { Mail, Twitter, Instagram, Github } from "lucide-react";
import Newsletter from "../../components/Newsletter";
import Logo from "../../components/Logo";

export default function FlavorlyFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand + short blurb */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo width={120} height={64} />
            </div>
            <p className="text-sm text-gray-600">
              Flavorly — recipes & kitchen inspiration. Simple, seasonal, and
              delicious ideas for every day.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                aria-label="Flavorly on Twitter"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
              >
                <Twitter className="w-4 h-4" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a
                href="#"
                aria-label="Flavorly on Instagram"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
              >
                <Instagram className="w-4 h-4" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="#"
                aria-label="Flavorly on GitHub"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-700">Explore</h3>
            <a
              href="/search"
              className="text-sm text-gray-600 hover:text-orange-600"
            >
              Recipes
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-600">
              About
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-600">
              Contact
            </a>
          </nav>

          {/* Newsletter */}
          <Newsletter />
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Flavorly. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-orange-600">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
