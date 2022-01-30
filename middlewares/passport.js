const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const fs = require('fs');
const path = require('path');
const User = require('mongoose').model('User');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

const jwtStrategy = new JwtStrategy(options, (jwtPayload, done) => {
  console.log(jwtPayload);

  User.findOne({ _id: jwtPayload.sub }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  });
});

module.exports = (passport) => {
  passport.use(jwtStrategy);
};
