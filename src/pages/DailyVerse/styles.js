import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
    padding: ${Constants.statusBarHeight + 120}px 30px 24px;
    background: #FAFBFB;

    position: relative;
`;

export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #360C70;
`;

export const Verse = styled.Text`
    font-size:18px;
    line-height: 21px;
    color: #171717;
    text-align: justify;
    margin-top: 32px;
`;

export const Reference = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #360C70;

    margin-top: 8px;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity : 0.9,
})`
    width: 100%;
    height: 48px;

    align-items: center;
    justify-content: center;

    background: #360C70;

    position: absolute;
    bottom: 16px;
    left: 30px;

    border-radius: 8px;

`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #fff;
`; 