import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const colors = {
  primary: '#E53935',
  secondary: '#FFD700',
  accent: '#FF6B6B',
  background: '#FFF1F1',
  text: '#333333',
  success: '#4CAF50',
  error: '#F44336',
  darkText: '#121212',
  lightText: '#E0E0E0',
};

const images = {
  logo: require('../../assets/giftify-logo.png'),
  heroBanner: require('../../assets/hero-banner.jpg'),
  mug: require('../../assets/mug.jpg'),
  tshirt: require('../../assets/tshirt.jpg'),
  keychain: require('../../assets/keychain.jpg'),
  frame: require('../../assets/frame.jpg'),
  softtoy: require('../../assets/softtoy.jpg'),
  phonecase: require('../../assets/case.jpg'),
  book: require('../../assets/book.jpg'),
  makeup: require('../../assets/makeup.jpg'),
  neckless: require('../../assets/neckless.jpg')
};

const categories = [
  { id: '1', name: 'Mugs', image: images.mug },
  { id: '2', name: 'T-Shirts', image: images.tshirt },
  { id: '3', name: 'Keychains', image: images.keychain },
  { id: '4', name: 'Photo Frames', image: images.frame },
  { id: '5', name: 'Soft Toys', image: images.softtoy },
  { id: '6', name: 'Phone Cases', image: images.phonecase },
  { id: '7', name: 'Books', image: images.book },
  { id: '8', name: 'Makeup', image: images.makeup },
    { id: '9', name: 'Necklaces', image: images.neckless },
];

const renderCategoryItem = ({ item }) => (
  <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
    <Image source={item.image} style={styles.categoryImageSquare} />
    <Text style={{ color: colors.darkText, marginTop: 5 }}>{item.name}</Text>
  </View>
);

const HomeScreen = () => {
  const logoScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(logoScale, {
      toValue: 1,
      friction: 4,
      tension: 120,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color={colors.darkText} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Animated.View style={{ transform: [{ scale: logoScale }] }}>
            <Image source={images.logo} style={styles.logoImage} resizeMode="contain" />
          </Animated.View>
          <Text style={styles.logoText}>GIFTIFY</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="heart-o" size={24} color={colors.darkText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="shopping-cart" size={24} color={colors.darkText} />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for personalized gifts..."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <AntDesign name="search1" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Hero */}
      <ImageBackground source={images.heroBanner} style={styles.heroBanner} resizeMode="cover">
        <View style={styles.heroOverlay}>
          <Text style={styles.heroText}>Create Memories with{'\n'}Personalized Gifts</Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.categoryList}
        scrollEnabled={false}
      />

      {/* Personalization Steps */}
      <View style={styles.personalizationSection}>
        <Text style={styles.sectionTitle}>Make It Personal</Text>
        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepText}>Choose Product</Text>
          </View>
          <Entypo name="arrow-right" size={24} color={colors.primary} />
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>Upload Design</Text>
          </View>
          <Entypo name="arrow-right" size={24} color={colors.primary} />
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepText}>Add Text</Text>
          </View>
          <Entypo name="arrow-right" size={24} color={colors.primary} />
          <View style={styles.step}>
            <Text style={styles.stepNumber}>4</Text>
            <Text style={styles.stepText}>Preview</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.customizeNowButton}>
          <Text style={styles.customizeNowText}>Start Customizing</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Giftify - Personalized Gift Store</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="facebook" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="instagram" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="twitter" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.background,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: 'serif',
    letterSpacing: 2,
    textShadowColor: '#FFC1C1',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textTransform: 'uppercase',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    paddingLeft: 20,
    color: colors.darkText,
  },
  searchButton: {
    backgroundColor: colors.primary,
    padding: 12,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBanner: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 32,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkText,
    marginTop: 20,
    marginHorizontal: 15,
  },
  categoryImageSquare: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryList: {
    padding: 10,
    paddingHorizontal: 15,
  },
  personalizationSection: {
    padding: 15,
    marginTop: 10,
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  stepText: {
    fontSize: 12,
    color: colors.darkText,
  },
  customizeNowButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  customizeNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
  },
  footerText: {
    color: '#555',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
