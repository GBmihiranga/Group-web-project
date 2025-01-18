// Example Chart.js code
const ctx = document.getElementById('trafficChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Direct', 'Referral', 'Social', 'Other'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
