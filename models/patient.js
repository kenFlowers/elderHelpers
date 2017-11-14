
var Sequelize = require("sequelize");

var sequelize = require('../config/connection.js')


//Create a "Patient" model
var Patient = sequelize.define("patient", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	patient_name: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	zip: {
		type: Sequelize.INTEGER
	},
	// 0 = false 1 ==true for tinyINT
	goodHealth: {
		type: Sequelize.BOOLEAN
	},
	head: {
		type: Sequelize.BOOLEAN
	},
	chest: {
		type: Sequelize.BOOLEAN
	},
	back: {
		type: Sequelize.BOOLEAN
	},
	arms: {
		type: Sequelize.BOOLEAN
	},
	stomach: {
		type: Sequelize.BOOLEAN
	},
	torso: {
		type: Sequelize.BOOLEAN
	},
	legs: {
		type: Sequelize.BOOLEAN
	},
	comments: {
		type: Sequelize.BOOLEAN
	}
},{
	timestamps: true
});


//Sync with DB 
Patient.sync();


//Export the Patient Model
module.exports = Patient;



//Patient table info guide
/*
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  patient_name varchar(200) NOT NULL,
  age INT (3) NOT NULL,
  zip INT (5) NOT NULL,
  goodHealth TINYINT (1),
  head TINYINT (1),
  chest TINYINT (1),
  back TINYINT (1),
  arms TINYINT (1),
  stomach TINYINT (1),
  torso TINYINT (1),
  legs TINYINT (1),
  comments TINYINT (1), 
  
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
*/