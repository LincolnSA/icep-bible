import React, { useState, useEffect } from 'react';
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
    ButtomText

} from './styles';

export default function Home() {
    const navigation = useNavigation();

    const [bible, setBible] = useState(api);
    const [search, setSearch] = useState('');

    useEffect(() => {
        function handleSearch() {
            if (search == 0) {
                setBible(api);
                return;
            }

            const filter = bible.filter(book => book.name.includes(search));
            setBible(filter);
        };

        handleSearch();
    }, [search]);


    function handleNaviateChapter(abbrev) {
        const selectedBook = (bible.filter(book => book.abbrev.includes(abbrev)))[0];

        setBible(api);
        setSearch('');
        navigation.navigate("Chapters", { selectedBook });
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

                value={search}
                onChangeText={setSearch}
            />

            <ListBooks>
                {
                    bible.map((book, index) => (
                        <ButtomContainer
                            key={index}
                            onPress={() => handleNaviateChapter(book.abbrev)}
                        >
                            <ButtomText>{book.name}</ButtomText>
                        </ButtomContainer>
                    ))
                }
            </ListBooks>

        </Container>
    );
}
