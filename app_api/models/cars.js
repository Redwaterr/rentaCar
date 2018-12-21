const mongoose = require("./db");

const Schema = mongoose.Schema;

let carSchema = Schema( 
{
    marka:{type:String},
    ücret:{type:Number},
    yil:{type:Number}
});

export default mongoose.model("cars",carSchema);