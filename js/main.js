// Reveal on scroll animation
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Chart.js defaults
Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
Chart.defaults.color = '#8A97A8';
Chart.defaults.font.size = 11.5;

// Customer base chart
new Chart(document.getElementById('customerChart'), {
  type: 'bar',
  data: {
    labels: ['2002','2003','2013','2018','2023','2026'],
    datasets: [
      { label: 'Domestic', data: [5552,8185,34535,58513,76894,96858], backgroundColor: '#0E6FBD', borderRadius: 4, stack: 's' },
      { label: 'Non-Domestic', data: [272,353,1889,4201,5431,6416], backgroundColor: '#0FA98A', borderRadius: 4, stack: 's' },
      { label: 'Public Points', data: [21,63,182,342,342,303], backgroundColor: '#D69E2E', borderRadius: 4, stack: 's' }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'circle' } } },
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { stacked: true, grid: { color: 'rgba(7,20,39,0.06)' }, ticks: { callback: v => v/1000 + 'k' } }
    }
  }
});

// Service coverage chart
new Chart(document.getElementById('coverageChart'), {
  type: 'line',
  data: {
    labels: ['2002','2003','2013','2018','2023','2026'],
    datasets: [{
      label: 'Coverage %',
      data: [40,100,56,90,62,94],
      borderColor: '#0FA98A',
      backgroundColor: 'rgba(15,169,138,0.12)',
      fill: true, tension: 0.35, pointRadius: 4, pointBackgroundColor: '#0A4C82', borderWidth: 2.5
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(7,20,39,0.06)' }, min: 0, max: 100, ticks: { callback: v => v + '%' } }
    }
  }
});

// Revenue vs expenditure chart
new Chart(document.getElementById('financeChart'), {
  type: 'bar',
  data: {
    labels: ["2012/13","2017/18","2018/19","2019/20","2020/21","2021/22","2022/23","2023/24","2024/25","2025/26"],
    datasets: [
      { type: 'bar', label: 'Revenue', data: [44.45,112.86,115.51,117.86,133.39,191.21,258.04,475.67,624.70,1140.00], backgroundColor: '#0E6FBD', borderRadius: 4 },
      { type: 'bar', label: 'Expenditure', data: [41.97,80.50,85.64,98.21,95.38,184.08,249.96,447.50,458.56,824.01], backgroundColor: 'rgba(7,20,39,0.12)', borderRadius: 4 },
      { type: 'line', label: 'Operating Balance', data: [2.48,32.36,29.87,19.65,38.01,7.13,8.08,28.17,166.14,315.99], borderColor: '#D69E2E', backgroundColor: '#D69E2E', tension: 0.3, pointRadius: 3, borderWidth: 2.5, yAxisID: 'y' }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'circle' } } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(7,20,39,0.06)' }, ticks: { callback: v => v + 'M' } }
    }
  }
});
