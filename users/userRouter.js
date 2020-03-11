const express = require('express');

const users = require("./userDb");

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  users.insert(req.body)
    .then( user => {
      if(user){
        res.status(201).json(user)
      }
      else {
        res.status(400).json({error: "Missing user data."})
      }
      
    })
    .catch(err => {
      res.status(500).json({error: "The post could not be saved."})
    })

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  users.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      rres.status(500).json({ error: "The posts information could not be retrieved." })
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params;
  users.getById(id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    rres.status(500).json({ error: "The posts information could not be retrieved." })
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  const {id} = req.params;
  users.getUserPosts(id)
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      rres.status(500).json({ error: "The posts information could not be retrieved." })
    })
  
});

router.delete('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params.id;

  users.remove(id)
  .then(user => {

      res.status(200).json(user, {success: "Delete Success."})
    
  })
  .catch(err => {
    res.status(500).json({ error: "The posts information could not be retrieved." })
  })

});

router.put('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params.id;
  const changes = req.body;

  users.update(id, changes)
  if(!changes.name){
    res.status(400).json({errorMessage: "Missing name"})
  }
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
