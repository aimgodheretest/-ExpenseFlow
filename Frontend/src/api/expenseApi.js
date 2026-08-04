import api from "./axios";

export const addExpense = async (expenseData) => {
  const response = await api.post("/expenses", expenseData);

  return response.data;
};

export const getExpenses = async () => {
  const response = await api.get("/expenses");

  return response.data;
};
