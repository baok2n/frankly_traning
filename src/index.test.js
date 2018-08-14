import {expect} from 'chai';
import jsdom from'jsdom';
import fs from 'fs';
import Hello from './index.js'; // eslint-disable-line no-unused-vars
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  });
});

describe('When testing Hello', () => {
  let result;

  beforeAll(() => {
    const moment = new Data(1454000043);
    result = Hello({now: moment.toISOString()});
  })

  it('return a value', () => {
    expect(result).not.toBeNull();
  })

  it('is a h1', () => {
    expect(result.type).toBe('h1');
  })

  // it('return a value', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Hello now={new Date().toISOString()} />, div);
  // })
});