import express from 'express';
import { motoristaService } from '../services/motorista.Service.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const motoristas = await motoristaService.getAllMotor();
        res.json(motoristas);
    } catch (error) {
        res.status(404).json({ message: "Motorista não encontrado!" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const motorista = await motoristaService.getMotorById(req.params.id);
        res.json(motorista);
    } catch (error) {
        res.status(404).json({ message: "O id do motorista não foi encontrado!"});
    }
});

router.post('/', async (req, res) => {
    try{
        const motorista = await motoristaService.createMotor(req.body);
        res.status(201).json(motorista)
    } catch (error) {
        res.status(500).json({ message: "Não foi possível criar um motorista!" });
    }
});

router.put('/:id', async (req,res) => {
    try{
        const motorista = await motoristaService.updateMotor(req.params.id, req.body);
        res.status(201).json(motorista)
    } catch (error) {
        res.status(404).json({ message: "Motorista não encontraadoo para atualizar!"});
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const motorista = await motoristaService.deleteMotor(req.params.id);
        res.status(201).json(motorista)
    } catch (error) {
        res.status(404).json({ message: "Motorista não encontrado para deletra!"});
    }
})

export default router;

