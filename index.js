const fs = require("fs");
const Liquid = require('liquid')
const engine = new Liquid.Engine();
const app = require("express").application;

/**
 * Applies liquid view engine to express app
 * @param {app} ExpressApp Express.js app
 * @example const express = require("express");
 * const app = require("liquid-express")(express());
 * 
 * // other codes
 */
module.exports = (ExpressApp) => {
    ExpressApp.engine("liquid", (path, options, cb) => {
        fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
            if (error) return cb(error);
            engine
                .parseAndRender(data, options)
                .then(result => {
                    return cb(null, result);
                })
                .catch(e => {
                    return cb(e);
                });
        });
    });

    ExpressApp.set("view engine", "liquid");
    return ExpressApp;
};