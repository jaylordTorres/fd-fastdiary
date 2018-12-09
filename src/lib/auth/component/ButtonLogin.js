import React from 'react'
import { Button, Text } from 'native-base'
import Loading from './../../../shared/Loading'

export default ({visible=true, loading, ...props}) => {
	if (loading) {
    return <Loading />
  }

	if (visible) {
		return <Button full {...props}><Text>login</Text></Button>
	}

	return null
}
