const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// used to change the sample id to change the results
// let sample = [940];

function overall_change(sample){
    d3.json(url).then((data) => {
   

     let samples = data.samples;
   
      let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      let result = resultArray[0];

      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;
    

     let top10sample_value = sample_values.slice(0,10);
     let top10otu_id = otu_ids.slice(0,10);

        top10sample_value.reverse();
        top10otu_id.reverse();


      let edited_id = top10otu_id.map(x => "OTU " + x);

        


      let trace1 = [{
        x: top10sample_value,
        y: edited_id,
        orientation: 'h',
        text: otu_labels,
        type: "bar"
      }];

      let layout1 = {
        autorange : true,
        title: "Top 10 OTU"
     };

    Plotly.newPlot("bar", trace1, layout1);
    

     let trace2 = [{
        x: otu_ids,
        y: sample_values    ,
        text: otu_labels,
        mode:"markers",
        marker: {
            size: sample_values,
            color: otu_ids
        }}];

     let layout2 = {
        autorange: true,
        xaxis: {title: "OTU ID"},
        yaxis: {title: "Sample value"}
     };

    Plotly.newPlot("bubble",trace2, layout2);

     let meta_key = data.metadata;
     let filtered_meta_data = meta_key.filter(sample_m => sample_m.id == sample);
     let meta_result = filtered_meta_data[0];

     let value_meta = Object.entries(meta_result);
      let meta_table = d3.select("#sample-metadata");
 
     for (let i = 0; i < value_meta.length; i++){
        let current_key_v = value_meta[i];
        let key = current_key_v[0];
        let value = current_key_v[1];
        let p = meta_table.append("p");
        p.text(`${key}: ${value}`);


}
})};
        



function option_sign(){
    
    let selection=d3.select("#selDataset");
    d3.json(url).then(function(data) {
        let sample_number = data.names;

        sample_number.forEach(function(sample) {
            selection.append("option").text(sample).property("value",sample)
        });
        let sample_start=sample_number[0];
        overall_change(sample_start);
    });

    
}

function optionChanged(test5){
    overall_change(test5);
};

option_sign();