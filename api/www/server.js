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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_router_1 = require("./controllers/v0/index.router");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const port = process.env.PORT || 8086; // default port to listen
    app.use(cors_1.default());
    app.use(body_parser_1.default());
    app.use('/', index_router_1.IndexRouter);
    // Root URI call
    app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send('/cached/');
    }));
    // Start the Server
    app.listen(port, () => {
        console.log('/cached api running');
        console.log(`server running on ${port}`);
        console.log('press CTRL+C to stop server');
    });
}))();
//# sourceMappingURL=server.js.map