# Assignment-14-Javascript
This is the repository for the Assignment 15 which focus on creating an interactive site containing data through Javascript.
The javascript was edited through vscode.

In the repository, there are;
- the 'sample.json', which is only used as a visual reference since the code use the url as the main data source.
- the index.html, the main link to the website that shows the result of the javascript
- README.md, detail explaining the repository
- app.js (inside the folder), main javascript which contains the coding sequences that takes the json data and convert it into visual charts.

When reading the app.js, the code sequence is broken down into several sections:

the first section is getting the json data from the 'url' and filter the data in order to focus on the data linked to the sample id.

the second section is creating the visual charts; bar (horizontal, bubble and metadata).
- the bar chart shows the top 10 OTU with the ascending value.
- the bubble chart shows all of the OTU and increase in size based on the corresponding sample value
- the metadata contains an exculsive filtering sequences in order to extract both the key and value, then append into the table.

the third section is creating the option list where the data will update when the sample id changes, note that the top two section are under the function. This is to allow the change of sample id to allow apply to those function with ease.

![image](https://github.com/Nisloen/Assignment-14-Javascript/assets/134130254/e5993066-7d13-4156-8ac2-e184e8e957b0)
