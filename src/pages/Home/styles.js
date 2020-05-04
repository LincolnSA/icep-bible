import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex:1;
    padding: ${Constants.statusBarHeight + 20}px 30px 10px;
    background: #FAFBFB;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width: 100%;

    margin-bottom: 30px;
`;

export const Text = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #360c70;
`;

export const Img = styled.Image`
    width: 50px;
    height: 50px;
    margin-right: -15px;
`;

export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #360c70;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    color: #C5C5C5;
    margin: 20px 0px 5px;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 100%;

    font-size: 16px;
    background: #fff;
    color: #171717;

    padding: 10px;
    margin: 0px 0px 10px;

    border-radius: 4px;
`;
export const ListBooks = styled.ScrollView.attrs({
    showsVerticalScrollIndicator : false,
})`
    flex:1;
    width: 100%;
`;

export const ButtomContainer = styled.TouchableOpacity`
    border-bottom-width: 1px;
    border-bottom-color: #F1F1F1;
    padding: 15px 0px;

    text-align: left;
`;

export const ButtomText = styled.Text`
    font-size: 18px;
    color: #171717;
`;