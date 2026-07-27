import { LoaderCircle } from "lucide-react";

export default function AuthButton({
  text,
  type = "submit",
  loading = false,
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-emerald-600
        px-4
        py-3
        font-semibold
        text-white
        transition-all
        duration-200
        hover:bg-emerald-700
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading && <LoaderCircle size={20} className="animate-spin" />}

      {loading ? "Please wait..." : text}
    </button>
  );
}
