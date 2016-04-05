# assert-dotenv-cli [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> loads and asserts environment settings from dotenv files prior to executing CLI commands

- See [`assert-dotenv`](https://github.com/busterc/assert-dotenv) for more information about the mechanics and reasoning behind this.

## Install

```sh
$ npm install --global assert-dotenv-cli
```

## Usage
```sh
$ assert-dotenv --help

  Usage

    $ assert-dotenv [options] <command with arguments>

  Options

    --dotenv-file <file>    dotenv file to load settings
    --assert-file <file>    assert file to test settings
    --help                  shows usage help

```

## Simple Demo

- ~/app/.env (file contents)

  ```sh
  FTW=For The Win!!!
  ```

- ~/app/assert.env (file contents)

  ```sh
  FTW
  ```

- Examples

  ```sh
  $ cd ~/app

  # first, without using assert-dotenv-cli
  $ env | grep FTW
  #
  # ^ nada

  # then, with assert-dotenv-cli
  $ assert-dotenv env | grep FTW
  # FTW=For The Win!!!
  # ^ tada
  ```

## License

ISC © [Buster Collings](http://about.me/buster)


[npm-image]: https://badge.fury.io/js/assert-dotenv-cli.svg
[npm-url]: https://npmjs.org/package/assert-dotenv-cli
[travis-image]: https://travis-ci.org/busterc/assert-dotenv-cli.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/assert-dotenv-cli
