import React from 'react';
import {Image, Modal, View} from 'react-native';
import {ViewPagerAndroid} from '@react-native-community/viewpager';
import ImageViewer from 'react-native-image-zoom-viewer';

export class MyImage extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true,
      image: null,
      onPageSelected: true,
    };
  }

  render() {
    // let pages = [];
    // pages.push(
    //   <View key={0} collapsable={false}>
    //     <Image source={{uri: this.state.image[0]}} />
    //   </View>,
    // );
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
      // <Modal
      //   visible={this.state.modalVisible}
      //   transparent={true}
      //   onRequestClose={() => this.setState({modalVisible: false})}>
      //   <ImageViewer imageUrls={this.state.image} index={0} />
      // </Modal>
      // <ViewPagerAndroid
      //   //style={styles.viewPager}
      //   initialPage={0}
      //   onPageSelected={this.onPageSelected}
      //   ref={(viewPager) => {
      //     this.viewPager = viewPager;
      //   }}>
      //   {pages}
      // </ViewPagerAndroid>
    );
    }
  }
}
