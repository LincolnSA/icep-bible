import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/asa.png';
import api from '../../services/bible.json';

import {
    Container,
    Header,
    Text,
    Img,
    Title,
    SubTitle,
    Input,
    ListBooks,
    ButtomContainer,
    ButtomText,
    Verse

} from './styles';

export default function Home() {
    const navigation = useNavigation();

    const [bible, setBible] = useState(api);
    const [search, setSearch] = useState('');

    useEffect(() => {
        function handleSearch() {
            if (search != '') {
                const filter = bible.filter(book => book.name.includes(search));
                setBible(filter);
                return;
            }
            setBible(api);
        };

        handleSearch();
    }, [search]);

    function handleNavigateToChapter(abbrev) {
        const selectedBook = (bible.filter(book => book.abbrev.includes(abbrev)))[0];

        setBible(api);
        setSearch('');
        navigation.navigate("Chapters", { selectedBook });
    }

    function renderBooks() {
        return (
            <ListBooks>
                {
                    bible.map((book, index) => (
                        <ButtomContainer
                            key={index}
                            onPress={() => handleNavigateToChapter(book.abbrev)}
                        >
                            <ButtomText>{book.name}</ButtomText>
                        </ButtomContainer>
                    ))
                }
            </ListBooks>
        );
    }

    function renderVerse() {
        let [rest, verse] = search.split(":");
        verse = verse == '' ? 0 : verse;

        let [chapter, ...book] = rest.split(' ').reverse();
        book = book.reverse().join(' ');

        const indexBook = api.findIndex(item => item.name.includes(book));
        const msg = api[indexBook].chapters[chapter - 1][verse - 1];

        return (
            <ScrollView>
                <Verse>{msg}</Verse>
            </ScrollView>
        );
    }

    return (
        <Container>

            <Header>
                <Text>icep</Text>
                <Img source={logoImg} />
            </Header>

            <Title>Bíblia Sagrada</Title>
            <SubTitle>Buscar por nome do livro*</SubTitle>

            <Input
                style={{ elevation: 0.5 }}
                placeholder="Pesquisar"
                placeholderTextColor="#C5C5C5"
                autoCapitalize="words"
                value={search}
                onChangeText={setSearch}
            />

            {
                search.includes(':')
                    ? renderVerse()
                    : renderBooks()
            }


        </Container>
    );
}
