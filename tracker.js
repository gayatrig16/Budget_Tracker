const ctx = document.getElementById('expenseChart').getContext('2d');
let categories = [];
let amounts = [];

const expenseChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: categories,
    datasets: [{
      label: 'Expenses',
      data: amounts,
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#8bc34a', '#f06292', '#ba68c8'],
    }]
  },
  options: {
    responsive: true
  }
});

document.getElementById('expense-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (category && amount > 0) {
    categories.push(category);
    amounts.push(amount);
    expenseChart.data.labels = categories;
    expenseChart.data.datasets[0].data = amounts;
    expenseChart.update();

    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
  }
});
