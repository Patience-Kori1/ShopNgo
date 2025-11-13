import { StyleSheet, Text, View, Platform} from 'react-native'
import React from 'react'
import {AppColors} from '@/constants/theme'
import { SafeAreaView } from 'react-native-safe-area-context'

//sert de conteneur sur pour l'affichage
const Wrapper = ({children}: {children:React.ReactNode}) => {
  return (
    // Prend en compte la zone à éviter sur les différents appareils
    <SafeAreaView style={styles.safeView}>
        {/* Vue principale contenant le contenu enfant */}
        <View style={styles.container}>
            {children}
            {/* Affiche dynamiquement tout ce que le wrapper enveloppe */}
        </View>
    </SafeAreaView>
  )
}

export default Wrapper

const styles = StyleSheet.create({
    safeView : {
        flex:1,
        backgroundColor : AppColors.background.primary,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    container : {
        flex:1,
        backgroundColor : AppColors.background.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})