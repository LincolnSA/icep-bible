import React, { useState, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import logoImg from '../../assets/asa.png';
import api from '../../services/bible.json';

import {
    Container,
    Header,
    Text,
    Img,
    Title,
    SubTitle,
    Form,
    Input,
    List,
    ButtomContainer,
    ButtomText,
    Verse

} from './styles';

export default function Home() {
    const navigation = useNavigation();

    const [bible, setBible] = useState(api);
    const [search, setSearch] = useState('');

    /**
     * function that updates the list
     */
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
            <List>
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
            </List>
        );
    }

    function renderVerse() {
        let [rest, verse] = search.split(":");
        verse = verse == '' ? 0 : verse;

        let [chapter, ...book] = rest.split(' ').reverse();
        book = book.reverse().join(' ');

        const indexBook = api.findIndex(item => item.name.includes(book));
        let msg = api[indexBook].chapters[chapter - 1][verse - 1];
        msg = msg === undefined ? "Aguardando versículo" : msg;

        return (
            <Verse>
                <MaterialCommunityIcons name="format-quote-open" size={32} color="#320c70" />
                {
                    msg
                }
                <MaterialCommunityIcons name="format-quote-close" size={32} color="#360c70" />
            </Verse>
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

            <Form
                style={{ elevation: 0.5 }}
            >
                <Input
                    placeholder="Pesquisar"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="words"
                    value={search}
                    onChangeText={setSearch}
                />

                {
                    search != 0 &&
                    <TouchableHighlight
                        onPress={() => setSearch('')}
                    >
                        <AntDesign name="close" size={22} color="#C5C5C5" />
                    </TouchableHighlight>
                }
            </Form>

            {
                search.includes(':')
                    ? renderVerse()
                    : renderBooks()
            }


        </Container>
    );
}
