'use strict';

var rssPlugin = require('antwar-rss-plugin');

module.exports = {
  output: 'build',
  name: 'Antwar Boilerplate',
  baseUrl: 'https://BOILERPLATE.COM/',
  blogRoot: 'blog',
  author: {
    name: 'Dr A N Twar',
    email: 'antwar@antwar.com'
  },
  deploy: {
    branch: 'gh-pages',
  },
  plugins: [
    rssPlugin
  ],
  theme: {
    name: 'antwar-default-theme',
    navigation: [
      {title: 'Home', path: '/'},
      {title: 'Blog', path: '/blog'}
    ],
    analyticsId: 'UA-XXXXXX-1',
    customStyles: 'specific.scss'
  }
};

