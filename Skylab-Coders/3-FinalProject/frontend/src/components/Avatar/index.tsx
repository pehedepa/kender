import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SvgUri } from 'react-native-svg'
import styles from './styles'

function Avatar ({ userObject }: any) {
  return (
    <>
    {userObject?.photo && (
        <View style={styles.wrapper}>
          <Image source={{ uri: `data:image/jpg;base64,${userObject.photo}` }} style={styles.imageBackground}/>
        </View>
    )}
        {!userObject?.photo && (
        <View style={styles.wrapper}>
          <SvgUri
          style={styles.imageBackground}
          uri= {`https://avatars.dicebear.com/api/jdenticon/${userObject?.name}:seed.svg`}
        />
        </View>
        )}
    </>
  )
}

function mapStateToProps (state): { userObject: {} } {
  return {
    userObject: state.userObject
  }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)
