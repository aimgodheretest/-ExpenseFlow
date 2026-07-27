import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";

export default function Login() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back"
        subtitle="Login to continue managing your expenses."
      >
        <p className="text-slate-500">Login page coming soon...</p>
      </AuthCard>
    </AuthLayout>
  );
}
