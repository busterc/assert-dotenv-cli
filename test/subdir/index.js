'use strict';

var exec = require('child_process').exec;
var cli = require('path').resolve(__dirname, '../../index.js');
var test = require('tape');

test('should see process.env.FTW_1df2be9b-ddda-47c8-928d-d18b4481f63d', t => {
  t.plan(1);
  exec(`node ${cli} env | grep FTW_1df2be9b-ddda-47c8-928d-d18b4481f63d`, {
    cwd: __dirname
  }, (error, stdout, stderr) => {
    // const trimmed = stdout.replace(/\r?\n?/g, '');
    // t.equal(trimmed, 'FTW_1df2be9b-ddda-47c8-928d-d18b4481f63d=For The Win!!!');
    t.ok(stdout.match('FTW_1df2be9b-ddda-47c8-928d-d18b4481f63d=For The Win!!!'));
  });
});


test('should NOT see process.env.WTF_1df2be9b-ddda-47c8-928d-d18b4481f63d', t => {
  t.plan(1);
  exec(`node ${cli} env | grep WTF_1df2be9b-ddda-47c8-928d-d18b4481f63d`, {
    cwd: __dirname
  }, (error, stdout, stderr) => {
    t.notOk(stdout);
  });
});

test('should see process.env.FTW_dc6d4ce2-e3bd-44d2-854c-f2dff714c810', t => {
  t.plan(1);
  exec(`node ${cli} --dotenv-file specific.env --assert-file specific.assert.env env | grep FTW_dc6d4ce2-e3bd-44d2-854c-f2dff714c810`, {
    cwd: __dirname
  }, (error, stdout, stderr) => {
    // const trimmed = stdout.replace(/\r?\n?/g, '');
    // t.equal(trimmed, 'FTW_dc6d4ce2-e3bd-44d2-854c-f2dff714c810=FO THA WEEN');

    t.ok(stdout.match('FTW_dc6d4ce2-e3bd-44d2-854c-f2dff714c810=FO THA WEEN'));
  });
});

test('should NOT see process.env.FTW_1df2be9b-ddda-47c8-928d-d18b4481f63d', t => {
  t.plan(1);
  exec(`node ${cli} --dotenv-file specific.env --assert-file specific.assert.env env | grep FTW_dc6d4ce2-e3bd-44d2-854c-f2dff714c810`, {
    cwd: __dirname
  }, (error, stdout, stderr) => {
    t.notOk(stdout.match('FTW_1df2be9b-ddda-47c8-928d-d18b4481f63d'));
  });
});
