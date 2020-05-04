import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  Title,
  NumberVerse,
  Verse
} from './styles';

export default function Verses() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, selectedChapter, numberChapter } = route.params.data;


  function handleGoBack() {
    navigation.navigate("Chapters");
  };

  return (
    <Container>
      <IconContainer
        onPress={handleGoBack}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
      </IconContainer>


      <Title>{`${name} ${numberChapter}`}</Title>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          selectedChapter.map((verse, index) => (
            <Verse key={index}>
              <NumberVerse>{index + 1} </NumberVerse>
              {verse}
            </Verse>
          ))
        }
      </ScrollView>

    </Container>
  );
}
