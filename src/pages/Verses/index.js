import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  ShareContainer,
  Title,
  NumberVerse,
  Verse
} from './styles';

export default function Verses() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, selectedChapter, numberChapter } = route.params.data;

  const [msgShare, setMsgShare] = useState([]);


  function handleGoBack() {
    setMsgShare([]);
    navigation.navigate("Chapters");
  };

  /*  
    check and attach selected messages to share in a matrix
  */
  function handleSelectedVerse(verse) {

    if (msgShare.includes(verse)) {
      const filter = msgShare.filter(item => item !== verse);
      setMsgShare(filter);
      return;
    }

    setMsgShare([...msgShare, verse]);
  };

  function handleShareVerses() {
    let msg = ``;
    alert("compartilhar");
  };

  return (
    <Container>
      <IconContainer
        onPress={handleGoBack}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
      </IconContainer>

      {
        /*
          check if you have messages to share
        */
        msgShare != 0 &&
        <ShareContainer
          onPress={handleShareVerses}
        >
          <Feather name="share-2" size={22} color="#fff" />
        </ShareContainer>
      }

      <Title>{`${name} ${numberChapter}`}</Title>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          selectedChapter.map((verse, index) => (
            <Verse
              key={index}
              /* onLongPress={() => handleSelectedVerse(verse)} */
              style={
                msgShare.includes(verse) ? styles.selectedText : {}
              }

            >
              <NumberVerse>{index + 1} </NumberVerse>
              {verse}
            </Verse>
          ))
        }
      </ScrollView>

    </Container>
  );
}

const styles = StyleSheet.create({
  selectedText: {
    color: "#fff",
    backgroundColor: "#360c70",
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 2
  }
});