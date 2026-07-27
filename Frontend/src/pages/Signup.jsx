import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/authApi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import InputField from "../components/auth/InputField";
import AuthButton from "../components/auth/AuthButton";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signupUser(data);

      toast.success(response.message);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <AuthLayout>
      <AuthCard
        title="Create Account"
        subtitle="Start managing your finances in one place."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            error={errors.name?.message}
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />

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
            placeholder="Create a password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          <AuthButton text="Create Account" loading={isSubmitting} />
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
