var Location = require('../models/Location.js'); 

module.exports = {

  list: function(req, res) {
    Location.find({ user: req.user._id }).select('_id name').exec().then(function(locations) {
      return res.json(locations);
    });
  },  
  listOne: function(req, res) {
    Location
      .findById(req.params.id)
      .populate('user', 'email')
      .exec()
      .then(function(location){
        res.status(200).json(location);
      }, function(err){
        res.status(500).json(err);
    });
  },  
  create: function(req, res) {
    console.log(req)
    var newLocation = new Location(req.body);
    newLocation.user = req.user._id;
    newLocation.save(function(err, location) {
      if (err) {
        console.log(err)
        return res.status(500).end();
      }
      return res.json(location);
    });
  },
  update: function(req, res) {
    Location
    .findByIdAndUpdate(req.params.locationId, {name: req.body.name})
    .exec(function(err, result) {
      console.log(result)
      if(err) return res.status(500).end();
      return res.status(200).json(result);
    });
  },
  delete: function(req, res) {
    Location
    .findById(req.params.locationId)
    .remove()
    .exec(function(err, result) {
      console.log(result)
      if(err) return res.status(500).end();
      return res.status(200).json(result);
    });
  }
}
