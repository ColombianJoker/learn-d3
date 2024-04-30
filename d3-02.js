// javascript

var dataset = [1, 2, 3, 4, 5];
d3.select('body')
    .selectAll('p')
    .data(dataset)    // Leave data open but waiting for processing
    .enter()          // Process each data element one-by-one
    .append('p')      // Append a new paragraph for each element
// .text('D3 is awesome!!!');
    .text(function (d) { return 'Item'.concat(' ', String(d)); });