import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: 200,
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 8,
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
    resizeMode: 'contain'
  },
  text: {
    fontFamily: 'MontserratMedium',
    borderRadius: 5,
    height: 40,
    width: 250,
    paddingLeft: 8,
    borderColor: '#000000',
    backgroundColor: '#f5e7df'
  },
  multiline: {
    fontFamily: 'MontserratMedium',
    borderRadius: 5,
    height: 90,
    width: 250,
    paddingLeft: 8,
    borderColor: '#000000',
    backgroundColor: '#f5e7df',
    textAlignVertical: 'top',
    maxHeight: 150
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 16
  },
  separator: {
    padding: 5
  }
})

export default styles
