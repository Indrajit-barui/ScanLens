
const API_URL = "http://localhost:5000";
export const deleteAnalysis = async (id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/analysis/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete analysis.");
  }

  return data;
};