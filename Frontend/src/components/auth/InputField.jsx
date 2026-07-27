import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = forwardRef(
  ({ label, type = "text", placeholder, name, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    return (
      <div className="space-y-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            id={name}
            name={name}
            type={inputType}
            placeholder={placeholder}
            className={`
              w-full
              rounded-xl
              border
              px-4
              py-3
              text-slate-800
              outline-none
              transition-all
              ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              }
            `}
            {...rest}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
