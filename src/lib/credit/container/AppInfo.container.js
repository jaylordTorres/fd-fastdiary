import React, { Component } from 'react'
import { Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Text, Title} from 'native-base'
import { Author, ApiThank, Dependency } from './../component'

class AppInfo extends Component {
  render() {
    return (
    	<Container>
	      <Header>
	        <Body>
	          <Title>Development Info</Title>
	        </Body>
	      </Header>
    	  <Content>
    	  <Author />
    	  <ApiThank />
    	  <Dependency />
    	  </Content>
    	</Container>
    )
  }
}

export default AppInfo;