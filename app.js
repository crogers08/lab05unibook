const express = require("express");
const app = express();


app.set('view engine', 'ejs');

//array
const countries = ["australia", "denmark", "france", "united+states"]

app.get(`/${countries[0]}`, async (req, res) => {
    
    let country = countries[0];
    let url = `http://universities.hipolabs.com/search?country=${country}`
    let response = await fetch(url);
    let unis = await response.json();
    

    res.render("index",{uni_data: unis,country_name: country});
});


app.get(`/${countries[1]}`, async (req, res) => {
    
    let country = countries[1];
    let url = `http://universities.hipolabs.com/search?country=${country}`
    let response = await fetch(url);
    let unis = await response.json();
    

    res.render("index",{uni_data: unis,country_name: country});
});

app.get(`/${countries[2]}`, async (req, res) => {
    
    let country = countries[2];
    let url = `http://universities.hipolabs.com/search?country=${country}`
    let response = await fetch(url);
    let unis = await response.json();
    

    res.render("index",{uni_data: unis,country_name: country});
});

app.get(`/usa`, async (req, res) => {
    
    let country = countries[3];
    let url = `http://universities.hipolabs.com/search?country=${country}`
    let response = await fetch(url);
    let unis = await response.json();
    

    res.render("index",{uni_data: unis,country_name: country});
});



app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});