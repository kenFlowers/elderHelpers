//api-routes.js - this file gives a set of routes for displayin and saving data to the db


//Dependencies


//Require our Patient model
var Patient = require("../models/patient.js")
//Routes

module.exports = function(app){

	//Get all patients route
	app.get("/api/all",function(req,res){
		Patient.findAll({}).then(function(results){
			res.json(results);
		});
	});

	//Get a specific patient route
	app.get("/api/:patient", function(req,res){
		if (req.params.patient) {
			Patient.findAll({
				where: {
					patient_name: req.params.patient
				}
			}).then(function(results){
				res.json(results);
			});
		}
	});
	//Get all illnesses of specific patient route

	//Add a Patient

	//Delete a Patient


}