const express = require(`express`);

const app = express();

// Creating our first route which is looking for requests from http://localhost:4000/
app.get(`/`, (request, response) => { // res is the response object and req is the request object
 // Our response
 response.send(`Welcome to our very nice and plain site.`);
});

app.get(`/about`, (request,response) => {
	response.send(`It a cold and dart rainy day.`)
});

app.listen(4000, () => console.log(`Listenig on port 4000`));
