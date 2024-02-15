const bodyParser = require('body-parser');
const express= require('express')
const router = express.Router();
const Tarea = require('../../models/Tarea');


router.get('/', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const tarea = new Tarea({
        titulo: req.body.titulo,
        description: req.body.descripcion,
        estado: req.body.estado
    });

    try {
        const nuevaTarea = await tarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        console.log('id', req.params)
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) return res.status(404).json({ message: 'Tarea not found' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tarea) return res.status(404).json({ message: 'Tarea not found' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        console.log('borrar', req.params.id)
        const id = req.params.id
        const tarea = await Tarea.findByIdAndDelete(id);
        if (!tarea) return res.status(404).json({ message: 'Tarea not found' });
        res.json({ message: 'Tarea deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
