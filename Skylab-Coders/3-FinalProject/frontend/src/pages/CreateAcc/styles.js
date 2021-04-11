import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
  row: {
    flexDirection: 'row',
    padding: 10
  },
  icon: {
    maxHeight: 25,
    resizeMode: 'contain'
  }
})

export default styles
