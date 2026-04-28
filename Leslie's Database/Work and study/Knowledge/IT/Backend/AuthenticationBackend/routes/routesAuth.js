const { Router } = require('express');

const router = Router();

router.get('/sign', (req, res) => {
	res.redirect('/signup');
});

router.get('/signup', (req, res) => {
	res.status(200).send('Signup route is ready. Next step: add JWT user creation logic here.');
});

router.post('/signup', (req, res) => {
	res.status(501).json({
		message: 'Not implemented yet. Add JWT signup logic in this endpoint.'
	});
});

router.get('/login', (req, res) => {
	res.status(200).send('Login route is ready. Next step: add JWT token generation here.');
});

router.post('/login', (req, res) => {
	res.status(501).json({
		message: 'Not implemented yet. Add JWT login/token logic in this endpoint.'
	});
});

module.exports = router;