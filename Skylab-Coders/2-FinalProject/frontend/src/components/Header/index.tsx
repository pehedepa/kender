import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native'
import { applyFilter } from '../../redux/actions/actionCreators'
import HamburguerModal from '../Header/Hamburguer'
import styles from './styles'

function Header ({ navigation, userObject, productList, actions }: any): any {
  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState('')
  const [keywordArr, setKeywordArr] = useState([])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  function keywordSearch () {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].keywords.includes(search.toLowerCase())) {
        keywordArr.push(productList[i])
      }
    }

    if (keywordArr.length === 0) {
      alert('No matches were found')
    } else {
      actions.applyFilter(keywordArr)
      setKeywordArr([])
    }
  }

  useEffect(() => {
    if (showModal === true) {
      toggleModal()
    }
  }, [showModal])

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Image
            style={styles.search}
            source={require('../../assets/icons/search.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={text => setSearch(text)}
            value={search}
            onSubmitEditing={() => keywordSearch()}
          />
        </View>

        <TouchableOpacity onPress={() => toggleModal()}>
          <Image
            style={styles.menu}
            source={require('../../assets/icons/menu.png')}
          />
        </TouchableOpacity>

        <HamburguerModal status={showModal} navigation={navigation} userObject={userObject}/>
      </View>
    </>
  )
}

function mapStateToProps (state): { userObject: {}, productList: [] } {
  return {
    userObject: state.userObject,
    productList: state.productList
  }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ applyFilter }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
