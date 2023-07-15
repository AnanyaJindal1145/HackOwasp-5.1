const data = {
    'Subject 1': 66,
    'Subject 2': 78,
    'Subject 3': 93,
    'Subject 4': 47,
    'Subject 5': 84,
    'Subject 6': 88,

};
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
      scales: {
        x: {
            ticks: {
                color: 'rgb(0,0,0)',
                font: {
                  size: 18,
                },
              },
            
        },
        y: {
          ticks: {
            color: 'rgb(0,0,0)',
            font: {
              size: 18,
            },
          },
          
        }
      },
        plugins: {
            title: {
              display: true,
              text: 'Attendance Percentage By Subject',
              color: 'rgba(30,32,34, 1)',
              font: {
                size: 30,
              },
              
            },
        },
        backgroundColor: [
            'rgba(240,245,249, 0.7)',
            'rgba(240,245,249, 0.7)',
            'rgba(240,245,249, 0.7)',
            'rgba(240,245,249, 0.7)',
            'rgba(240,245,249, 0.7)',
            'rgba(240,245,249, 0.7)'
        ],
        indexAxis: "y",
        borderWidth: 2,
        borderColor: 'black',
        color:'rgba(30,32,34, 1)',
        mantainAspectRatio: false,
        responsive: false,
    }
});
