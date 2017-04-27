var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({
  _id:{type:Number},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   area:String,
   latitude: {type:Number},
   longitude: {type:Number}
});



mongoose.model('user_location_master', locationSchema);


