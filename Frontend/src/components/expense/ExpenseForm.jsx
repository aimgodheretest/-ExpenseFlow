import { useForm } from "react-hook-form";

export default function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Backend integration in next step

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 lg:grid-cols-[170px_1fr_220px_170px] items-start"
    >
      {/* Amount */}

      <div>
        <input
          type="number"
          placeholder="$ Amount"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          {...register("amount", {
            required: "Amount is required",
            min: 1,
          })}
        />

        {errors.amount && (
          <p className="mt-1 text-sm text-red-500">{errors.amount.message}</p>
        )}
      </div>

      {/* Description */}

      <div>
        <input
          type="text"
          placeholder="Expense description"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          {...register("description", {
            required: "Description is required",
          })}
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Category */}

      <div>
        <select
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          {...register("category", {
            required: "Category is required",
          })}
        >
          <option value="">Category</option>
          <option>Food</option>
          <option>Petrol</option>
          <option>Shopping</option>
          <option>Salary</option>
          <option>Bills</option>
          <option>Travel</option>
          <option>Entertainment</option>
          <option>Others</option>
        </select>

        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Button */}

      <button
        type="submit"
        className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Add Expense
      </button>
    </form>
  );
}
