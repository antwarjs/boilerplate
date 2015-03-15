'use strict';


module.exports = {
  site: {
    output: 'build',
    name: 'Antwar Boilerplate',
    author: {
      name: 'Dr A N Twar',
      email: 'antwar@antwar.com'
    },
    deploy: {
      branch: 'gh-pages',
    },
    theme: {
      name: 'antwar-default-theme',
      navigation: [
        {title: 'Home', path: '/'},
        {title: 'Blog', path: '/blog'}
      ],
      analyticsId: 'UA-XXXXXX-1',
      customStyles: 'specific.scss'
    }
  }
};

