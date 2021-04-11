import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  amaia: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50
  },
  wrapper: {
    width: 250,
    height: 250,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
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
  row: {
    flexDirection: 'row',
    padding: 10
  },
  title: {
    fontFamily: 'OpenSansBold',
    alignSelf: 'center',
    fontSize: 20
  },
  subtitle: {
    paddingHorizontal: 10,
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM
  },
  aligned: {
    justifyContent: 'flex-start',
    width: 250
  },
  seller: {
    fontFamily: 'OpenSansBold',
    paddingHorizontal: 10

  }
})

export default styles
