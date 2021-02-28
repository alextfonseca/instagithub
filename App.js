import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function InstagithubCard({ githubUser }) {
  const [liked, setLikeState] = useState(false)
  const [comment, setCommentState] = useState(false)
  return (
    <View>

      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>

        <Image
          style={{
            marginRight: 15,
            marginTop: 20,
            width: 40,
            height: 40,
            borderRadius: 20
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`
          }}
        />

        <Text style={{ color: 'white', marginTop: 15, fontSize: 15 }}>{githubUser}</Text>

        <Text style={{ color: 'white', marginLeft: 150, fontSize: 20 }}>...</Text>

      </View>


      <View>
        <Image
          style={{
            width: '100%',
            height: 350,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`
          }}
        />
      </View>


      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          {liked && <Ionicons name="ios-heart" size={35} color="red" />}
          {!liked && <Ionicons name="ios-heart-outline" size={35} color="white" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCommentState(!comment)} style={{ marginLeft: 10 }}>
          {comment && <FontAwesome name="comment" size={35} color="white" />}
          {!comment && <FontAwesome name="comment-o" size={35} color="white" />}
        </TouchableOpacity>
      </View>


      <View>
        <Text style={{ color: 'white', margin: 10, fontWeight: 'bold' }}> Curtido por {githubUser} e outras pessoas</Text>
      </View>

      <View>
        <Text style={{ color: 'white', marginLeft: 15, fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus augue, rhoncus vel vehicula bibendum, ultrices sed lectus.</Text>
      </View>


      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>

        <Image
          style={{
            marginRight: 15,
            width: 25,
            height: 25,
            borderRadius: 20
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`
          }}
        />

        <Text style={{ color: 'white', fontSize: 13, opacity: .7 }}>Adicione um comentário... </Text>

      </View >

      <Text style={{ color: 'white', fontSize: 12, opacity: .7, marginLeft: 15 }}>Há 2 horas </Text>
    </View >
  );
}

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        {['Alextfonseca', 'leonardobozzi23', 'caioliveira277', '71M-M414', 'JFaction'].map((githubUser) => <InstagithubCard key={githubUser} githubUser={githubUser} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});