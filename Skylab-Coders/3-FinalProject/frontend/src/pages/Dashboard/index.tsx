import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllProducts } from '../../redux/actions/actionCreators'
import Header from '../../components/Header'
import Products from '../../components/Products'
import Categories from '../../components/Categories'
import Loading from '../../components/Loading'
import styles from './styles'
import { AppStyles } from '../../styles/theme.styles'

function Dashboard ({ navigation, productList, filteredProducts, actions }: any): any {
  useEffect(() => {
    actions.getAllProducts()
  }, [filteredProducts])

  return (
    <>
        <Header navigation={navigation} />
        <Categories />
        <Text style={styles.title}>LATEST PRODUCTS UPLOADED</Text>
        <View style={[AppStyles.container, styles.container, AppStyles.bgGray]}>
        {Boolean(!productList.length) && (
          <Loading />
        )}
          <Products listItems={(productList.length && !filteredProducts.length) ? productList : filteredProducts} navigation={navigation}/>
        </View>
      </>
  )
}

function mapStateToProps (state): { productList: any[], filteredProducts: any[] } {
  return {
    productList: state.productList,
    filteredProducts: state.filteredProducts
  }
}

function mapDispatchToProps (dispatch): { actions: any } {
  return {
    actions: bindActionCreators({ getAllProducts }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
