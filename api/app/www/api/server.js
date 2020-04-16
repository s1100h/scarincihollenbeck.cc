"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const run_workers_1 = require("../workers/run-workers");
const index_router_1 = require("./controllers/v0/index.router");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = express();
        const port = process.env.PORT || 8200; // default port to listen
        app.use(cors());
        app.use(bodyParser());
        app.use(compression());
        app.use('/', index_router_1.IndexRouter);
        // Root URI call
        app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send('/cached/');
        }));
        // Start the Server
        app.listen(port, () => {
            run_workers_1.fetchData();
            console.log('/cached api running');
            console.log(`server running on ${port}`);
            console.log('press CTRL+C to stop server');
        });
    }
    catch (err) {
        console.log(err);
        if (err) {
            return err;
        }
    }
}))();
//# sourceMappingURL=server.js.map