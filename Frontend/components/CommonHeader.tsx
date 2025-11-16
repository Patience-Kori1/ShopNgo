import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { AppColors } from '@/constants/theme';

const CommonHeader = () => {
  return (
    <View>
      <Text>CommonHeader</Text>
    </View>
  )
}

export default CommonHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 16,
        zIndex: 10,
        marginTop: Platform.OS === "android" ? 35 : 0,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.background.secondary,
    },
    favoriteButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: AppColors.background.secondary,
    },
    activeFavoriteButton: {
        backgroundColor: AppColors.error
    },
    buttonView: {
        flexDirection: 'row',
        gap: 7,
    }
})