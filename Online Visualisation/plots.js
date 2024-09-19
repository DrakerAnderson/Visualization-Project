// Create a function to get data for a specific year
function seasondata(year) {
  return seasonal_stats[year];
}

// Create an array of years
let years = [];

//Create a for loop to populate the years array
for (let i = 0; i < seasonal_stats.length; i++) {
    years.push(seasonal_stats[i].year);
}

// Create an array of yards
let yards = [];

// Create a for loop to populate the yards array
for (let i = 0; i < seasonal_stats.length; i++) {
      yards.push(seasonal_stats[i].Yards);
}

//Create a bar chart for yards

  let trace = {
    x: years,
    y: yards,
    type: 'bar'
};

let data = [trace];

let layout = {
    title: 'Yards per Season',
    barmode: 'group',
    xaxis: {
      title: 'Year',
      tickmode: 'linear'
  },
  yaxis: {
      title: 'Yards'
  },
};

// Render the plot to the div with id "bar"
Plotly.newPlot("bar", data, layout);

// Create a an array of touchdowns
  let touchdowns = [];

  for (let i = 0; i < seasonal_stats.length; i++) {
      touchdowns.push(seasonal_stats[i].Touchdowns);
  }
  
  //Create a bar chart for touchdowns
  let trace2 = {
      x: years,
      y: touchdowns,
      type: 'bar'
  };
  
  let data2 = [trace2];
  
  let layout2 = {
      title: 'Touchdowns per Season',
      barmode: 'group',
      xaxis: {
        title: 'Year',
        tickmode: 'linear'
    },
    yaxis: {
        title: 'Touchdowns'
    },
  };
  //Plot the chart
  //Plotly.newPlot("bar2", data2, layout2);
  
  // Create an array of returns
    let returns = [];
  
    for (let i = 0; i < seasonal_stats.length; i++) {
        returns.push(seasonal_stats[i].Returns);
    }
    let trace3 = {
      x: years,
      y: returns,
      type: 'bar'
  };
  
  let data3 = [trace3];
  
  let layout3 = {
      title: 'Returns per Season',
      barmode: 'group',
      xaxis: {
        title: 'Year',
        tickmode: 'linear'
    },
    yaxis: {
        title: 'Returns'
    },
  };
  //Create a bar chart for returns
  //Plotly.newPlot("bar3", data3, layout3);

//create an event listener for the dropdown menu
d3.selectAll("#selDataset").on("change", getData);

//Function for when dropdown changes
function getData() {
    // Get selected value
    let dropdownMenu = d3.select("#selDataset");

    // Get the value of the selected option
    let dataset = dropdownMenu.property("value");

    //Create empty array for new data
    let newData = [];

    // Update the plots based on the selected value
    if (dataset === 'Yards') {
        newData = data;
        Plotly.newPlot("bar", newData, layout);
    } else if (dataset === 'Touchdowns') {
        newData = data2;
        Plotly.newPlot("bar", newData, layout2);
    } else if (dataset === 'Returns') {
        newData = data3;
        Plotly.newPlot("bar", newData, layout3);
    }
}