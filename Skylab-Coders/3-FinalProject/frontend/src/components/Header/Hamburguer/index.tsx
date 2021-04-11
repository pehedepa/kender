import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../../redux/actions/actionCreators'
import { View, TouchableOpacity, Text } from 'react-native'
import Modal from 'react-native-modal'
import Avatar from '../../Avatar'
import styles from './styles'

function HamburguerModal ({ status, userObject, navigation, actions }: any): any {
  const [modalVisible, setModalVisible] = useState(status)
  useEffect(() => {
    if (status === true) {
      setModalVisible(!modalVisible)
    }
    if (!userObject) {
      setModalVisible(!modalVisible)
      navigation.replace('Login')
    }
  }, [status, userObject])

  const createAd = () => {
    setModalVisible(!modalVisible)
    navigation.navigate('CreateAd')
  }

  const profile = () => {
    setModalVisible(!modalVisible)
    navigation.navigate('Profile')
  }

  return (
        <View style={styles.centeredView}>
          <Modal
            testID='Modal'
            animationIn='slideInDown'
            animationOut="slideOutUp"
            backdropOpacity={0}
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Avatar />
                <TouchableOpacity
                  testID='Profile'
                  onPress={() => profile()}
                >
                  <Text style={styles.modalText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  testID='CreateAd'
                  onPress={() => createAd()}
                >
                  <Text style={styles.modalText}>Publish Product</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  testID='Logout'
                  onPress={() => actions.logout(userObject?.email, userObject?.password)}
                >
                  <Text style={styles.modalText}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
  )
}

function mapStateToProps (state): { userObject: {} } {
  return { userObject: state.userObject }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ logout }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburguerModal)
