const path = require('path');
const db =require('../config/database.js')

module.exports = (app, passport, db) =>{

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/public/html/main_page.html'));
  });

  app.get('/sign-up', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/public/html/sign_up.html'));
  });

  app.get('/sign-in', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/public/html/sign_in.html'));
  })

  app.get('/api/sign-up', function(req, res){
    passport.authenticate('local-signup', function(err, user, info){
      if(err){
        return next(err);
      }else{
        res.json({user: user, info: info})
      }
    })(req, res);
  });

  app.post('/api/sign-up', function(req, res, next){
    passport.authenticate('local-signup', function(err, user, info){
      if(err){
        return next(err);
      }else{
        res.json({user: user, info: info})
      }
    })(req, res, next);
  });


  app.get('/api/sign-in', function(req, res){
    passport.authenticate('local-signin', function(err, user, info){
      if(err){
        return next(err);
      }else{
        res.json({user: user, info: info})
      }
    })(req, res);
  })












}
