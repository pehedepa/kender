import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: ThemeVars.CONTAINER_PADDING
  },
  flatlistContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  avatar: {
    margin: 5,
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  icon: {
    maxHeight: 25,
    resizeMode: 'contain'
  },
  subTitle: {
    color: ThemeVars.DARK_COLOR,
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    fontSize: 14,
    marginVertical: 10
  },
  input: {
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    borderRadius: 5,
    marginBottom: 5,
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
    marginBottom: 5,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: ThemeVars.BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 2,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderLeftWidth: 4,
    borderColor: ThemeVars.PRIMARY_COLOR
  },
  text: {
    fontFamily: ThemeVars.FONT_FAMILY_LIGHT,
    paddingLeft: 10
  }
})

export default styles
