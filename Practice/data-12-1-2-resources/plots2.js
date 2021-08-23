var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 var layout = {
     title: "lunch survey",
     xaxis:{title:"food option"},
     yaxis:{title:"number of Respondent"}
 };
 Plotly.newPlot("plotArea", [trace],layout);