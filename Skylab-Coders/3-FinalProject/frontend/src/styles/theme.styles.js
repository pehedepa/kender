import { StyleSheet } from 'react-native'

export const ThemeVars = {
  CONTAINER_PADDING: 25,
  PRIMARY_COLOR: '#FF988F',
  SECONDARY_COLOR: '#C3635D',
  BLUE_COLOR: '#005C85',
  DARK_COLOR: '#2F2C23',
  GRAY_COLOR: '#979797',
  FONT_FAMILY_MEDIUM: 'MontserratMedium',
  FONT_FAMILY_LIGHT: 'MontserratLight',
  BORDER_COLOR: '#e0e0e0',
  BG_COLOR: '#f7f7f7'
}

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: ThemeVars.CONTAINER_PADDING
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  input: {
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: ThemeVars.BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  inputIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: ThemeVars.BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  inputIcon: {
    flex: 1,
    paddingRight: 8
  },
  separator: {
    marginVertical: 10
  },
  buttonLink: {
    color: ThemeVars.BLUE_COLOR,
    textAlign: 'center'
  },
  fullWidth: {
    width: '100%'
  },
  bgGray: {
    backgroundColor: ThemeVars.BG_COLOR
  },
  shadow: {
    shadowColor: ThemeVars.DARK_COLOR,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 2,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderLeftWidth: 4,
    borderColor: ThemeVars.PRIMARY_COLOR
  },
  title: {
    color: ThemeVars.DARK_COLOR,
    fontFamily: ThemeVars.FONT_FAMILY_LIGHT,
    fontSize: 22,
    marginVertical: 10
  },
  subTitle: {
    color: ThemeVars.DARK_COLOR,
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    fontSize: 18,
    marginVertical: 10
  }
})
