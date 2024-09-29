$(function () {
	var chart;
	$(document).ready(function() {
		document.title = "AW";
		$('#container').append('<div id="year1"</div>')
		$('#year1').highcharts({
			chart: {
				polar: true,
				height: 500,
			},
			title: {
				text: 'Tourist Arrivals'
			},
			subtitle: {
				text: '2023(January to April)<br>'+'The polar chart displays the total amount country specific tourists visited Sri Lanka.'
			},
			xAxis: {
				categories: ['January', 'February', 'March', 'April'],
				max: 4,
			},

			pane: {
        		startAngle: 210,
        		endAngle: 360
    		},

			yAxis: {
				min: 0,
				max: 30000
			},
			
			plotOptions: {
		        column: {
		            pointPadding: 0,
		            groupPadding: 0
		        },
				series: {
					lineWidth: 2
				}
			},

			colors: ['#5F9EA0','#F0D58C', '#00008B','#E5829D'],

			series: [{
			  type: 'column',
			  name: 'United Kingdom',
			  data: [8483, 8575, 11053, 8743]
			}, {
			  type: 'column',
			  name: 'Russia',
			  data: [25254, 29084, 25553, 14656]
			}, {
			  type: 'column',
			  name: 'Germany',
			  data: [8217, 7930, 9702, 7404]
			},{
			  type: 'column',
			  name: 'India',
			  data: [13759, 13714, 18959, 19915]

			}]
		});
		
		$('#container').append('<div id="year2"</div>')
		$('#year2').highcharts({
			chart: {
				polar: true,
				height: 500,
			},
			title: {
				text: 'Tourist Arrivals'
			},
			subtitle: {
				text: '2022'
			},
			xAxis: {
				categories: ['January', 'February', 'March', 'April', 'May', 'June',
							 'July', 'August', 'September', 'October', 'November', 'December'],
			},

			pane: {
        		startAngle: 0,
        		endAngle: 360
    		},

			yAxis: {
				min: 0,
				max: 30000
			},
			plotOptions: {
		        column: {
		            pointPadding: 0,
		            groupPadding: 0
		        },
				series: {
					lineWidth: 2
				}
			},

			colors: ['#5F9EA0','#F0D58C', '#00008B','#E5829D'],

			series: [{
			  type: 'column',
			  name: 'United Kingdom',
			  data: [7442, 10642, 12908, 11539, 3723, 3368, 9257, 6776, 2872, 4275, 4506, 7879]
			}, {
			  type: 'column',
			  name: 'Russia',
			  data: [13478, 15340, 8899, 3874, 3202, 1610, 1918, 1426, 1553, 6189, 13820, 19963]
			}, {
			  type: 'column',
			  name: 'Germany',
			  data: [5339, 7780, 9561, 6088, 2208, 2466, 3666, 3251, 2149, 2881, 5169, 4984]
			}, {
			  type: 'column',
			  name: 'India',
			  data: [11751, 12744, 23216, 8678, 5562, 6810, 6031, 5340, 6493, 8862, 10167, 17350]
			}]
		});

		$('#container').append('<div id="year3"</div>')
		$('#year3').highcharts({
			chart: {
				polar: true,
				height: 500,
			},
			title: {
				text: 'Tourist Arrivals 2019 (Pre-Covid)'
			},
			subtitle: {
				text: '2019'
			},
			xAxis: {
				categories: ['January', 'February', 'March', 'April', 'May', 'June',
							 'July', 'August', 'September', 'October', 'November', 'December'],
			},

			pane: {
        		startAngle: 0,
        		endAngle: 360
    		},

			yAxis: {
				min: 0,
				max: 55000
			},
			plotOptions: {
		        column: {
		            pointPadding: 0,
		            groupPadding: 0
		        },
				series: {
					lineWidth: 2
				}
			},

			colors: ['#5F9EA0','#F0D58C', '#00008B','#E5829D'],

			series: [{
			  type: 'column',
			  name: 'United Kingdom',
			  data: [26036, 29750, 29682, 24718, 2953, 4365, 13010, 14132, 8345, 8763, 16038, 20984]
			}, {
			  type: 'column',
			  name: 'Russia',
			  data: [13474, 13008, 12705, 3680, 844, 711, 1300, 1332, 1638, 5761, 14537, 17559]
			}, {
			  type: 'column',
			  name: 'Germany',
			  data: [14027, 17268, 18134, 16930, 1767, 3312, 8385, 7667, 6396, 7820, 20844, 12349]
			}, {
			  type: 'column',
			  name: 'India',
			  data: [40049, 32286, 34812, 23431, 11246, 15048, 18309, 37568, 28917, 33217, 31677, 48442]
			}]
		});

		$('#container').append('<div id="year4"</div>')
		$('#year4').highcharts({
			title: {
				text: 'Tourist Arrivals to Sri Lanka, 2018-2022',
				align: 'center'
			},

			subtitle: {
				text: 'Source: <a href="https://sltda.gov.lk/en/statistics" target="_blank">SLTDA</a>',
				align: 'center'
			},

			yAxis: {
				title: {
					text: 'Number of tourists'
				}
			},

			xAxis: {
				accessibility: {
					rangeDescription: 'Range: 2018 to 2022'
				}
			},

			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
			},

			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 2018,
					pointEnd:2022
				}
			},

			series: [{
				name: 'United Kingdom',
				data: [254176,198776,55455,16646,85187]
			}, {
				name: 'Russia',
				data: [64497, 86549, 49397,16894,91272]
			}, {
				name: 'Germany',
				data: [156888, 134899, 34507,12442,55542]
			}, {
				name: 'India',
				data: [424887, 355002, 89357, 56268,123004]
			}
			],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom'
						}
					}
				}]
			}
			
			
		});
		$('#container').append('<div id="year5"</div>')
		$('#year5').highcharts({
			chart: {
        type: 'column'
    },
    title: {
        text: 'Total number of tourist arrivals to Sri Lanka. (2012-2022)'
    },
    subtitle: {
        text: 'Shows the total number of tourists who visited the island from all over the world.'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of tourists'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Total Yealry Tourists: <b>{point.y:.1f} million</b>'
    },
    series: [{
        name: 'Tourists',
        colors: [
            '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
            '#6225ed', '#5b30e7', '#533be1', '#4c46db'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['2012', 1.0],
            ['2013', 1.3],
            ['2014', 1.6],
            ['2015', 1.8],
            ['2016', 2.1],
            ['2017', 2.2],
            ['2018', 2.4],
            ['2019', 2.0],
            ['2020', 0.5],
            ['2021', 0.2],
            ['2022', 0.7]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
			

			
			
		});
				
		});
		
	});

//});


