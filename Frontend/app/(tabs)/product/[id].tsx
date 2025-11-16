import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams,} from 'expo-router';
import CommonHeader from '@/components/CommonHeader';
import { AppColors } from '@/constants/theme';
import { Product } from '@/type';
import { getProduct } from '@/lib/api';

const SingleProductScreen = () => {
    // Récupère l’id du produit via les paramètres de navigation
    const {id} = useLocalSearchParams<{ id: string }>();

    // States locaux : produit, loading, erreur et quantité à acheter
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    // Conversion de l’id en nombre
    const idNum = Number(id);

    // Effet pour charger le produit dès que l’id change
    useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const data = await getProduct(idNum);
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product data');
        console.log('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };
    // fetchProductData();
    if (id) {
      fetchProductData();
    }
    // Recharge le produit quand l'id change
    }, [id]);   
    console.log("Product data: ", product)
  return (
    <View style={styles.headerContainerStyle}>
        <CommonHeader/>
      
        <View style={styles.imageContainer}>
            <Image 
                source={{uri: product?.image}}
                style={styles.productImage}
                resizeMode='contain'
            />
        </View>
        <View style={styles.imageContainer}>
            <Text> Produit numéro : {id}</Text>
            <Text> Catégorie : {product?.category}</Text>
        </View>

    </View>
  )
}

export default SingleProductScreen

const styles = StyleSheet.create({
     headerContainerStyle: {
      paddingTop: 30,
      backgroundColor: AppColors.background.primary,
    },
     productImage: {
      width: "80%",
      height: "80%",
    },
    imageContainer: {
    //   width: width,
    //   height: width, 
      alignItems: "center",
      justifyContent: 'center'   
    },
    footer: {
      position: 'absolute',
      bottom: 50,
      left: 0,
      right: 0,
      backgroundColor: AppColors.background.primary,
      borderTopWidth: 1,
      borderTopColor: AppColors.gray[200],
      paddingHorizontal: 24,
      paddingVertical: 16,
      paddingBottom: 32,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
})