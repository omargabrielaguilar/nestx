import { Schema, Document, model } from 'mongoose';

// Definimos el esquema de User
export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Definimos la interfaz para UserDocument, que extiende de Document
export interface User {
  email: string;
  password: string;
  createdAt: Date;
}

// Esta interfaz extiende de Document y será utilizada con el modelo de Mongoose
export interface UserDocument extends User, Document {}

// Creamos el modelo de Mongoose
export const UserModel = model<UserDocument>('User', UserSchema);
