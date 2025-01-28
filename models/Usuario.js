import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    matricula: { type: String, required: true },
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    carrera: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

export default Usuario;