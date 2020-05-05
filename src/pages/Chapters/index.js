import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  Title,
  BoxContainer,
  BoxText
} from './styles';

export default function Chapters() {
  const navigation = useNavigation();
  const route = useRoute();

  const { chapters, name } = route.params.selectedBook;

  function handleGoBack() {
    navigation.navigate("Home");
  }

  function handleNavigateVerses(index) {

    const data = {
      name,
      numberChapter: index + 1,
      selectedChapter: chapters[index]
    }
    navigation.navigate("Verses", { data });
  }

  return (
    <Container>

      <IconContainer
        onPress={handleGoBack}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
      </IconContainer>

      <Title>{name}</Title>

      <FlatList
        numColumns="5"
        showsVerticalScrollIndicator={false}

        data={chapters}
        keyExtractor={id => String(id)}
        renderItem={({ item, index }) => (
          <BoxContainer
            onPress={() => handleNavigateVerses(index)}
            activeOpacity={0.85}
          >
            <BoxText>{index + 1}</BoxText>
          </BoxContainer>
        )}

      />

    </Container>
  );
}
