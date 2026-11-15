const API_URL = import.meta.env.VITE_API_URL;

export const analyzeMessage = async (content, contentType) => {
const token = localStorage.getItem("token");

const response = await fetch("${API_URL}/analysis/analyze", {
method: "POST",
headers: {
"Content-Type": "application/json",
Authorization: "Bearer ${token}",
},
body: JSON.stringify({
content,
contentType,
}),
});

const data = await response.json();

if (!response.ok) {
throw new Error(data.message || "Analysis failed");
}

return data;
};