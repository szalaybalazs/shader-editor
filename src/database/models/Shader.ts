import mongoose, { Schema, Document } from 'mongoose';
import { nanoid } from 'nanoid';
import { iUser, User } from './User';
const randomWords = require('random-words');

User;
const defaultCode = `#version 300 es

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 fragColor;

void main()
{
    fragColor = vec4(vec3(sin(u_time) / 2.0 + 1.0, cos(u_time) / 2.0 + 1.0, 1.0), 1.0);
}`;

export interface iBaseBuffer {
  id: string;
  index: number;
}
export interface iTextureBuffer extends iBaseBuffer {
  key: string;
  filename: string;
  type: 'TEXTURE';
}

export interface iFragmentBuffer extends iBaseBuffer {
  type: 'PREVIOUS_FRAGMENT';
}

export type tBuffer = iTextureBuffer | iFragmentBuffer;

export interface iShader extends Document {
  slug: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  userId: string;

  user?: iUser;

  buffers: tBuffer[];
}
const schema: Schema = new mongoose.Schema(
  {
    slug: {
      type: String,
    },
    name: {
      type: String,
    },
    buffers: [
      new mongoose.Schema({
        key: String,
        index: Number,
        filename: String,
        type: { type: String, enum: ['TEXTURE', 'PREVIOUS_FRAGMENT'] },
      }),
    ],
    code: {
      type: String,
      default: defaultCode,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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

schema.pre('save', async function save(next) {
  if (this.isNew) {
    this.slug = this.slug || nanoid();
    this.name = this.name || randomWords({ exactly: 3, join: '-' });
    this.createdAt = new Date();
  }

  this.updatedAt = new Date();

  next();
});

export const Shader = (mongoose.models.Shader as mongoose.Model<iShader>) || mongoose.model<iShader>('Shader', schema);
