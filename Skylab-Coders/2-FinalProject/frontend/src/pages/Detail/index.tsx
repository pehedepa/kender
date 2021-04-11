import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteProduct, getAllProducts } from '../../redux/actions/actionCreators'
import { View, Text, ImageBackground, Button, Alert } from 'react-native'
import { AppStyles, ThemeVars } from '../../styles/theme.styles'
import styles from './styles'

function Detail ({ navigation, route, userObject, actions }: any): any {
  const { singleProduct } = route.params
  const { description, image, name, user, category, ageRange, price, _id } = singleProduct

  function redirectToDashboard (_id) {
    actions.deleteProduct(_id)
    actions.getAllProducts()
    navigation.navigate('Dashboard')
  }

  function buyProduct () {
    if (!userObject.cc || !userObject.address) {
      Alert.alert(
        'Missing critical information.',
        'Please complete your profile information with a valid address and your Credit Card number in order to be able to make purchases.'
      )
      return
    }
    Alert.alert(
      `${name} for ${price} €`,
      `${userObject.name}, you're about to be charged the total amount to your CC\n\n${userObject.cc}\n\nThe package will be sent to: \n\n${userObject.address}\n${userObject.location}.\n\nDo you wish to proceed?`,
      [
        {
          text: 'Im having second thoughts',
          style: 'cancel'
        },
        { text: 'Purchase', onPress: () => redirectToDashboard(_id) }
      ]
    )
  }

  return (
    <View style={[AppStyles.container, AppStyles.bgGray]}>
    <View style={styles.amaia}>
      <Text style={AppStyles.subTitle}>{name}</Text>
      <View style={styles.row}>
          <Text style={styles.subtitle}>{category}</Text>
          <Text style={styles.subtitle}>{ageRange}</Text>
      </View>

      <View style={styles.wrapper}>
        <ImageBackground
          style={AppStyles.imageBackground}
          source={{ uri: `data:image/jpg;base64,${image}` }}
        />
      </View>
      <View style={styles.aligned}>
        <Text></Text>
        <Text style={styles.seller}>Seller:   {user?.name}</Text>
        <Text style={styles.seller}>Price:   {price} €</Text>
        <Text></Text>
        <Text style={styles.subtitle}>{description}</Text>
        <Text></Text>
      </View>
      <View style={AppStyles.fullWidth}>
        <Button
          testID='BuyProduct'
          color={ThemeVars.PRIMARY_COLOR}
          title='Buy Product'
          onPress={() => buyProduct()}
        />
      </View>
    </View>
  </View>
  )
}

function mapStateToProps (state): { userObject: any[] } {
  return {
    userObject: state.userObject
  }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ deleteProduct, getAllProducts }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
