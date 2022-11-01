import mongoose, { Document, Schema } from 'mongoose';
import { iShader } from './Shader';

export interface iUser extends Document {
  name: string;
  email: string;
  image: string;
  emailVerified?: boolean;
  shaders?: iShader[];
}
const schema: Schema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
    emailVerified: Boolean,
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

schema.virtual('id').get(function () {
  return this._id;
});

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
});

export const User = (mongoose.models.User as mongoose.Model<iUser>) || mongoose.model<iUser>('User', schema);
