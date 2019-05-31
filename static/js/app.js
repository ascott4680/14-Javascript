// from data.js
const tableData = data;

// YOUR CODE HERE!
//reference table body
const tbody = d3.select("tbody");
const submit = d3.select("#filter-btn");

// All data showing at default
tableData.forEach(element => {
    let row = tbody.append('tr');
    Object.entries(element).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    })
});



submit.on("click", function() {

    //preventing the refresh
    d3.event.preventDefault();

    // select input element
    let inputElement = d3.select("#datetime");
    
    //get value property of input element
    let inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    let filteredData = tableData.filter(dates => dates.datetime === inputValue);
    console.log(filteredData);
    tbody.text('')

    //show filtered data in table
    filteredData.forEach(element => {
        let row = tbody.append('tr');
        Object.entries(element).forEach(([key, value]) => {
            let cell = row.append('td');
            cell.text(value);
        })
    });

});