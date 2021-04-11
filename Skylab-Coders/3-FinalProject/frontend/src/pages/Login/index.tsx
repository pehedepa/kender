import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, ImageBackground, TextInput, Button, Image, StatusBar, TouchableOpacity, Text, Alert } from 'react-native'
import { cleanLogin, login } from '../../redux/actions/actionCreators'
import styles from './styles'
import { AppStyles, ThemeVars } from '../../styles/theme.styles'

const Separator = () => (
  <View style={AppStyles.separator} />
)

function LoginView ({ navigation, statusLogin, actions }: any): any {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  useEffect(() => {
    if (statusLogin === 200) {
      navigation.replace('App')
    }
    if (statusLogin === 401) {
      Alert.alert('Wrong Credentials')
    }
    actions.cleanLogin()
    setIsLoading(false)
  })

  const checkTextInput = () => {
    if (!email) {
      Alert.alert('Please enter a valid Email')
      return
    }
    if (!password) {
      Alert.alert('Please enter your password')
      return
    }
    setIsLoading(true)
    actions.login(email, password)
  }

  return (
  <ImageBackground source={require('../../assets/background.png')} style={AppStyles.imageBackground}>
    <StatusBar hidden />
    <View style={AppStyles.container}>
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
        autoCapitalize= 'none'
        maxLength={45}
        placeholder='Password'
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Separator />
      <View style={AppStyles.fullWidth}>
          <Button
            disabled={isLoading}
            color={ThemeVars.PRIMARY_COLOR}
            testID='Login'
            title='Login'
            onPress={() => checkTextInput()}
          />
          <Separator />
          <TouchableOpacity>
              <Text
                style={AppStyles.buttonLink}
                testID='CreateAcc'
                onPress={() =>
                  navigation.navigate('CreateAcc')
                }>Create Account</Text>
            </TouchableOpacity>
      </View>
    </View>
    </View>
  </ImageBackground>
  )
}

function mapStateToProps (state): { statusLogin: number } {
  return { statusLogin: state.statusLogin }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ login, cleanLogin }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
