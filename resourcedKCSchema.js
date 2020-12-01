//const is just another let
//we declare a constant variable called mongoose
//we set it equal to the return value of require('mongoose');
const mongoose = require('mongoose'); 
const { stringify } = require('querystring');

//access the connect method of the mongoose object
//pass in the localhost test database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

//make another constant variable called db
//adn we set it equal to connection property of our mongoose object
const db = mongoose.connection;

//but then we access the on and once methods of our connection property from our mongoose object
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){


    /* we are creating a resourceSchema to store the blue print of each resource
    When developing the documents we plan to use JSON because of two key factors. The first being that JSON has faster Parsing than XML, with the large amounts of memory used due to the verbosity and cost of parsing large XML files. JSON is better for preformance because it consumes very little memory space. The second being with the fact our data types are only going to be text and numbers and not using images, charts, or graphs held within our database specifcally. */

    const resourceSchema = new mongoose.Schema({
        name : {type: String, required: true, maxlength: 100},
        description : {type: String, required: true, maxlength: 500},
        phone : {type: Number, required: true, maxlength: 10},
        email : {type: String, required: true, maxlength: 150},
        location : [locationSchema],
        outOfDate : {type: Boolean},
    });

    /* we are creating a location array that we can call back to when pulling resources.
    When developing the documents we plan to use JSON because of two key factors. The first being that JSON has faster Parsing than XML, with the large amounts of memory used due to the verbosity and cost of parsing large XML files. JSON is better for preformance because it consumes very little memory space. The second being with the fact our data types are only going to be text and numbers and not using images, charts, or graphs held within our database specifcally. */
    const locationSchema = new mongoose.Schema({
       location: [{
            cityName : String,
            stateName : String,
            zipCode : Number,
            address : String,
        }]
    });

    /* the filterSchema is used to direct the user to the relevant resources they are searching for
     When developing the documents we plan to use JSON because of two key factors. The first being that JSON has faster Parsing than XML, with the large amounts of memory used due to the verbosity and cost of parsing large XML files. JSON is better for preformance because it consumes very little memory space. The second being with the fact our data types are only going to be text and numbers and not using images, charts, or graphs held within our database specifcally. */

    const filterSchema = new mongoose.Schema({
        gender : {type: String, required: true, enum : ["Male", "Female", "Other"]},
        pregnant : {type: Boolean, required: true},
        age : {type: String, required: true, enum : ["Child", "Adult", "Senior"]},
        race : {type: String, required: true, enum : ["White", "Black/African American", "Hispanic/Latino", "American Indian", "Asian/Pacific Islander", "Unknown/Other"]},
        dependents: [dependentSchema],
        sexualOrientation: {type: String, required: true, enum: ["Straight", "LGBTQ", "Prefer to not answer"]},
        servicesOffered : {type: String, required: true, enum: ["Mental Health", "Emergency Housing", "Homeless Shelters", "Domestic Violence", "Suicide Prevention", "Hot Meals", "Financial Assistance", "We can add me here later"]},
        maritalStatus: {type: String, required: true, enum: ["Single", "Married", "Separated", "Divorced", "Widowed"]},
        employed : {type: Boolean, required: true},
    });

     /* the dependentSchema is going to set the blueprint for us to specifiy relevant resources
   When developing the documents we plan to use JSON because of two key factors. The first being that JSON has faster Parsing than XML, with the large amounts of memory used due to the verbosity and cost of parsing large XML files. JSON is better for preformance because it consumes very little memory space. The second being with the fact our data types are only going to be text and numbers and not using images, charts, or graphs held within our database specifcally. */
    const dependentSchema = new mongoose.Schema({
        dependents: {type: Number, required: true},
        dependentGender: {type: String,required: true, enum: ["Male", "Female", "Other"]},
        dependentMinor : {type: Boolean, required: true},
    })


       /* adminLogin schema for the administration to be able to update their organizations business information if need be
         When developing the documents we plan to use JSON because of two key factors. The first being that JSON has faster Parsing than XML, with the large amounts of memory used due to the verbosity and cost of parsing large XML files. JSON is better for preformance because it consumes very little memory space. The second being with the fact our data types are only going to be text and numbers and not using images, charts, or graphs held within our database specifcally. */

        const userSchema = new mongoose.Schema({
            username : {type: String, required: true, maxlength: 25},
            password : {type: String, required: true, minlength: 8},
            emailAddress : {type: String, required: true, maxlength: 150},
            admin : {type: Boolean, required: true}
        })
    

});

