var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
/*
var hospitalDBSchema = new Schema({
	hospitalName: {
		type: String,
		trim: true,
		unique: true
	},
	diseases: String,

	provider: String,
	providerId: String,
	providerData: {}
//	todos: {}//we will use this in the next tutorial to store TODOs
});
*/


var hospitalDBSchema = new Schema( {
	hospitalName:String,
	diseases:String,
	'geometry': {
	'type': {
    type: String,
    required: true,
    enum: ['Point', 'LineString', 'Polygon'],
    default: 'Point'
  },
  'coordinates': [
  	 Number
  	
  ]
	}
		
   
  });

   /* name: String,
	email: String,
	username: {
		type: String,
		trim: true,
		unique: true
	},
	password: String,
	provider: String,
	providerId: String,
	providerData: {},
	todos: {}*/


hospitalDBSchema.pre('save', 
	function(next){
		next();
	}
);
mongoose.model('hospitalDB',hospitalDBSchema);