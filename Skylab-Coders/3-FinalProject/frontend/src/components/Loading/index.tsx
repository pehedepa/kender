import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: ThemeVars.BG_COLOR,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})

export default function Loading () {
  return (
    <>
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color={ThemeVars.BLUE_COLOR} />
      </View>
    </>
  )
}
