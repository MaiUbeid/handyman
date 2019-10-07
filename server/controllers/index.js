const express = require('express');

const router = express.Router();

const { unlockCookie } = require('./middleware/unlockCookie');
const {
  signup, profile, logout, userJobs, addJob, services, oneService, login, isAuth,
} = require('./routes');

router.post('/login', login);
router.post('/signup', signup);
router.get('/services', services);
router.get('/service/:id', oneService);
router.get('/profile/:id', profile);
router.post('/signup', signup); // repeated signup
router.use(unlockCookie);
router.get('/isAuth', isAuth);
router.get('/jobs', userJobs);
router.post('/hire', addJob);
router.get('/logout', logout);

module.exports = router;
