// Fetch journey data and initialize dashboard
async function initDashboard() {
    try {
        const response = await fetch('/journey.json');
        const data = await response.json();
        
        createTimeSpentChart(data);
        createTargetsChart(data);
        createCategoryDistribution(data);
        renderRecentTable(data);
        updateStatistics(data);
    } catch (error) {
        console.error('Error loading dashboard:', error);
    }
}

// Time spent line chart
function createTimeSpentChart(data) {
    const ctx = document.getElementById('timeSpentChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(entry => entry.date),
            datasets: [{
                label: 'Time Spent (minutes)',
                data: data.map(entry => entry.time_spent),
                borderColor: '#3498db',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Daily Time Investment'
                }
            }
        }
    });
}

// Targets attempted bar chart
function createTargetsChart(data) {
    const ctx = document.getElementById('targetsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(entry => entry.date),
            datasets: [{
                label: 'Targets Attempted',
                data: data.map(entry => entry.targets_attempted),
                backgroundColor: '#2ecc71'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Daily Targets'
                }
            }
        }
    });
}

// Category distribution pie chart
function createCategoryDistribution(data) {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    const categories = {};
    data.forEach(entry => {
        if (!categories[entry.category]) {
            categories[entry.category] = 0;
        }
        categories[entry.category]++;
    });

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories),
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#e74c3c',
                    '#f1c40f',
                    '#9b59b6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Category Distribution'
                }
            }
        }
    });
}

// Recent entries table
function renderRecentTable(data) {
    const tbody = document.querySelector('#recentTable tbody');
    if (!tbody) return;

    const recentEntries = data.slice(-10).reverse();
    tbody.innerHTML = recentEntries.map(entry => `
        <tr>
            <td>${entry.day_number}</td>
            <td>${entry.date}</td>
            <td>${entry.tags.join(', ')}</td>
            <td>${entry.time_spent}</td>
            <td>${entry.targets_attempted}</td>
        </tr>
    `).join('');
}

// Update statistics
function updateStatistics(data) {
    const totalTime = data.reduce((sum, entry) => sum + entry.time_spent, 0);
    const totalTargets = data.reduce((sum, entry) => sum + entry.targets_attempted, 0);
    const totalReports = data.reduce((sum, entry) => sum + entry.reports_submitted, 0);

    document.getElementById('totalTime').textContent = `${Math.round(totalTime / 60)} hours`;
    document.getElementById('totalTargets').textContent = totalTargets;
    document.getElementById('totalReports').textContent = totalReports;
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
