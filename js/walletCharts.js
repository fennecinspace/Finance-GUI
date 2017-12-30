var ctx = document.getElementById("walletStatsChart").getContext('2d');

var walletChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [2011,2012,2013,2014,2015,2016,2017,2018],
      datasets: [{ 
          data: [103040,240368,168764,500346,1034975,704975,930500,1423064],
          label: "North America",
          borderColor: "#17A598",
          fill: false
        }
      ]
    },
    options: {
        title: {
            display: true,
            text: 'Wallet Balance changes from 2011 till today'
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
            }
        },
        elements: {
            line: {
                tension: 0
            }
        }
    }
});

