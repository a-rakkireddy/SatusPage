const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const authController = require('../controllers/authController');

// Get all services for an organization
router.get('/', authController.protect, async (req, res) => {
  try {
    const services = await Service.find({
      organization: req.user.organization
    }).populate('team');
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error: error.message });
  }
});

// Get a single service
router.get('/:id', authController.protect, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
      .populate('team')
      .populate('organization');
    
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching service', error: error.message });
  }
});

// Create a new service
router.post('/', authController.protect, async (req, res) => {
  try {
    const service = new Service({
      ...req.body,
      organization: req.user.organization
    });
    
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service', error: error.message });
  }
});

// Update a service
router.put('/:id', authController.protect, async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error: error.message });
  }
});

// Delete a service
router.delete('/:id', authController.protect, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service', error: error.message });
  }
});

module.exports = router;
