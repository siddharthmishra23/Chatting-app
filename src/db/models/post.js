import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    author: String,
    contents: String,
    tags: [String],
  },
  { timestamps: true },
)

// Now that we have defined the schema, we can create a Mongoose model from it by using the mongoose.model() function
// The first argument to mongoose.model() specifies the name of the collection. In our case, the collection will be called posts because we specified post as the name. In Mongoose models, we need to specify the name of the document in singular form.
export const Post = mongoose.model('post', postSchema)
