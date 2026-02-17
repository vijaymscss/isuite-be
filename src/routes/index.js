const express = require("express");
const API = require("../config/apiNames");
const healthRoutes = require("./healthRoutes");
const protectedRoutes = require("./protectedRoutes");
const sqlRoutes = require("./sqlRoutes");
const codeRoutes = require("./codeRoutes");
const studentRoutes = require("./studentRoutes");
const testDetailsRoutes = require("./testDetailsRoutes");

const router = express.Router();

// Mount routes
router.use(API.BASE.HEALTH, healthRoutes);
router.use(API.BASE.PROTECTED, protectedRoutes);
router.use(API.BASE.SQL, sqlRoutes);
router.use(API.BASE.CODE, codeRoutes);
router.use(API.BASE.STUDENT, studentRoutes);
router.use(API.BASE.TEST_DETAILS, testDetailsRoutes);

module.exports = router;
