import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, TextInput, Button, ImageBackground, StatusBar, Text, Alert } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { uploadProduct, cleanProductUploaded, getAllProducts } from '../../redux/actions/actionCreators'
import * as ImagePicker from 'expo-image-picker'
import { AppStyles, ThemeVars } from '../../styles/theme.styles'
import styles from './styles'

const Separator = () => (
  <View style={styles.separator} />
)

function CreateAd ({ navigation, statusProductUploaded, userObject, actions }: any): any {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState('')
  const [ageRange, setAgeRange] = useState('')

  useEffect(() => {
    if (statusProductUploaded === 200) {
      actions.getAllProducts()
      navigation.navigate('Dashboard')
      actions.cleanProductUploaded()
    } else if (statusProductUploaded === 401) {
      Alert.alert('There was an error posting this AD')
      actions.cleanProductUploaded()
    }
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!')
      }
    })()
  }, [statusProductUploaded])

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2
    })

    if (!result.cancelled) {
      setImage(result)
    }
  }

  const checkTextInput = () => {
    if (!item) {
      Alert.alert('Please enter an Item Name')
      return
    }
    if (!price) {
      Alert.alert('Please enter a Price')
      return
    }
    if (!description) {
      Alert.alert('Please enter a Description')
      return
    }
    if (!image) {
      Alert.alert('Please upload an Image')
      return
    }
    if (!category) {
      Alert.alert('Please select a Category')
      return
    }
    if (!ageRange) {
      Alert.alert('Please select an Age Range')
      return
    }
    const keywords = item.toLowerCase().split(' ')
    actions.uploadProduct(item, price, description, image?.base64, userObject?._id, category, ageRange, keywords)
  }

  return (
      <>
        <StatusBar hidden />
        <View style={[AppStyles.container, AppStyles.bgGray]}>
          <Text style={AppStyles.title}>Publish New Product</Text>
          <Separator />
          <View style={styles.wrapper}>
            {image && <ImageBackground source={{ uri: image.uri }} style={styles.imageBackground}/>}
          </View>
          <Separator />
          <Button
            color={ThemeVars.SECONDARY_COLOR}
            title='Upload Image'
            onPress={openGallery}
          />
          <Separator />
          <TextInput style={styles.text} placeholder='Item Name'
            onChangeText={text => setItem(text)}
            value={item}
          />
          <Separator />
          <TextInput style={styles.text} placeholder='Price'
            keyboardType='number-pad'
            maxLength={6}
            onChangeText={text => setPrice(text)}
            value={price}
          />
          <Separator />
          <TextInput style={styles.multiline}
            placeholder='Description'
            maxLength={250}
            autoCapitalize='sentences'
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setDescription(text)}
            value={description}
            />
          <Separator />
          <RNPickerSelect
        style={ { inputAndroid: { backgroundColor: '#f5e7df', margin: 5, color: 'black', width: 250, height: 40, alignSelf: 'center' } }}
                placeholder={{ label: 'Select a Category...', value: null }}
                onValueChange={(value) => setCategory(value)}
                items={[
                  { label: 'Toys', value: 'Toys' },
                  { label: 'Clothes', value: 'Clothes' },
                  { label: 'Books', value: 'Books' },
                  { label: 'Other', value: 'Other' }
                ]}
             />
          <RNPickerSelect
          style={ { inputAndroid: { backgroundColor: '#f5e7df', color: 'black', width: 250, height: 40, alignSelf: 'center' } }}
                placeholder={{ label: 'Specify an age Range', value: null }}
                onValueChange={(value) => setAgeRange(value)}
                items={[
                  { label: '0-6 months', value: '0-6 months' },
                  { label: '6-12 months', value: '6-12 months' },
                  { label: '1-2 years', value: '1-2 years' },
                  { label: '2-4 years', value: '2-4 years' }
                ]}
            />
          <Separator />
          <View style={AppStyles.fullWidth}>
            <Button
              testID='Publish'
              color={ThemeVars.PRIMARY_COLOR}
              title='Publish Product'
              onPress={ () => checkTextInput() }
            />
          </View>
          <Separator />
        </View>

      </>
  )
}

function mapStateToProps (state): { statusProductUploaded: number, userObject: {} } {
  return {
    statusProductUploaded: state.statusProductUploaded,
    userObject: state.userObject
  }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ uploadProduct, cleanProductUploaded, getAllProducts }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd)
