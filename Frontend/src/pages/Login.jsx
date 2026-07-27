import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import InputField from "../components/auth/InputField";
import AuthButton from "../components/auth/AuthButton";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Next task:
    // loginUser(data)
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back"
        subtitle="Login to continue managing your expenses."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email",
              },
            })}
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
            })}
          />

          <AuthButton text="Login" loading={isSubmitting} />
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Sign Up
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
