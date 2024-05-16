import express from 'express';
import Result from '../result.js';

const router = express.Router();

// Ruta para obtener la vista principal
router.get('/', async (req, res) => {
    const results = await Result.findAll();
    res.render('index', { results: results.map(result => result.dataValues) });
});

// Ruta para manejar el envío de resultados
router.post('/results', async (req, res) => {
    const { results } = req.body;

    // Eliminar todos los registros existentes y agregar los nuevos
    await Result.destroy({ where: {} });
    await Result.bulkCreate(results);

    res.redirect('/'); // Redirigir a la página principal después de guardar
});

// Ruta para manejar la eliminación de una fila
router.delete('/results/:index', async (req, res) => {
    const index = parseInt(req.params.index, 10);
    let results = await Result.findAll();
    results = results.map(result => result.dataValues);

    if (index >= 0 && index < results.length) {
        await Result.destroy({ where: { id: results[index].id } });
    }

    res.sendStatus(200); // Responder con un estado 200
});

export default router;
