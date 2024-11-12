const express = require('express');
const { createStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

// Routes for CRUD operations
router.post('/students', createStudent);  // Create
router.get('/students', getStudents);     // Read
router.put('/students/:id', updateStudent); // Update
router.delete('/students/:id', deleteStudent); // Delete

module.exports = router;
