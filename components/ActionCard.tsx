import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = async (websiteLink: string) => {
    const supported = await Linking.canOpenURL(websiteLink);

    if (supported) {
      await Linking.openURL(websiteLink);
    } else {
      console.log("Can't open URL:", websiteLink);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>

        {/* Image */}
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/29586317/pexels-photo-29586317.jpeg',
          }}
          style={styles.cardImage}
        />

        {/* Body */}
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings new features. This year
            Javascript introduces 4 new features which are almost ready for
            production rollout. Let's quickly explore them with simple examples.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/awanmistcuber/')
            }
          >
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 6,
  },

  card: {
    width: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
  },

  elevatedCard: {
    backgroundColor: '#E07C24',

    // Android shadow
    elevation: 4,

    // iOS shadow
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  headingContainer: {
    padding: 12,
    alignItems: 'center',
  },

  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  cardImage: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },

  bodyContainer: {
    padding: 12,
  },

  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  socialLinks: {
    fontSize: 14,
    color: '#000',
    backgroundColor: '#FFF',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: '500',
  },
});
