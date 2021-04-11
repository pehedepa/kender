import { useIsFocused } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, StatusBar, FlatList, ImageBackground, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { AppStyles } from '../../styles/theme.styles'

function Products ({ listItems, productList, navigation }: any): any {
  const isFocused = useIsFocused()
  useEffect(() => {

  }, [isFocused, productList])

  const Item = ({ singleProduct }: any) => (
    <View style={[styles.card, AppStyles.shadow]}>
    <TouchableOpacity
      style={styles.cardImage}
      onPress={() => { navigation.navigate('Detail', { singleProduct }) }}
      >
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: `data:image/jpg;base64,${singleProduct.image}` }}>
        </ImageBackground>
    </TouchableOpacity>
    <View>
      <Text style={styles.text}>{singleProduct.name}</Text>
      <Text style={styles.price}>{singleProduct.price}€</Text>
    </View>
    </View>
  )

  const renderItem = ({ item }) => (
    <Item singleProduct={item}/>
  )

  return (
      <>
        <StatusBar hidden />
        <View style={styles.container}>
        {Boolean(listItems.length) && (
          <FlatList
            numColumns={2}
            data={listItems}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        )}
        </View>
      </>
  )
}

function mapStateToProps (state): { productList: any[] } {
  return { productList: state.productList }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
