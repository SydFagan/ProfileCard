//import { Image } from 'expo-image';
import { StyleSheet, View, Text, Image } from 'react-native';

//import { HelloWave } from '@/components/hello-wave';
//import ParallaxScrollView from '@/components/parallax-scroll-view';
//import { ThemedText } from '@/components/themed-text';
//import { ThemedView } from '@/components/themed-view';
//import { Link } from 'expo-router';
/*make my pfp bald me*/
export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      
       <Image
                source={require('@/assets/images/Pfp.jpeg')}
                style={{ width: 200, height: 200, alignSelf: 'center',
                  borderRadius: 30,
                 }}
              />
  <Text style={styles.name}>Sydney Fagan</Text>
    <View style={styles.facts}>
 <Text style={styles.bio}> It's nice to meet you! A little about me: I'm a senior at IU Indianapolis, majoring in MAS and minoring in Informatics. I love to read, play video games, and spend time with my cats. I also enjoy learning new things and practicng my barista skills.
  </Text>
   <Text style={styles.fact}>• Every year I go white water kayaking in Tennessee with my dad! It's been a tradition since I was little.</Text>
   <Text style={styles.fact}>• In my free time I help out at my local stables in exchange for riding lessons. I one day want to have my own little farm. </Text>
    <Text style={styles.fact}>• I also do a ton of baking, my parents and boyfriend are my personal taste testers. Especially before the treats disperse among friends and coworkers. </Text>
    <Text style={styles.fact}>• I'm not actually bald! </Text>
</View>
      </View>
            </View>

  );
}

const styles = StyleSheet.create({
facts: {
width:"100%",
gap: 5,

},

fact: {
fontSize: 15,

},

bio: {
fontSize: 16,
textAlign: 'center',
marginBottom:15,
},

container: {
  flex: 1,
  backgroundColor: '#d5d5c5',
  alignItems: 'center',
  justifyContent: 'center',
},

  name: {
    color: '#666',
    marginBottom:10,
    fontSize: 24,
    fontWeight: 'bold',

  },
  
card: {
  width:300,
  backgroundColor: '#fff',
  padding:20,
  borderRadius:15,
  alignItems: 'center',
},

profileImage: {
  width:120,
  height:120,
  borderRadius:60,
  marginBottom:15,

},

});
