document.addEventListener("DOMContentLoaded", function () {
    // Load user's name from local storage
    let userName = localStorage.getItem("userName") || "User";
    document.getElementById("userName").textContent = userName;
    document.getElementById("userNameHeader").textContent = userName;

    // Generate Mood Tracker Calendar
    const moodCalendar = document.querySelector(".mood-calendar");
    for (let day = 1; day <= 30; day++) {
        let dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        dayElement.addEventListener("click", function () {
            let mood = prompt("How do you feel today? (Happy, Sad, Neutral)");
            if (mood) {
                dayElement.setAttribute("data-mood", mood.toLowerCase());
                updateMoodStyles(dayElement, mood);
            }
        });
        moodCalendar.appendChild(dayElement);
    }

    function updateMoodStyles(dayElement, mood) {
        dayElement.style.backgroundColor =
            mood === "happy" ? "#AEE4FF" :
            mood === "sad" ? "#FFB8D0" :
            mood === "neutral" ? "#FEE5E1" : "#fff";
    }

    // SOS Button Alert
    document.querySelector(".sos-button").addEventListener("click", function () {
        alert("Emergency contacts will be displayed here.");
    });

    // Activity Chart (Placeholder Data)
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                label: 'Activity Level',
                data: [3, 5, 2, 6, 4, 7, 3],
                backgroundColor: '#6A9CFD',
                borderRadius: 10
            }]
        },
        options: { responsive: true }
    });
});
