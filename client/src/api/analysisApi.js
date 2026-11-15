const API_URL = import.meta.env.VITE_API_URL;

export const analyzeMessage = async (content, contentType) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/analysis/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content,
      contentType,
    }),
  });

const text = await response.text();

let data;

try {
  data = JSON.parse(text);
} catch {
  throw new Error("Server returned an invalid response.");
}

  if (!response.ok) {
    throw new Error(data.message || "Analysis failed");
  }

  return data;
};