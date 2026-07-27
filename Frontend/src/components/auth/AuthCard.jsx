export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full rounded-2xl bg-white shadow-lg border border-slate-200 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">{title}</h2>

        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="space-y-5">{children}</div>
    </div>
  );
}
