import { Wallet } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-12">
          <h1 className="text-5xl font-bold mb-4">ExpenseFlow</h1>

          <p className="text-lg text-emerald-100 leading-relaxed">
            Track your expenses, analyze your spending habits, and manage your
            finances with ease.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
              <Wallet size={110} strokeWidth={1.6} className="text-white" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
