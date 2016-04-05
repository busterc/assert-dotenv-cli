#!/usr/bin/env node

'use strict';

const spawn = require('child_process').spawn;
const assertDotenv = require('assert-dotenv');
const meow = require('meow');

const cli = meow(`

  Usage

    $ assert-dotenv [options] <command with arguments>

  Options

    --dotenv-file <file>    dotenv file to load settings
    --assert-file <file>    assert file to test settings
    --help                  shows usage help

`);

const dotenvFile = cli.flags.dotenvFile || '.env';
const assertFile = cli.flags.assertFile || 'assert.env';

// stip away assert-dotenv arguments
const args = (function () {
  let x = 2;
  if (cli.flags.dotenvFile) {
    x += 2;
  }
  if (cli.flags.assertFile) {
    x += 2;
  }
  return process.argv.slice(x);
})();

assertDotenv({
  dotenvFile: dotenvFile,
  assertFile: assertFile
}, function (error) {
  if (error) {
    throw error;
  }
  spawn(args[0], args.slice(1), {
    stdio: 'inherit'
  });
});
