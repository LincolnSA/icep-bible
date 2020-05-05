import React from 'react';
import { Share, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bible from '../../services/bible.json';

import {
    Container,
    Title,
    Verse,
    Reference,
    ButtonContainer,
    ButtonText
} from './styles';

export default function DailyVerse() {
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }
    /**
     * Handle verses to share
     */
    async function handleShareVerse(verse, reference) {
        const msg = `*Bíblia ICEP*\n\n${verse}\n\n${reference} `;

        try {

            await Share.share({
                message: msg,
            });

        } catch (error) {
            alert("Erro ao compartilhar");
        }

    }

    /**
     * function that generates verses
     */
    function renderDailyVerse() {

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(0);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const book = getRandomIntInclusive(0, 65);
        const chapter = getRandomIntInclusive(0, (bible[book].chapters.length - 1));
        const verse = getRandomIntInclusive(0, (bible[book].chapters[chapter].length - 1));

        const msg = bible[book].chapters[chapter][verse];
        const ref = ` ${bible[book].name} ${chapter + 1}:${verse + 1}`;

        return (
            <TouchableOpacity
                onLongPress={() => handleShareVerse(msg, ref)}
                activeOpacity={0.85}
            >
                <Verse>{msg}</Verse>
                <Reference>{ref}</Reference>

            </TouchableOpacity>
        );
    }


    return (
        <Container>
            <Title>
                Versículo Diário
            </Title>

            {
                renderDailyVerse()
            }

            <ButtonContainer
                onPress={handleNavigateToHome}
            >
                <ButtonText>Ir para bíblia</ButtonText>
            </ButtonContainer>

        </Container>
    );
}
