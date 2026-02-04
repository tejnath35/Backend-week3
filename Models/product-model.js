import {Schema,model} from 'mongoose';
const productSchema=new Schema({
    productname:{
        type:String,
        required:[true,"Product Name is required"],
        minlength:[3,"Product Name must be at least 3 characters long"],
        maxlength:[20,"Product Name cannot exceed 20 characters"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    }
    });
export default model('product',productSchema);



