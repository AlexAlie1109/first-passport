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

  app.get('/signed-in', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/public/signed_in.html'));
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


  app.post('/api/sign-in', function(req, res, next){
    passport.authenticate('local-signin', function(err, user, info){
      if(err){
        return next(err);
      }
      if(!user){
        return res.json({success: false, message: 'authentication failed', info: info});
      }
      req.login(user, function(err){
        if(err){
          return next(err);
        }
        return res.status(200).json({success: true, message: 'authentication succeeded', object: user});
      });
    })(req, res, next);
  })



}
