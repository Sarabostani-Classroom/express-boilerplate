const express = require('express');
const router = express.Router();
const PORT = 3000;


const jwt = require('jsonwebtoken')


router.get('/', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'Home Page' }, craft: req.craft});
});

const posts = [
  {
    username: 'Fabrice',
    title: 'Post 1'
  },
  {
    username: 'Kalvin',
    title: 'Post 2'
  }
]
router.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

router.post('/signIn', (req, res) =>{
  // Authenticate User

  const username = req.body.username
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken})
})

function authenticateToken(req, res, next) {
  const authheader = req.headers['authorization']
  const token = authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
module.exports = router;
