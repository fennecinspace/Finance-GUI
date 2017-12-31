var chartCanvas1 = $('#homeMainGraph1')[0].getContext('2d');
var chartCanvas2 = $('#homeMainGraph2')[0].getContext('2d');

var secondCanvas1 = $('#homeSecondGraph1')[0].getContext('2d');
var secondCanvas2 = $('#homeSecondGraph2')[0].getContext('2d');
var secondCanvas3 = $('#homeSecondGraph3')[0].getContext('2d');

function Chart1() {
    var chart = new Chart(chartCanvas1, {
        type: 'line',
        data: {
          labels: [,,,,,,,,,,],
          datasets: [{ 
              data: [103040,240368,168764,500346,1034975,704975,930500,1423064,1423064,1423064],
              label: "North America",
              borderColor: "#17A598",
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

function Chart2() {
    var chart = new Chart(chartCanvas2, {
        type: 'line',
        data: {
          labels: [,,,,,,,,,,],
          datasets: [{ 
              data: [103040,240368,168764,500346,1034975,704975,930500,1423064,1423064,1423064],
              label: "North America",
              borderColor: "#17A598",
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

function Chart3() {
    var chart = new Chart(secondCanvas1, {
        type: 'line',
        data: {
          labels: [,,,,,,,,,,],
          datasets: [{ 
              data: [103040,240368,168764,500346,1034975,704975,930500,1423064,1423064,1423064],
              label: "North America",
              borderColor: "#17A598",
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

function Chart4() {
    var chart = new Chart(secondCanvas2, {
        type: 'line',
        data: {
          labels: [,,,,,,,,,,],
          datasets: [{ 
              data: [103040,240368,168764,500346,1034975,704975,930500,1423064,1423064,1423064],
              label: "North America",
              borderColor: "#17A598",
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

function Chart5() {
    var chart = new Chart(secondCanvas3, {
        type: 'line',
        data: {
          labels: [,,,,,,,,,,],
          datasets: [{ 
              data: [103040,240368,168764,500346,1034975,704975,930500,1423064,1423064,1423064],
              label: "North America",
              borderColor: "#17A598",
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

Chart1()
Chart2()
Chart3()
Chart4()
Chart5()