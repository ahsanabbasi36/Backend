import mongoose, {Schema} from "mongoose"//mongoose is lib,Schema is class
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema(
    {
        videoFile:{
            type:String,//cloudniary
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:String,//cloudniary
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default: true
        },
        owner:{
            type:Schema.Types.ObjectId,//ObjectId is a specific type used for storing MongoDB's unique identifier
            ref:"User"
        }
/*
Purpose of ObjectId:

ObjectId is a unique identifier generated by MongoDB for each 
document. It consists of a timestamp, machine identifier, process
 identifier, and a random counter
*/
    },
    {
        timestamps:true
    }
)
export const video= mongoose.model("Video", videoSchema)
//The mongoose.model function creates the Mongoose model named "Video" based on the defined schema.




/*
mongoose Library:
Definition: mongoose is a Node.js library for MongoDB object modeling and interaction.
Purpose: It provides a higher-level, schema-based abstraction over the raw MongoDB driver.
Usage: Enables easy definition of models and schemas, simplifying the interaction with MongoDB databases in Node.js applications.
Example Usage: Create models and schemas, perform CRUD operations, and define relationships between data.

Schema Class:
Definition: The Schema class is part of the Mongoose library used to define the structure of documents in MongoDB collections.
Purpose: Describes the fields, types, and constraints for documents within a collection.
Usage: Create instances of the Schema class to define the structure of data models.
Example Usage: Define fields, types, and validation rules for documents, then use the schema to create Mongoose models for interacting with MongoDB collections.
*/
