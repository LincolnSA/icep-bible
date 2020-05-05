import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, Share } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  IconShareContainer,
  Title,
  NumberVerse,
  Verse,
  List,
} from './styles';

export default function Verses() {
  const navigation = useNavigation();

  const route = useRoute();
  const { name, selectedChapter, numberChapter } = route.params.data;

  const [versesForShare, setVersesForShare] = useState([]);

  function handleGoBack() {
    setVersesForShare([]);
    navigation.navigate("Chapters");
  };

  /**
   * takes indexes and groups them to control sharing 
   */
  function handleGetVerseForShare(index) {
    let isIncluded = versesForShare.includes(index);

    if (!isIncluded) {
      setVersesForShare([...versesForShare, index]);
      return;
    }

    let newArray = versesForShare.filter(e => e !== index);
    setVersesForShare(newArray);
  }

  /**
   * stylized all the verses that will be shared
   */
  async function handleShareVerses() {
    const title = "*Bíblia ICEP*\n\n";
    const verse = index => `${index + 1} ${selectedChapter[index].trim()}\n`;

    const arrayVerses = versesForShare.sort();
    const reference = (array) => {
      if (array.length == 1) return array[0] + 1;

      let first = array[0] + 1;
      let last = array[array.length - 1] + 1;

      return `${first}-${last}`;
    };

    let msg = arrayVerses.reduce((result, index) => result + `${verse(index)}`, title);
    msg += `\n${name} ${numberChapter}:${reference(arrayVerses)}`;

    try {

      await Share.share({
        message: msg,
      });

    } catch (error) {
      alert("Erro ao compartilhar");
    }
  }


  return (
    <Container>
      <IconContainer
        onPress={handleGoBack}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
      </IconContainer>

      {

        /**
         * shows the share button
         */
        versesForShare.length != 0 &&
        <IconShareContainer
          onPress={handleShareVerses}
        >
          <Feather name="share-2" size={24} color="#fff" />
        </IconShareContainer>
      }

      <Title>{`${name} ${numberChapter}`}</Title>

      <List>
        {
          selectedChapter.map((verse, index) => (
            <TouchableOpacity
              key={index}
              onLongPress={() => handleGetVerseForShare(index)}
              activeOpacity={0.85}
            >
              {

                /**
                 * conditional selection styles, verses selected
                 */
                versesForShare.includes(index)
                  ?
                  <Verse selected>
                    <NumberVerse selected>{index + 1} </NumberVerse>
                    {verse}
                  </Verse>
                  :
                  <Verse>
                    <NumberVerse>{index + 1} </NumberVerse>
                    {verse}
                  </Verse>
              }

            </TouchableOpacity>
          ))
        }
      </List>

    </Container>
  );
}
