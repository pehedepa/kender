import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(255, 152, 143, 1)',
    borderRadius: 200,
    borderColor: ThemeVars.BORDER_COLOR,
    padding: 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    borderRadius: 200
  }
})

export default styles
