module.exports = (passport, db) => {
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require('bcrypt-nodejs');

  passport.serializeUser(function(user,done){
    console.log(user)
    done(null, user);
  });

  passport.deserializeUser(function(obj, done){
    console.log(obj)
    done(null, obj);
  });

  passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req,username, password, done){
    process.nextTick(function(){
      db.query("SELECT * FROM users WHERE username='" +username+ "'", function(err, user){
        if(user.length < 1)
          return done(null, false, {message: 'no useer'});
            if(!bcrypt.compareSync(password, user[0].password)){
              return done(null, false, {message: 'incorrect password'});
            }
          return done(null, user[0]);
        });
      });
  }));

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done){
    process.nextTick(function(){
      db.query("SELECT username FROM users WHERE username='" +username+ "'", function(err, data){
        if(user.length > 0){
          return done(null, false, {message: 'username taken'});
        }else{
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(password, salt);
          const query = "INSERT INTO users(name, username, password) VALUES ('"+req.body.name+"', '"+username+"', '"+hashedPassword+"')";

          db.query(query, function(error, queryRes){
            if(error){
              console.error(error)
            }else{
              return done(null, queryRes)
            }
          })
        };
      });
    });
  }));
}
