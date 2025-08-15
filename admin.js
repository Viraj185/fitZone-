// ===== CONFIG =====
const GOOGLE_SHEET_JSON_URL = "https://script.google.com/macros/s/AKfycbxBCh6DPCRI6WzpUv5X62okz1GzP0zwTtwv4xNHslnBkwogOMaVPDC6AF9OEDc1oyKU/exec";

// ===== LOAD DATA INTO ADMIN TABLE =====
async function loadAdminData() {
    try {
        const response = await fetch(GOOGLE_SHEET_JSON_URL);
        const data = await response.json();

        const tableBody = document.querySelector("#adminTable tbody");
        tableBody.innerHTML = "";

        data.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.name || ""}</td>
                <td>${entry.email || ""}</td>
                <td>${entry.phone || ""}</td>
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error loading data:", error);
        alert("❌ Failed to load data. Please check your internet connection or sheet link.");
    }
}

document.addEventListener("DOMContentLoaded", loadAdminData);
