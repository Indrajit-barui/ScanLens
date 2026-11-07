const API_URL = "http://localhost:5000";

export const getDashboardStats = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login first.");
  }

  const response = await fetch(`${API_URL}/dashboard/stats`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch dashboard data.");
  }

  return data;
};