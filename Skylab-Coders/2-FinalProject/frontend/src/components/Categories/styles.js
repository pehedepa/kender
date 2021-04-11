import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottomColor: ThemeVars.BORDER_COLOR,
    borderBottomWidth: 1,
    paddingHorizontal: ThemeVars.CONTAINER_PADDING,
    paddingVertical: 15
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'contain'
  },
  text: {
    textAlign: 'center',
    paddingTop: 5,
    fontFamily: ThemeVars.FONT_FAMILY_LIGHT
  }
})

export default styles
