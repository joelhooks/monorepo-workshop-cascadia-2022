const withTM = require('next-transpile-modules')(['react-ui'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
