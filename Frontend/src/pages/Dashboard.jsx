import { LogOut, ReceiptText } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import ExpenseForm from "../components/expense/ExpenseForm";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-bold text-emerald-600">ExpenseFlow</h1>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-8 py-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <ReceiptText className="text-emerald-600" size={24} />

            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Add Expense
              </h2>

              <p className="text-sm text-slate-500">
                Record your daily spending.
              </p>
            </div>
          </div>

          <ExpenseForm />
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Expense History
            </h2>
          </div>

          <div className="flex h-72 items-center justify-center">
            <p className="text-slate-500">No expenses added yet.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
