// Array of all news items (most recent first)
const newsItems = [
  { title: "[Harry Flower has joined the group as a PhD student. Welcome Harry)]", date: "[October, 2025]" },
  { title: "[Aaron Scott has joined the group as a PhD student. Welcome Aaron)]", date: "[September, 2025]" },
  { title: "Catriona and Clara join for a summer internship", date: "[July 2025]" },
  { title: "Royal Society Research grant awarded - From secretion to defence", date: "Jan, 2025" },
  { title: "Fellowship awarded: Royal Society Research Fellowship", date: "January 2024" },
  { title: "Fellowship awarded: NuAcT Fellowship", date: "Sepetember 2023" },
 
  // Add as many as needed
];

// Function to render latest N items on main page
function renderRecentNews(containerId, count = 5) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const recentItems = newsItems.slice(0, count);
  container.innerHTML = recentItems.map(item => `
    <div class="list-item">
      <strong>${item.title}</strong>
      <div class="small muted">${item.date}</div>
    </div>
  `).join('');

  // Link to full archive
  container.innerHTML += `
    <div class="list-item">
      <a href="news.html">See older news &rarr;</a>
    </div>
  `;
}

// Function to render full archive on news.html
function renderNewsArchive(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = newsItems.map(item => `
    <div class="list-item">
      <strong>${item.title}</strong>
      <div class="small muted">${item.date}</div>
    </div>
  `).join('');
}
