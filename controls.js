document.getElementById('datasetSelector').addEventListener('change', function() {
    const selectedDataset = this.value;
    updateBarChart(selectedDataset);
    updateDoughnutChart(selectedDataset);
  });
  