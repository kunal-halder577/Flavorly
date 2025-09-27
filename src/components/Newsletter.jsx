import { Mail } from "lucide-react"

export default function Newsletter() {
    return (
        <div className="bg-white shadow-sm rounded-xl p-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-gray-700">Join our newsletter</h3>
              <p className="text-sm text-gray-600">Get seasonal recipes and tips — once a week.</p>

              <form className="flex gap-2 mt-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@sample.com"
                  required
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <Mail className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-1">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
    )
}