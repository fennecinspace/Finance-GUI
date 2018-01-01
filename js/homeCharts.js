/*** RANDOMIZER ***/
var MinMax = [20000,50000]
var MinMaxStock = [-10,+10]

function Randomize(min,max){
    return Math.random() * (max - min) + min
}

/*** MAIN CHARTS ***/

var chartCanvas1 = $('#homeMainGraph1')[0].getContext('2d');
var chartCanvas2 = $('#homeMainGraph2')[0].getContext('2d');

function Chart1(USPINDEX,KINDEX,BCINDEX) {
    
    var chart = new Chart(chartCanvas1, {
        type: 'line',
        data: {
          labels: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'],
          datasets: [{ 
              data: USPINDEX,
              label: "USP INDEX",
              borderColor: "#17A598",
              backgroundColor: "rgba(23,165,152,0.5)",
              fill: false
            },
            { 
                data: KINDEX,
                label: "K INDEX",
                borderColor: "#23419c",
                backgroundColor: "rgba(35,65,156,0.5)",
                fill: false
            },
            { 
                data: BCINDEX,
                label: "BC INDEX",
                borderColor: "#a131d5",
                backgroundColor: "rgba(161,49,213,0.5)",
                fill: false
            }
          ]
        },
        options: {
            title: {
                display: true,
                text: "CURRENCY PARICE CHANGES",
                fontColor: 'rgb(255, 0, 0, 0.9)'
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 0, 0)'
                }
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
                    tension: 0.4
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function(label, index, labels) {
                                return label+'%';
                            }
                        }
                    }
                ]
            },
            responsive : true,
            maintainAspectRatio: false
        }
    });
}

function Chart2(USPINDEX,KINDEX,BCINDEX) {
    var chart = new Chart(chartCanvas2, {
        type: 'bar',
        data: {
            labels: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'],
            datasets: [ { 
                            data: USPINDEX,
                            label: "USP INDEX",
                            backgroundColor: "rgba(23,165,152,0.9)",
                            fill: false
                        },
                        { 
                            data: KINDEX,
                            label: "K INDEX",
                            backgroundColor: "rgba(35,65,156,0.9)",
                            fill: false
                        },
                        { 
                            data: BCINDEX,
                            label: "BC INDEX",
                            backgroundColor: "rgba(161,49,213,0.9)",
                            fill: false
                        }
            ]
        },
        options: {
            title: {
                display: false
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
            },
            responsive : true,
            maintainAspectRatio: false
        }
    });
}

/*** LOWER CHARTS ***/
var secondCanvas1 = $('#homeSecondGraph1')[0].getContext('2d');
var secondCanvas2 = $('#homeSecondGraph2')[0].getContext('2d');
var secondCanvas3 = $('#homeSecondGraph3')[0].getContext('2d');

/*** GRADIENTS ***/
var gradient1 = secondCanvas3.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0.5, 'rgba(0, 255, 149, 0.5)');   
gradient1.addColorStop(1, 'rgba(0, 153, 46, 0.5)');

var gradient2 = secondCanvas3.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0.5, 'rgba(51, 48, 207,0.5)');   
gradient2.addColorStop(1, 'rgba(51, 48, 207, 0.5)');

var gradient3 = secondCanvas3.createLinearGradient(0, 0, 0, 400);
gradient3.addColorStop(0.5, 'rgba(219, 79, 177, 0.5)');   
gradient3.addColorStop(1, 'rgba(212, 43, 43, 0.5)');

function Chart3() {
    var chart = new Chart(secondCanvas1, {
        type: 'doughnut',
        data: {
            labels: ['USD','EURO','GBP','BITCOIN'],
            datasets: [{
                        data: [1423064,1423064,343233,1423064],
                        backgroundColor: ['rgba(232, 23, 3, 0.8)','rgba(40, 152, 207, 0.8)','rgba(25, 58, 188, 0.8)','rgba(255, 248, 13, 0.8)'],
                        hoverBackgroundColor: ['rgba(232, 23, 3, 1)','rgba(40, 152, 207, 1)','rgba(25, 58, 188, 1)','rgba(255, 248, 13, 1)']
            }],
        },
        options: {
            title: {
                display: true,
                text: 'CURRENCIES IN MAIN WALLET',
                fontColor: 'rgb(255, 0, 0, 0.9)'
            },
            legend: {
                display: false
            },
            responsive : true,
            maintainAspectRatio: false
        }
    });
}

function Chart4() {
    var chart = new Chart(secondCanvas2, {
        type: 'bar',
        data: {
          labels: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
          datasets: [{ 
              data: [Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000,Randomize(...MinMax)*1000],
              label: "CURRENCY",
              borderColor: "#17A598",
              fill: false,
              backgroundColor: 'rgba(255,0,0,0.5)'
            }
          ]
        },
        options: {
            title: {
                display: true,
                text: 'MARKET CAP',
                fontColor: 'rgb(255, 0, 0, 0.9)'
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
            },scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        callback: function(label, index, labels) {
                            return label/1000000+'M';
                        },
                    }
                }]
            },
            responsive : true,
            maintainAspectRatio: false
        }
    });
}

function Chart5() {
    var chart = new Chart(secondCanvas3, {
        type: 'line',
        data: {
          labels: [,,,,,,,,,,],
          datasets: [{ 
                data: [Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax)],
                label: "USP INDEX",
                borderColor: gradient3,
                fill: true,
                backgroundColor: gradient3
            },
            { 
                data: [Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax)],
                label: "USP INDEX",
                borderColor: gradient1,
                fill: true,
                backgroundColor: gradient1
            },
            { 
                data: [Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax),Randomize(...MinMax)],
                label: "USP INDEX",
                borderColor: gradient2,
                fill: true,
                backgroundColor: gradient2
            }
        ] 
      
        },
        options: {
            title: {
                display: true,
                text: 'YOUR ACCOUNTS BALANCES',
                fontColor: 'rgb(255, 0, 0, 0.9)'
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
            },scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        callback: function(label, index, labels) {
                            return label/1000+'K';
                        },
                        suggestedMin: 0,
                        suggestedMax: 60000,    // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true   // minimum value will be 0.
                    }
                }]
            },
            responsive : true,
            maintainAspectRatio: false
        }
    });
}

function runCharts(){
    var USPINDEX = [Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock)]
    var KINDEX = [Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock)]
    var BCINDEX = [Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock),Randomize(...MinMaxStock)]
    Chart1(USPINDEX,KINDEX,BCINDEX); 
    Chart2(USPINDEX,KINDEX,BCINDEX); 
    Chart3();
    Chart4(); 
    Chart5(); // chart fucntion calling
}

/*** CALLINGS ***/
runCharts();
