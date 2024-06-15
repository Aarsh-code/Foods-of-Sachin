// Sample scores data
const scores = [
    { teamA: 'Team A', scoreA: 120, teamB: 'Team B', scoreB: 100 },
    { teamA: 'Team C', scoreA: 150, teamB: 'Team D', scoreB: 130 },
    // Add more scores as needed
];

// Sample matches data
const matches = [
    { teamA: 'Team A', teamB: 'Team C', date: 'May 22, 2024' },
    { teamA: 'Team B', teamB: 'Team D', date: 'May 23, 2024' },
    // Add more matches as needed
];

// Function to display scores
function displayScores() {
    const latestScores = document.getElementById('latest-scores');
    let html = '';
    scores.forEach(score => {
        html += `<p>${score.teamA} - ${score.scoreA} vs ${score.teamB} - ${score.scoreB}</p>`;
    });
    latestScores.innerHTML = html;
}

// Function to display matches
function displayMatches() {
    const upcomingMatches = document.getElementById('upcoming-matches');
    let html = '';
    matches.forEach(match => {
        html += `<p>${match.teamA} vs ${match.teamB} - ${match.date}</p>`;
    });
    upcomingMatches.innerHTML = html;
}

// Call the functions to display scores and matches
displayScores();
displayMatches();