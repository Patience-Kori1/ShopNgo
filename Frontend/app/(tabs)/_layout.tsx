import { Tabs } from 'expo-router';
import React from 'react';
import {Ionicons, Foundation, Feather} from '@expo/vector-icons'
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  // Détection du mode 'light' ou 'dark' pour adapter les couleurs des tabs
  const colorScheme = useColorScheme();

  return (
    // <Tabs />
    // Définition de la barre d’onglets principale de l’app
    <Tabs
    // Options générales pour l’ensemble des onglets
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      {/* Onglet Boutique (Shop), icône chariot */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      {/* Onglet Boutique (Shop), icône chariot */}
      <Tabs.Screen
        name="shop"
        options={{
          title: 'shop',
          tabBarIcon: ({ color }) => (
            <Foundation size={28} name="shopping-cart" color={color} />
        ),
        }}
      />
      {/* Onglet Profil (Profile), icône utilisateur */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="user" color={color} />
        ),
        }}
      />

      {/* Les onglets suivants sont masqués du tab bar mais accessibles via navigation */}
      <Tabs.Screen name="search" options={{href:null }}/>
      <Tabs.Screen name="favorites" options={{href:null }}/>
      <Tabs.Screen name="cart" options={{href:null }}/>
      <Tabs.Screen name="product/[id]" options={{href:null }}/>
      <Tabs.Screen name="login" options={{href:null }}/>
      <Tabs.Screen name="signup" options={{href:null }}/>
    </Tabs>
  );
}
