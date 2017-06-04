import React, { Component } from 'react';
import _ from 'lodash';
import BlogItem from '../ui/BlogItem';


const blog_items = [
  {
    src: 'http://lorempixel.com/200/200',
    description: 'Blog 1'
  },
  {
    src: 'http://lorempixel.com/200/100',
    description: 'Blog 2'
  },
  {
    src: 'http://lorempixel.com/200/50',
    description: 'Blog 3'
  }
];

class BlogList extends React.Component {
  render() {
    return React.DOM.ul(
      null,
      _.map(
        blog_items,
        (item, key) => (
          <li key={key}><BlogItem src={item.src} description={item.description} /></li>
        )
      )
    )
  }
}

export default BlogList;
