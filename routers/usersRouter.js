
const router = require('express').Router();
const { db } = require('../firebase/connectFB');
const usersRef = db.collection('users');
router.get("/", (req, res) => {
    try {
        usersRef.get().then((snapshot) => {
            const users = [];
            snapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(users);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post("/", (req, res) => {
    try {
        const newUser = req.body;
        usersRef.add(newUser).then((docRef) => {
            res.status(201).send(`User added with ID: ${docRef.id}`);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;