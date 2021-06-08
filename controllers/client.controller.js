const clientModel = require("../models/client.model");

exports.createClient = async(req, res) => {
    try {
        let client;

        client = new clientModel(req.body);

        await client.save();

        res.send(client);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getClients = async(req, res) => {
    try {
        const clients = await clientModel.find();

        res.json(clients);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.updateClients = async(req, res) => {
    try {
        const { client, address } = req.body
        let clients = await clientModel.findById(req.params.id);
        if (!client) {
            res.status(404).json({ message: 'No existe este cliente en la App' });
        }

        clients.client = client;
        clients.address = address;

        clients = await clientModel.findByIdAndUpdate({ _id: req.params.id }, clients, { new: true });
        res.json(clients);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getClient = async(req, res) => {
    try {
        let client = await clientModel.findById(req.params.id);
        if (!client) {
            res.status(404).json({ message: 'No existe este cliente en la App' });
        }

        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteClient = async(req, res) => {
    try {
        let client = await clientModel.findById(req.params.id);
        if (!client) {
            res.status(404).json({ message: 'No existe este cliente en la App' });
        }

        await clientModel.findOneAndRemove({ _id: req.params.id });
        res.json({ message: 'Cliente eliminado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}