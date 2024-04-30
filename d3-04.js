// javascript

var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500; svgHeight = 300; barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var barChart = svg.selectAll('rect') // Will return an empty selection because we have no rectangles
    .data(dataset)                   // Get the dataset in wait state
    .enter()                         // Will loop into dataset items
    .append('rect')
    .attr('y', function (d) {
        return svgHeight - d;
    })
    .attr('height', function (d) {
        return d;
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function (d, i) {
        var translate = [barWidth * i, 0];
        return 'translate(' + translate + ')';
    });
