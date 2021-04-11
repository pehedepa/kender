import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, ImageBackground, TextInput, Button, Image, StatusBar, Alert } from 'react-native'
import { createAcc, cleanRegister } from '../../redux/actions/actionCreators'
import { passwordRegex, emailRegex } from '../../constants'
import styles from './styles'
import { AppStyles, ThemeVars } from '../../styles/theme.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Separator = () => (
  <View style={AppStyles.separator} />
)

function CreateAccView ({ navigation, statusRegistered, actions }: any): any {
  const [email, setEmail] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [passwordConfirm, setConfirmPassword] = React.useState<string>('')
  const [location, setLocation] = React.useState<string>('')
  const [switchSecureEntry, setSwitchSecureEntry] = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  useEffect(() => {
    if (statusRegistered === 201) {
      Alert.alert('Account successfuly created')
      navigation.navigate('Login')
    }
    if (statusRegistered === 401 || statusRegistered === 203) {
      Alert.alert('Must use a unique email identifier')
    }
    actions.cleanRegister()
    setIsLoading(false)
  })

  const checkTextInput = () => {
    if (!name) {
      Alert.alert('Please enter your name')
      return
    }
    if (!location) {
      Alert.alert('Please enter a location')
      return
    }
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Please enter a password',
        'Password must contain at least 8 characters, one Capital letter, and one number'
      )
      return
    }
    if (passwordConfirm !== password) {
      Alert.alert('Both Password and confirmed should be the same')
      return
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid Email')
      return
    }
    setIsLoading(true)
    actions.createAcc(email, password, location, name)
  }

  return (
  <ImageBackground source={require('../../assets/background.png')} style={AppStyles.imageBackground}>
    <StatusBar hidden />
    <View style={[AppStyles.container, AppStyles.bgGray]}>
      <View style={styles.main}>
      <Image source={require('../../assets/logo.png')} style={styles.image}></Image>
      <Separator />
        <TextInput
          style={AppStyles.input}
          autoCapitalize= 'none'
          maxLength={30}
          placeholder='Email'
          autoCompleteType={'email'}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={AppStyles.input}
          autoCapitalize= 'words'
          maxLength={30}
          placeholder='Name'
          autoCompleteType={'name'}
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={AppStyles.input}
          autoCapitalize= 'sentences'
          maxLength={20}
          placeholder='Location'
          onChangeText={text => setLocation(text)}
          value={location}
        />
        <View style={AppStyles.inputIconWrapper}>
          <TextInput underlineColorAndroid='transparent'
            style={AppStyles.inputIcon}
            autoCapitalize= 'none'
            maxLength={45}
            placeholder='Password'
            secureTextEntry={switchSecureEntry}
            onChangeText={text => setPassword(text)}
            value={password}
          />

          <TouchableOpacity
            style={styles.icon}
            onPress = {(() => setSwitchSecureEntry(!switchSecureEntry))}
          >
            <Image source={require('../../assets/icons/visibility.png')}></Image>
          </TouchableOpacity >
        </View>
        <TextInput underlineColorAndroid='transparent'
          style={AppStyles.input}
          autoCapitalize= 'none'
          maxLength={45}
          placeholder='Confirm Password'
          secureTextEntry={switchSecureEntry}
          onChangeText={text => setConfirmPassword(text)}
          value={passwordConfirm}
        />
        <Separator />
        <View style={AppStyles.fullWidth}>
          <Button
            disabled={isLoading}
            testID='CreateAccount'
            color={ThemeVars.PRIMARY_COLOR}
            title='Create Account'
            onPress={() => checkTextInput()}
          />
        </View>
        <Separator />
      </View>
    </View>
  </ImageBackground>
  )
}
function mapStateToProps (state): { statusRegistered: number } {
  return { statusRegistered: state.statusRegistered }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ createAcc, cleanRegister }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccView)
