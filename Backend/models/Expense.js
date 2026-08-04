import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [1, "Amount should be greater than 0"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 200,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Food",
        "Petrol",
        "Salary",
        "Shopping",
        "Bills",
        "Travel",
        "Entertainment",
        "Others",
      ],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
