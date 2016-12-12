var timestamp = (new Date()).getTime() / 1000;
  var barChartData = [
    {
      values: [{
        time: timestamp,
        y: Math.random()*1000
      }]
    }
  ];

var barChart = $('#barChart').epoch({
  type: 'time.bar',
  data: barChartData,
  axes: ['bottom', 'left'],
  margins: { top: 50, right: 40, bottom: 60, left: 50 },
  tickFormats: {
  }
});

var gaugeChart = $('#gaugeChart').epoch({
  type: 'time.gauge',
  value: 0.5,
  domain: [0, 1000],
  format: function(v) { return (v).toFixed(0); }
});


function updateChart() {
  var timestamp = (new Date()).getTime() / 1000;
  barChart.push([{ time: timestamp, y: Math.random()*1000 }]);
  gaugeChart.push(Math.random()*1000);
  window.requestAnimationFrame(updateChart);
}

window.requestAnimationFrame(updateChart);

d3.select('.y.axis')
  .append('text')
  .attr('fill', '#d0d0d0')
  .attr('transform', 'rotate(-90)')
  .attr('y', 6)
  .attr('dy', '0.71em')
  .style('text-anchor', 'end')
  .text('');

d3.select('#gaugeChart')
  .append('h4')
  .text('24小時內總數');


addTitle(d3.select('#lineChart svg'),
         '即時次數', $('#lineChart').width());

function addTitle(svg, title, width) {
  svg.append('text')
    .attr('x', (width / 2))
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .style('font-size', '16px')
    .style('fill', '#eee')
    .text(title);
}

setTimeout(function() {
  var g = d3.select('#gaugeChart g');
  var transX = g.attr('transform').replace('translate(', '').split(',')[0];
  g.attr('transform', 'translate('+transX+',180)');
}, 300)
