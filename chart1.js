const ctx1 = document.getElementById('barchart').getContext('2d');

const salesData = [30, 50, 70, 40, 60, 80];
const temperatureData = [15, 20, 25, 30, 35, 40];

const barchart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Monthly Sales',
      data: salesData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(152, 100, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 100, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateBarChart(dataset) {
  barchart.data.datasets[0].data = dataset === 'sales' ? salesData : temperatureData;
  barchart.data.datasets[0].label = dataset === 'sales' ? 'Monthly Sales' : 'Temperature Changes';
  barchart.update();
}


