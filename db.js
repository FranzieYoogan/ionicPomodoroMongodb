const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const url = 'yourKluster';
const dbName = 'pomodoro';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Define routes
    // Create a new user
    app.post('/pomo', async (req, res) => {
      const usersCollection = db.collection('pomo');
      try {
        const result = await usersCollection.insertOne(req.body);
        res.status(201).json(result.ops[0]);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // Get all users
    app.get('/pomo', async (req, res) => {
      const usersCollection = db.collection('pomo');
      try {
        const users = await usersCollection.find().toArray();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Get a user by ID
    app.get('/pomo/:id', async (req, res) => {
      const usersCollection = db.collection('pomo');
      try {
        const user = await usersCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Update a user
    app.put('/pomo/:id', async (req, res) => {
      const usersCollection = db.collection('users');
      try {
        const result = await usersCollection.findOneAndUpdate(
          { _id: new ObjectId(req.params.id) },
          { $set: req.body },
          { returnOriginal: false }
        );
        if (!result.value) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(result.value);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // Delete a user
    app.delete('/pomo/:id', async (req, res) => {
      const usersCollection = db.collection('pomo');
      try {
        const result = await usersCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Create a new product
    app.post('/employees', async (req, res) => {
      const employeesCollection = db.collection('employees');
      try {
        const result = await employeesCollection.insertOne(req.body);
        res.status(201).json(result.ops[0]);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // Get all employees
    app.get('/employees', async (req, res) => {
      const employeesCollection = db.collection('employees');
      try {
        const employees = await employeesCollection.find().toArray();
        res.status(200).json(employees);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Get a product by ID
    app.get('/employees/:id', async (req, res) => {
      const employeesCollection = db.collection('employees');
      try {
        const product = await employeesCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Update a product
    app.put('/employees/:id', async (req, res) => {
      const employeesCollection = db.collection('employees');
      try {
        const result = await employeesCollection.findOneAndUpdate(
          { _id: new ObjectId(req.params.id) },
          { $set: req.body },
          { returnOriginal: false }
        );
        if (!result.value) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(result.value);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // Delete a product
    app.delete('/employees/:id', async (req, res) => {
      const employeesCollection = db.collection('employees');
      try {
        const result = await employeesCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  })
  .catch(error => console.error(error));