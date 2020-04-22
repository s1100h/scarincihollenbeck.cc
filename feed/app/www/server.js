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
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Parser = require('rss-parser');
const port = 8100;
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json', limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
// sort and parse results
function parseFeedResults(feed, sourceUrl, source = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        // check if the source is asbury park press
        feed.items.forEach((post) => __awaiter(this, void 0, void 0, function* () {
            const { title, link, pubDate, isoDate, content, } = post;
            if (content.indexOf('pandemic') > -1 || content.indexOf('COVID-19') > -1 || content.indexOf('Corona') > -1) {
                // push results into array
                yield results.push({
                    title,
                    link,
                    pubDate,
                    isoDate,
                    source: sourceUrl,
                });
            }
        }));
        return results;
    });
}
// filter for covid-19 or corona virus terms
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Please visit endpoint /covid-19-news');
}));
app.get('/covid-19-news', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parser = new Parser();
        // parse through njBiz Government section
        const njBizGovFeed = yield parser.parseURL('https://njbiz.com/feed/?cat=275');
        const njBizGovUrl = '<a href="https://njbiz.com/government/">NJBIZ - Government</a>';
        const parsedNjBizGov = yield parseFeedResults(njBizGovFeed, njBizGovUrl);
        // parse through njBiz Health section
        const njBizHealthFeed = yield parser.parseURL('https://njbiz.com/feed/?cat=420');
        const njBizHealthUrl = '<a href="https://njbiz.com/health-care/">NJBIZ - Health Care</a>';
        const parsedNjBizHealth = yield parseFeedResults(njBizHealthFeed, njBizHealthUrl);
        // North Jersey health
        const northJerseyHealthFeed = yield parser.parseURL('http://rssfeeds.northjersey.com/northjerseyhealth&x=1');
        const northJerseyHealthUrl = '<a href="http://rssfeeds.northjersey.com/northjerseybusiness">NorthJersey.com - Health</a>';
        const parseNorthJerseyHealth = yield parseFeedResults(northJerseyHealthFeed, northJerseyHealthUrl);
        // North Jersey health
        const asburyParkPressFeed = yield parser.parseURL('http://rssfeeds.app.com/asburypark/home');
        const asburyParkPressUrl = '<a href="https://www.app.com">Asbury Park Press</a>';
        const parseAsburyParkPress = yield parseFeedResults(asburyParkPressFeed, asburyParkPressUrl, 'app');
        // observer
        const observerPressFeed = yield parser.parseURL('https://observer.com/feed');
        const observerUrl = '<a href="https://observer.com">Observer.com</a>';
        const parsedObserver = yield parseFeedResults(observerPressFeed, observerUrl);
        // observer
        const roiNJPressFeed = yield parser.parseURL('https://www.roi-nj.com/feed');
        const roiNJUrl = '<a href="https://observer.com">ROI-NJ.com</a>';
        const parsedRoiNJ = yield parseFeedResults(roiNJPressFeed, roiNJUrl);
        const feed = [
            ...parsedNjBizGov,
            ...parsedNjBizHealth,
            ...parseNorthJerseyHealth,
            ...parseAsburyParkPress,
            ...parsedObserver,
            ...parsedRoiNJ,
        ];
        // sort feed articles by date
        yield feed.sort((a, b) => {
            const dateA = new Date(a.isoDate);
            const dateB = new Date(b.isoDate);
            return dateB - dateA;
        });
        if (feed.length > 0) {
            res.send(feed);
        }
    }
    catch (err) {
        if (err) {
            res.send(err);
        }
    }
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=server.js.map