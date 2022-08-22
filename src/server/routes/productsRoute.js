const express = require('express');
const router  = express.Router();
const { addContactValidationRules, validate } = require('../validation/addUserValidation');
const fs = require('fs');
const ObjectId = require('mongodb').ObjectID;
const jwt     = require('jsonwebtoken');
const sanitizeHtml = require('sanitize-html');

//const db      = require('../dbConnection');
//database      = db.getDb();

module.exports = () => {
  router.get('/', (req, res) => {
      const productsCollection = database.collection('products');
      productsCollection.find({}).toArray((err, docs) => {
        return res.status(200).json(docs);
      });
    });

  router.post('/', addContactValidationRules(),validate, (req, res, next) => {

    if( !jwt.verify( req.headers.authorization.split(' ')[1], process.env.JWT_SECRET).admin == 'false' ) {
      return res.status(401).json({ error: 'Adding new product is allowed for admins only!' });
    }

    const product = req.body;

    // Write the image to profiles folder
    var buffer = new Buffer(req.body.photoUrl.data, 'base64');
    const photoName = `${sanitizeHtml(req.body.firstName)}-${sanitizeHtml(req.body.lastName)}.${sanitizeHtml(req.body.photoUrl.extension)}`;
    fs.writeFile(process.cwd()+`/src/server/profiles/`+sanitizeHtml(photoName),
                  buffer, function (err,data) {
        if (err) {
          return console.log(err);
        }
    });
      /* if(req.files) {
        console.log(req.files);
        req.files.photoUrl.mv('profiles');
      } */

    const productsCollection = database.collection('products');

    req.body.photoUrl.data = 'data:image/jpeg;base64,' + req.body.photoUrl.data;
    productsCollection.insertOne(product, (err, r) => {
      if(err) {
        return res.status(500).json({ error: 'Error inserting new product' });
      }

      const newProduct = r.ops[0];

      return res.status(201).json(newProduct);
    });
  })

  router.put('/:id', addContactValidationRules(),validate, (req, res, next) => {

    if( !jwt.verify( req.headers.authorization.split(' ')[1], process.env.JWT_SECRET).admin == 'false' ) {
      return res.status(401).json({ error: 'Editing a user is allowed for admins only!' });
    }

    const user = req.body;
    delete user._id;
    //console.log(req.body);
    // Write the image to profiles folder
    var buffer = new Buffer(req.body.photoUrl.data, 'base64');
    fs.writeFile(process.cwd()+`/src/server/profiles/${req.body.firstName}-${req.body.lastName}.${req.body.photoUrl.extension}`,
                  buffer, function (err,data) {
        if (err) {
          return console.log(err);
        }
    });
      /* if(req.files) {
        console.log(req.files);
        req.files.photoUrl.mv('profiles');
      } */

    const productsCollection = database.collection('products');

    req.body.photoUrl.data = 'data:image/jpeg;base64,' + req.body.photoUrl.data;
    /* productsCollection.findOneAndUpdate({ "_id" : ObjectId(req.params.id) }, { $set: user }, { returnNewDocument: true }, (err, r) => {
      if(err) {
        return res.status(500).json({ error: 'Error updating new product' });
      }

      const updatedRecord = r.ops[0];
      console.log(r);

      return res.status(201).json(updatedRecord);
    }); */

    productsCollection.findOneAndUpdate({ "_id" : ObjectId(req.params.id) }, { $set: user }, { returnNewDocument: true })
      .then(updatedDocument => {
        if(updatedDocument) {
          console.log(`Successfully updated document: ${updatedDocument}.`);
          return res.status(201).json(updatedDocument);
        } else {
          console.log("No document matches the provided query.");
          return res.status(500).json({ error: 'Error updating new product' });
        }
      })
  })

  router.delete('/:id', (req, res) => {

    if( !jwt.verify( req.headers.authorization.split(' ')[1], process.env.JWT_SECRET).admin == 'false' ) {
      return res.status(401).json({ error: 'Deleting a user is allowed for admins only!' });
    }

    const productsCollection = database.collection('products');
    productsCollection.findOneAndDelete({ "_id" : ObjectId(req.params.id) })
      .then(deletedProduct => {
        if(deletedProduct.value) {
          console.log(`Successfully deleted document that had the form: `);
          console.log(deletedProduct);
          return res.status(201).json(deletedProduct);
        } else if(deletedProduct.value == null) {
          console.log("No document matches the provided query.");
          console.log(deletedProduct);
          return res.status(204).json({ error: 'No data found!' });
        }
      })
      .catch(err => console.error(`Failed to find and delete product: ${err}`))
    /* find({}).toArray((err, docs) => {
      return res.json(docs);
    }); */
  });

  return router;
};
