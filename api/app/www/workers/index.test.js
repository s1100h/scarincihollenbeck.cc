"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const chai_1 = require("chai");
const url = __importStar(require("./urls"));
const keys = __importStar(require("./keys"));
const fetch_1 = require("./fetch");
describe('check basic api url concatination', () => {
    it('full url concatination is a string', () => {
        const apiUrl = `${process.env.BACKEND_SITE_URL}/${url.ADMIN_ARCHIVE_API_URL}`;
        chai_1.expect(apiUrl).to.be.a('string');
    });
});
describe('check types for common variables', () => {
    it('admin archive url to be a string', () => {
        chai_1.expect(url.ADMIN_ARCHIVE_API_URL).to.be.a('string');
    });
    it('admin archive key to be a string', () => {
        chai_1.expect(keys.ADMIN_ARCHIVE_KEY).to.be.a('string');
    });
});
describe('results from fetch', () => {
    it('results are an array type', () => {
        const results = fetch_1.fetchContent(url.ADMIN_ARCHIVE_API_URL, keys.ADMIN_ARCHIVE_KEY);
        chai_1.expect(results).to.be.a('array');
    });
});
describe('test environment variables', () => {
    it('ADMIN_SITE url', () => {
        // admin site url
        const TEST_ADMIN_SITE = process.env.ADMIN_SITE;
        chai_1.expect(TEST_ADMIN_SITE).equal('http://wp');
    });
    it('REDIS_PASSWORD', () => {
        // redis password
        const TEST_REDIS_PASSWORD = process.env.REDIS_PASSWORD;
        chai_1.expect(TEST_REDIS_PASSWORD).equal('abc123');
    });
    it('REDIS_URL', () => {
        // redis url    
        const TEST_REDIS_URL = process.env.REDIS_URL;
        console.log('redis url');
        chai_1.expect(TEST_REDIS_URL).equal('172.23.0.2:6379');
    });
});
//# sourceMappingURL=index.test.js.map