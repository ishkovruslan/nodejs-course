const express = require('express');
const db = require('../db');
const { users } = require('../db/schema');

const router = express.Router();

// handle get request for path /users
router.post('/users', async (request, response) => {
    const { body } = request;
    await db.insert(users).values(body);
    return response.sendStatus(201);
});

module.exports = router;
