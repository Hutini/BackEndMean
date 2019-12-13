const Usuario = require('../models/usuario');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req , res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res ) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json('Usuario Guardado');
};

usuarioCtrl.getUsuario = async (req , res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req , res) => {
    const{ id } = req.params;
    const usuario ={
        nombre: req.body.nombre,
        password: req.body.password,
        rol: req.body.rol
    };

    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario Update'});

};

usuarioCtrl.deleteUsuario = async (req , res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Deleted'});
};
module.exports = usuarioCtrl;
