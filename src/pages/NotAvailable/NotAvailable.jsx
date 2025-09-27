import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Footer from "../../components/Footer"; // import the footer you already have
import Header from "../../components/Header";

export default function NotAvailable() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="header-container h-[7vh] sticky top-0 z-10 backdrop-blur-lg">
            <Header />
        </div>
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
            <AlertTriangle className="h-10 w-10 text-orange-500" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-gray-800">Page Not Available</h1>
          <p className="mt-3 text-gray-600 text-sm">
            Sorry, the page you’re looking for doesn’t exist or is currently under construction.
          </p>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
