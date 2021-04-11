import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modalView: {
    right: -18,
    top: -120,
    width: '120%',
    height: '80%',
    backgroundColor: 'rgba(255, 152, 143, 1)',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },

    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    borderBottomWidth: 1,
    marginTop: 25,
    paddingBottom: 10,
    width: 180,
    height: 40,
    backgroundColor: 'transparent',
    fontFamily: 'MontserratMedium',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default styles
