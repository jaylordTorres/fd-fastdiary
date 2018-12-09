import React, { Component } from 'react'
import { View, Card, CardItem, Container, Content, Footer, Button, Icon, Text, Title, DeckSwiper } from 'native-base'
import { util } from './../../../service/api'
import { Wallpaper } from './../../../shared'
import styles from './../style'

class Swiper extends Component {
  render() {
    const { wallQuote, imageList, uriPicsum } = this.props
    return (
      <Container style={styles.container}>
        <View style={styles.swiper}>
          <DeckSwiper
              dataSource={imageList}
              renderItem={item =>
                <Wallpaper uri={uriPicsum(undefined, undefined, item.id)} />
              } />
        </View>
      </Container>
    );
  }
}

export default Swiper
