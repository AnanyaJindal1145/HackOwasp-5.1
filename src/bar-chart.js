const data = {
    'Subject 1': 66,
    'Subject 2': 78,
    'Subject 3': 93,
    'Subject 4': 47,
    'Subject 5': 84,
    'Subject 6': 88,
    // '2016': 1.3,
    // '2017': 2.1,
    // '2018': 2.4,
    // '2019': 1.8,
    // '2020': 1.2,
    // '2021': 4.7

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
        plugins: {
            title: {
              display: true,
              text: 'Attendance Percentage By Subject',
              font: {
                size: 16
              }
            },
          },
        backgroundColor: [
            // 'rgba(226,234,60, 0.3)',  // Bar 1
            'rgba(194,172,57, 0.3)',  // Bar 2
            'rgba(16,44,139, 0.3)',  // Bar 3
            'rgba(179,138,114, 0.3)',  // Bar 4
            'rgba(77,212,123, 0.3)', // Bar 5
            //'rgba(156,167,20, 0.3)',  // Bar 6
            'rgba(166,2,136, 0.3)',  // Bar 7
            //'rgba(70,123,116, 0.3)',  // Bar 8
            'rgba(54,185,183, 0.3)',  // Bar 9
            //'rgba(154,251,39, 0.3)',  // Bar 10
            //'rgba(155,12,8, 0.3)', // Bar 11
            //'rgba(171,212,68, 0.3)'   // Bar 12
        ],
        indexAxis: "y",
        borderWidth: 2,
        borderColor: 'black',
        mantainAspectRatio: false,
        responsive: false
    }
});