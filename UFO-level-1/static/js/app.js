// from data.js
var tableData = data;

// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data 
// for each UFO sighting.

var tbody = d3.select("tbody");

 tableData.forEach(function(UFOSighting) {
  var row = tbody.append("tr");
   Object.entries(UFOSighting).forEach(function([key, value]) {
   var cell = row.append("td");
    cell.text(value);
  });
});

// Use a date form in your HTML document and write JavaScript code that will listen 
// for events and search through the date/time column to find rows that match user input.

// renderTable(tableData)
// var EnterDate = {}

var button = d3.select("#filter-btn");
button.on("click", function() {
  // EnterDate = {};

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData); 

});



// remove all table data 
// then try to do a new function with filtered options

