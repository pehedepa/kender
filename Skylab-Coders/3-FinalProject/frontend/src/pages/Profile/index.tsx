import React, { useEffect } from 'react'
import { View, Button, TextInput, Image, FlatList, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteProduct, uploadProfile, getAllProducts } from '../../redux/actions/actionCreators'
import * as ImagePicker from 'expo-image-picker'
import Avatar from '../../components/Avatar'
import { AppStyles, ThemeVars } from '../../styles/theme.styles'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Profile ({ userObject, productList, actions }:any): any {
  const [image, setImage] = React.useState(userObject.photo || null)
  const [name, setName] = React.useState(userObject.name || '')
  const [address, setAddress] = React.useState(userObject.address || '')
  const [cc, setCc] = React.useState(userObject.cc || '')
  const [location, setLocation] = React.useState(userObject.location || '')
  const [switchSecureEntry, setSwitchSecureEntry] = React.useState<boolean>(true)
  const [ownProductsArr, setOwnProductsArr] = React.useState(productList.filter(item => item.user._id === userObject._id) || undefined)

  useEffect(() => {
    setOwnProductsArr(productList.filter(item => item.user._id === userObject._id))
  }, [productList])

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3
    })

    if (!result.cancelled) {
      setImage(result)
    }
  }

  function confirmDeleteProduct (_id) {
    Alert.alert(
      'Delete Product',
      `${userObject.name}, You are about to delete this product from our platform.\n\nDo you want to proceed?`,
      [
        {
          text: 'Im having second thoughts',
          style: 'cancel'
        },
        {
          text: 'DELETE',
          onPress: async () => {
            setOwnProductsArr([])
            await actions.deleteProduct(_id)
            actions.getAllProducts()
          }
        }
      ]
    )
  }
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.flatlistContainer}
        onPress={() => confirmDeleteProduct(item._id)}
      >
        <View style={[styles.card, AppStyles.shadow]}>
        <Image
            style={styles.icon}
            source={require('../../assets/icons/delete.png')}
          />
          <Text style={styles.text}>{item.name}</Text>

        </View>
      </TouchableOpacity>
      </View>
  )

  function updateUserData () {
    if (!address || !cc || !image) {
      Alert.alert(
        'Information required',
        'Please upload a picture, fill out your address and your CC details below'
      )
    } else {
      actions.uploadProfile(userObject._id, image?.base64, name || userObject.name, address, cc.toString(), location || userObject.location)
    }
  }
  return (
    <View style={[AppStyles.container, AppStyles.bgGray]}>
      <Text style={AppStyles.title}>Profile Settings</Text>
      <TouchableOpacity
        style={styles.avatar}
        onPress={openGallery}>
        <Avatar />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        autoCapitalize= 'words'
        maxLength={30}
        placeholder={userObject?.name}
        autoCompleteType={'name'}
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        autoCapitalize= 'words'
        maxLength={30}
        placeholder={userObject?.address || 'Write down your full address'}
        autoCompleteType={'street-address'}
        onChangeText={text => setAddress(text)}
        value={address}
      />

      <TextInput
        style={styles.input}
        autoCapitalize= 'sentences'
        maxLength={25}
        placeholder={userObject?.location || 'Write down your location'}
        autoCompleteType={'off'}
        onChangeText={text => setLocation(text)}
        value={location}
      />

      <View style={styles.inputIconWrapper}>
        <TextInput
          style={AppStyles.inputIcon}
          keyboardType='number-pad'
          autoCapitalize= 'none'
          secureTextEntry={switchSecureEntry}
          maxLength={24}
          placeholder={userObject?.cc || 'Insert your Credit Card details'}
          autoCompleteType={'cc-number'}
          onChangeText={text => setCc(text)}
          value={cc}
        />
        <TouchableOpacity
          onPress = {(() => setSwitchSecureEntry(!switchSecureEntry))}
        >
          <Image style={styles.icon} source={require('../../assets/icons/visibility.png')}></Image>
        </TouchableOpacity >
      </View>

      <Text style={styles.subTitle}>PRODUCTS LISTED:</Text>
        {Boolean(ownProductsArr.length) && (
          <FlatList
            data={ownProductsArr}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        )}
      <View style={AppStyles.fullWidth}>
        <Button
          testID = 'update'
          color={ThemeVars.PRIMARY_COLOR}
          title='Update Profile'
          onPress={() => updateUserData() }
        />
      </View>

    </View>
  )
}

function mapStateToProps (state): { userObject: {}, productList: any[]} {
  return {
    userObject: state.userObject,
    productList: state.productList
  }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ deleteProduct, getAllProducts, uploadProfile }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
