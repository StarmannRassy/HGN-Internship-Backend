const express = require('express');
const { findUserById } = require('../models/user');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

router.get('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        const user = await findUserById(id);
        if (!user) {
            return res.status(404).json({
                status: 'Not found',
                message: 'User not found',
                statusCode: 404,
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'User retrieved successfully',
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

module.exports = router;
