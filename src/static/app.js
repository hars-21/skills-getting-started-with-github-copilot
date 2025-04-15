* {ument.addEventListener("DOMContentLoaded", () => {
  box-sizing: border-box;document.getElementById("activities-list");
  margin: 0;vitySelect = document.getElementById("activity");
  padding: 0;pForm = document.getElementById("signup-form");
  font-family: Arial, sans-serif;ElementById("message");
}
  // Function to fetch activities from API
body {c function fetchActivities() {
  font-family: Arial, sans-serif;
  line-height: 1.6;e = await fetch("/activities");
  color: #333;tivities = await response.json();
  max-width: 1200px;
  margin: 0 auto;ading message
  padding: 20px;List.innerHTML = "";
  background-color: #f5f5f5;
}     // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
header {const activityCard = document.createElement("div");
  text-align: center;className = "activity-card";
  padding: 20px 0;
  margin-bottom: 30px;t = details.max_participants - details.participants.length;
  background-color: #1a237e;
  color: white;te participants list
  border-radius: 5px;pantsList = details.participants.length
}         ? `<ul>${details.participants.map(participant => `<li>${participant}</li>`).join("")}</ul>`
          : "<p>No participants yet.</p>";
header h1 {
  margin-bottom: 10px;nnerHTML = `
}         <h4>${name}</h4>
          <p>${details.description}</p>
main {    <p><strong>Schedule:</strong> ${details.schedule}</p>
  display: flex;rong>Availability:</strong> ${spotsLeft} spots left</p>
  flex-wrap: wrap;ss="participants-section">
  gap: 30px;<p><strong>Participants:</strong></p>
  justify-content: center;List}
}         </div>
        `;
@media (min-width: 768px) {
  main {activitiesList.appendChild(activityCard);
    grid-template-columns: 2fr 1fr;
  }     // Add option to select dropdown
}       const option = document.createElement("option");
        option.value = name;
section {ption.textContent = name;
  background-color: white;endChild(option);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); to load activities. Please try again later.</p>";
  width: 100%;error("Error fetching activities:", error);
  max-width: 500px;
} }

section h3 {form submission
  margin-bottom: 20px;istener("submit", async (event) => {
  padding-bottom: 10px;t();
  border-bottom: 1px solid #ddd;
  color: #1a237e; document.getElementById("email").value;
}   const activity = document.getElementById("activity").value;

.activity-card {
  margin-bottom: 15px; await fetch(
  padding: 15px;ties/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
  border: 1px solid #ddd;
  border-radius: 5px;ST",
  background-color: #f9f9f9;
}     );

.activity-card h4 {= await response.json();
  margin-bottom: 10px;
  color: #0066cc;e.ok) {
}       messageDiv.textContent = result.message;
        messageDiv.className = "success";
.activity-card p {.reset();
  margin-bottom: 8px;
}       messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
.form-group {
  margin-bottom: 15px;
}     messageDiv.classList.remove("hidden");

.form-group label {ge after 5 seconds
  display: block;() => {
  margin-bottom: 5px;assList.add("hidden");
  font-weight: bold;
}   } catch (error) {
      messageDiv.textContent = "Failed to sign up. Please try again.";
.form-group input,lassName = "error";
.form-group select {ssList.remove("hidden");
  width: 100%;error("Error signing up:", error);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;p
} fetchActivities();
});
button {  background-color: #1a237e;  color: white;  border: none;  padding: 10px 15px;  font-size: 16px;  border-radius: 5px;  cursor: pointer;  transition: background-color 0.2s;}button:hover {  background-color: #3949ab;}.message {  margin-top: 20px;  padding: 10px;  border-radius: 4px;}.success {  background-color: #e8f5e9;  color: #2e7d32;  border: 1px solid #a5d6a7;}.error {  background-color: #ffebee;  color: #c62828;  border: 1px solid #ef9a9a;}.info {  background-color: #d1ecf1;  color: #0c5460;  border: 1px solid #bee5eb;}.hidden {  display: none;}footer {  text-align: center;  margin-top: 30px;  padding: 20px;  color: #666;}
.participants-section {
  margin-top: 10px;
  padding: 10px;
  background-color: #f1f8e9;
  border: 1px solid #c5e1a5;
  border-radius: 5px;
}

.participants-section ul {
  margin: 10px 0 0 20px;
  padding: 0;
  list-style-type: disc;
}

.participants-section p {
  margin: 0 0 10px;
  font-weight: bold;
  color: #558b2f;
}
