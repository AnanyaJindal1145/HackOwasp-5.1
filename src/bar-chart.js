const data = {
    'Subject 1': 66,
    'Subject 2': 78,
    'Subject 3': 93,
    'Subject 4': 47,
    'Subject 5': 84,
    'Subject 6': 88,

};
// Chart.defaults.global.defaultFontColor = "#1e2022";
const ctx = document.getElementById('mybarChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(data),
        datasets: [{
            label: 'Attendance Percentage',
            data: Object.values(data),
        }, ],
    },
    options: {
        plugins: {
            title: {
              display: true,
              text: 'Attendance Percentage By Subject',
              font: {
                size: 30,
                // color: 'rgba(30,32,34, 1)',
              }
            },
            datalabels: {
                color: 'white', // Set the default color for all data labels
                anchor: 'end',
                align: 'end',
                formatter: function(value, context) {
                  // Customize the appearance of individual data labels
                  var labelColor = 'white'; // Change this to your desired color
                  context.fillStyle = labelColor;
                  return value;
                },
              }
          },
        backgroundColor: [
            // 'rgba(226,234,60, 0.3)',  // Bar 1
            //'rgba(194,172,57, 0.3)',  // Bar 2
            //'rgba(16,44,139)',  // Bar 3
            //'rgba(179,138,114)',  // Bar 4
            //'rgba(77,212,123)', // Bar 5
            //'rgba(156,167,20, 0.3)',  // Bar 6
            //'rgba(166,2,136)',  // Bar 7
            //'rgba(70,123,116, 0.3)',  // Bar 8
            //'rgba(54,185,183)',  // Bar 9
            //'rgba(154,251,39, 0.3)',  // Bar 10
            //'rgba(155,12,8, 0.3)', // Bar 11
            'rgba(240,245,249, 0.9)',
            'rgba(240,245,249, 0.9)',
            'rgba(240,245,249, 0.9)',
            'rgba(240,245,249, 0.9)',
            'rgba(240,245,249, 0.9)'  // Bar 12
        ],
        indexAxis: "y",
        borderWidth: 2,
        borderColor: 'black',
        mantainAspectRatio: false,
        responsive: false
    }
});
scales: {
    x: {
      ticks: {
        color: "black"
      }
    }
    y: {
      ticks: {
        color: "black"
      }
    }
  }