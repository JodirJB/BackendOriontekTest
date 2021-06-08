// Rutas de clientes
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');


// api/clients
router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.put('/:id', clientController.updateClients);
router.get('/:id', clientController.getClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;