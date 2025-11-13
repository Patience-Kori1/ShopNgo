import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../HomeHeader';
import { useState} from 'react';
export default function HomeScreen() {
 // State local pour stocker les "produits en vedette"
  const [featuredProducts, setFeaturedProducts] = useState();  
  return (
      <View>
        <HomeHeader/>
      </View>
  
  );
}

const styles = StyleSheet.create({
 
});
