function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
});
}

init();
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}:    ${value}`);
    });

  });
}
    
    // 1. Create the buildCharts function.
    function buildCharts(sample) {
      // 2. Use d3.json to load and retrieve the samples.json file 
      d3.json("samples.json").then((data) => {
        // 3. Create a variable that holds the samples array. 
        var sampleArray=data.metadata;
    
        // 4. Create a variable that filters the samples for the object with the desired sample number.
        var filteredArray=sampleArray.filter(sampleObj => sampleObj.id == sample);
        //  5. Create a variable that holds the first sample in the array.
        var result1 = filteredArray[0];
    
        // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var ids = result1.otu_ids;
        var labels = result1.otu_labels;
        var samples = result1.sample_values;
    
        // 7. Create the yticks for the bar chart.
        // Hint: Get the the top 10 otu_ids and map them in descending order  
        //  so the otu_ids with the most bacteria are last. 
    
        var yticks = ids.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse();
        console.log(yticks);
    
        // 8. Create the trace for the bar chart. 
          var barData = [{
            x: values,
            y: yticks,
            type: "bar"
      
          }];
          // 9. Create the layout for the bar chart. 
        var barLayout = {
          title: "Top 10 Bacteria Cultures"
        }
        // 10. Use Plotly to plot the data with the layout.
        Plotly.newPlot("bar", barData, barLayout);
      });
    }
    