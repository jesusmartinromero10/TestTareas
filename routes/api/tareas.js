const bodyParser = require('body-parser');
const router = express.Router();
const Tarea = require('../../models/Tarea');

router.get('/api/tareas', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/api/tareas', async (req, res) => {
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

router.get('/api/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) return res.status(404).json({ message: 'Tarea not found' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/api/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tarea) return res.status(404).json({ message: 'Tarea not found' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/api/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        if (!tarea) return res.status(404).json({ message: 'Tarea not found' });
        res.json({ message: 'Tarea deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
