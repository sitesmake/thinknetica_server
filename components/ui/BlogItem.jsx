import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

class BlogItem extends React.Component {
  render() {
    return (
      <div>
        <Image src={this.props.src} />
        <TextBox description={this.props.description} />
      </div>
    )
  }
}

export default BlogItem;
