const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const Incident = require('../models/Incident');

// Public status page
router.get('/', async (req, res) => {
  try {
    // Get all public services
    const services = await Service.find({
      organization: req.query.organization
    }).populate('team');

    // Get recent incidents
    const incidents = await Incident.find({
      organization: req.query.organization,
      $or: [{ type: 'incident' }, { type: 'maintenance', resolvedAt: null }]
    })
    .sort({ createdAt: -1 })
    .limit(10);

    res.render('status', {
      title: 'Status Page',
      services,
      incidents
    });
  } catch (error) {
    console.error('Error fetching status:', error);
    res.status(500).send('Error fetching status page');
  }
});

module.exports = router;
