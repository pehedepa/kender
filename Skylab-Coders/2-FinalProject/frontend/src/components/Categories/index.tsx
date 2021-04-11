import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { toys, clothes, other, books } from '../../constants'
import { bindActionCreators } from 'redux'
import { applyFilter, getAllProducts, cleanFilters } from '../../redux/actions/actionCreators'
import styles from './styles'

function Categories ({ productList, actions }: any): any {
  function filterByCategory (category: string | null) {
    const resultArray: any[] = productList.filter(item => item.category === category)
    if (category === null) {
      actions.cleanFilters()
    } else {
      actions.applyFilter(resultArray)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID='Toys'
        onPress={() => filterByCategory(toys)}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/icons/cat_toys.png')}
        />
        <Text style={styles.text}>Toys</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID='Clothes'
        onPress={() => filterByCategory(clothes)}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/icons/cat_clothes.png')}
        />
        <Text style={styles.text}>Clothes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID='Books'
        onPress={() => filterByCategory(books)}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/icons/cat_books.png')}
        />
        <Text style={styles.text}>Books</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID='Other'
        onPress={() => filterByCategory(other)}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/icons/cat_accessories.png')}
        />
        <Text style={styles.text}>Other</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID='All'
        onPress={() => filterByCategory(null)}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/icons/filter.png')}
        />
        <Text style={styles.text}>See All</Text>
      </TouchableOpacity>
    </View>
  )
}

function mapStateToProps (state) {
  return { productList: state.productList }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ applyFilter, cleanFilters, getAllProducts }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
