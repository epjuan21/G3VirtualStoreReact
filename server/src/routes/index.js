const express = require('express');
const categoriesRouter = require('./categories.router')
const productsRouter = require('./products.router')
const userRouter = require('./users.router');
const authRouter = require('./auth.router');

function routerApi(app) {

    const router = express.Router();
    app.use('/api/v1', router)

    router.use('/categories', categoriesRouter);
    router.use('/products', productsRouter);
    router.use('/users', userRouter);
    router.use('/auth', authRouter);
}

module.exports = routerApi;