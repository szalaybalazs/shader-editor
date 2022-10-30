import mongoose, { Schema, Document } from 'mongoose';
import { nanoid } from 'nanoid';
import { iShader } from './Shader';
const randomWords = require('random-words');

const defaultCode = `#version 300 es

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 fragColor;

void main()
{
    fragColor = vec4(vec3(sin(u_time) / 2.0 + 1.0, cos(u_time) / 2.0 + 1.0, 1.0), 1.0);
}`;

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
