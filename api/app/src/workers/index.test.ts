require('dotenv').config()
import { expect } from 'chai'
import * as url from './urls'
import * as keys from './keys'
import { fetchContent } from './fetch';

describe('check basic api url concatination', () => {
  it('full url concatination is a string', () => {
    const apiUrl = `${process.env.BACKEND_SITE_URL}/${url.ADMIN_ARCHIVE_API_URL}`
    expect(apiUrl).to.be.a('string')
  })
});

describe('check types for common variables', () => {
  it('admin archive url to be a string', () => {
    expect(url.ADMIN_ARCHIVE_API_URL).to.be.a('string')
  });

  it('admin archive key to be a string', () => {
    expect(keys.ADMIN_ARCHIVE_KEY).to.be.a('string')
  })
});


describe('results from fetch', () => {
  it('results are an array type', () => {
    const results = fetchContent(url.ADMIN_ARCHIVE_API_URL , keys.ADMIN_ARCHIVE_KEY);
    expect(results).to.be.a('array')
  })
});


describe('test environment variables', () => {
  it('ADMIN_SITE url', () => {
    // admin site url
    const TEST_ADMIN_SITE = process.env.ADMIN_SITE;
    expect(TEST_ADMIN_SITE).equal('http://wp');
  });
  it('REDIS_PASSWORD', () => {
    // redis password
    const TEST_REDIS_PASSWORD = process.env.REDIS_PASSWORD;
    expect(TEST_REDIS_PASSWORD).equal('abc123');
  });
  it('REDIS_URL', () => {
    // redis url    
    const TEST_REDIS_URL = process.env.REDIS_URL;
    expect(TEST_REDIS_URL).equal('92.242.140.21:6379');
  });
});


