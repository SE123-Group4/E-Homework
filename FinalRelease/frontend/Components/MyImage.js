import React from 'react';
import {Image} from 'react-native';

export class MyImage extends React.Component {
  // constructor() {
  //   super();
  // }
  //

  render() {
    if (
      this.props.source === null ||
      this.props.source === '' ||
      this.props.source === undefined
    ) {
      console.log('image null');
      return null;
    } else {
      return (
        <Image
          source={{uri: this.props.source}}
          style={{width: this.props.width, height: this.props.height}}
        />
      );
    }
  }
}
