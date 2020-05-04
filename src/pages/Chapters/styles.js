import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex:1;
    padding: ${Constants.statusBarHeight + 20}px 16px 0px;
    background: #FAFBFB;

    align-items: center;

    position: relative;

`;

export const IconContainer = styled.TouchableHighlight`
    width: 85px;
    height: 50px;

    align-items: center;
    justify-content: center;

    background: #360C70;

    position: absolute;
    top: ${Constants.statusBarHeight + 20}px;
    left: 0px;
`;

export const Title = styled.Text`
    font-size: 40px;    
    font-weight: 700;
    color: #360c70;
    margin-top: 100px;
    margin-bottom: 10px;

    text-align: center;
`;

export const BoxContainer = styled.TouchableOpacity`
    border-radius: 4px;
    width: 55px;
    height: 50px;

    align-items:center;
    justify-content: center;

    background: #360C70;

    margin: 10px;
`;

export const BoxText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;