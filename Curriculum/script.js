document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200,  
        once: true       
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['PHP', 'Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
            datasets: [{
                label: 'Skills',
                data: [15, 20, 20, 10, 15, 20],
                backgroundColor: [
                    '#4CAF50', // PHP
                    '#FF9800', // Java
                    '#03A9F4', // MySQL
                    '#FFEB3B', // JavaScript
                    '#E91E63', // HTML
                    '#9C27B0'  // CSS
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'start',
                    
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const dataset = tooltipItem.dataset;
                            const currentValue = dataset.data[tooltipItem.dataIndex];
                            const total = dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = ((currentValue / total) * 100).toFixed(2);
                            return `${tooltipItem.label}: ${percentage}%`;
                        }
                    }
                }
            }
        }
    });
});