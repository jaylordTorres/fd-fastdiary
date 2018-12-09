import React, { PureComponent } from 'react'
import ImageBrowser from 'react-native-interactive-image-gallery'
import { View, Card, CardItem, Container, Content, Footer, FooterTab, Button, Icon, Text, Title, DeckSwiper } from 'native-base'
import { util } from './../../../service/api'
import { metrics } from './../../../style/global'
import { PicConfig } from './../../../constant'
import styles from './../style'
import { Loading } from './../../../shared'

class PicBox extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
      list: [],
      page: 0
    }
    this._back = this._back.bind(this)
    this._next = this._next.bind(this)
  }

  componentDidMount () {
    this.loadImage(this.state.page)
  }

  loadImage (page) {
    const start = PicConfig.PER_PAGE_COUNT * page
    const end = PicConfig.PER_PAGE_COUNT + start
    // validate if pasive
    if(this.props.imageList.length < end || start < 0) {
      // not valid range
      return null
    }
    const list = this.props.imageList.slice(start, end).map((img, index) =>(
      {
        URI: util.createUriPicsum(metrics.doubleWidth, metrics.doubleHeight, img.id),
        thumbnail: util.createUriPicsum(200, 200, img.id),
        id: String(img.id),
        title: img.author,
        description: `author url: ${img.author_url}`
      }
    ))
    this.setState({list, page})
  }

  _next () {
    this.loadImage(this.state.page + 1)
  }

  _back () {
    this.loadImage(this.state.page - 1)
  }

  render() {
    const { wallQuote, imageList, uriPicsum } = this.props
    const { list } = this.state

    return (
      <Container style={styles.container}>
        <ImageBrowser images={list} />
        <Footer>
          <FooterTab>
            <Button onPres s={this._back}>
              <Icon name="arrow-back" />
            </Button>
            <Button>
            </Button>
            <Button onPress={this._next}>
              <Icon name="arrow-forward" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PicBox
