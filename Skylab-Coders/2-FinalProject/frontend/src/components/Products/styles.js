import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    flex: 1,
    maxWidth: '47%',
    borderRadius: 8,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5
  },
  cardImage: {
    width: '100%',
    height: 140
  },
  imageBackground: {
    width: 140,
    height: '100%',
    resizeMode: 'contain'
  },
  price: {
    fontFamily: ThemeVars.FONT_FAMILY_LIGHT,
    color: ThemeVars.GRAY_COLOR,
    marginTop: 5
  },
  text: {
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    color: ThemeVars.DARK_COLOR,
    marginTop: 10
  }
})

export default styles
