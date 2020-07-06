const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pollendataSchema = new Schema({
  grassPollen: String,

  ragweedPollen: String,
  
  birchpollen: String,
  
  ryePollen: String,
  
  hazelpollen: String,
  
  alderPollen: String,
  
  ashpollen: String,
  
  mugwortpollen: String
    
});

const pollenData = mongoose.model("pollenData", pollendataSchema);

module.exports = User;