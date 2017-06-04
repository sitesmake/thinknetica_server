import React from 'react';
import ReactDOMServer from 'react-dom/server';

// import Image from './components/ui/Image';
// import TextBox from './components/ui/TextBox';
// import BlogItem from './components/ui/BlogItem';
import BlogList from './components/containers/BlogList';

const result = ReactDOMServer.renderToString(
  // React.createElement(Image, { src: 'http://lorempixel.com/200/100' })
  // React.createElement(TextBox, { description: 'Image is beauty' })
  // React.createElement(BlogItem, { src: 'http://lorempixel.com/20/10', description: 'Image is small' })
  React.createElement(BlogList)
);

// console.log(result);

export default result;
