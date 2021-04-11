import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 65,
    backgroundColor: ThemeVars.PRIMARY_COLOR,
    paddingHorizontal: ThemeVars.CONTAINER_PADDING

  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: ThemeVars.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 5
  },
  search: {
    marginLeft: 10,
    width: 20,
    height: 20
  },
  menu: {
    marginLeft: 20,
    width: 26,
    height: 26
  }
})

export default styles
