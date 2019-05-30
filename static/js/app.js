// from data.js
var tableData = data;

// YOUR CODE HERE!
//reference table body
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    //preventing the refresh
    d3.event.preventDefault();

    // select input element
    var inputElement = d3.select("#datetime");
    
    //get value property of input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(dates => dates.datetime === inputValue);
    console.log(filteredData);

    //show filtered data in table
    filteredData.forEach(element => {
        var row = tbody.append('tr');
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        })
    });

});