import React from 'react';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex:1;
    padding: ${Constants.statusBarHeight + 8}px 30px 0px;
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
    top: ${Constants.statusBarHeight + 8}px;
    left: 0px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;
export const IconShareContainer = styled.TouchableHighlight`
    width: 85px;
    height: 50px;

    align-items: center;
    justify-content: center;

    background: #360C70;

    position: absolute;
    top: ${Constants.statusBarHeight + 8}px;
    right: 0px;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;



export const Title = styled.Text`
    font-size: 40px;    
    font-weight: 700;
    color: #360c70;
    margin-top: 56px;
    margin-bottom: 32px;

    text-align: center;
`;

export const List = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const NumberVerse = styled.Text`
    font-size: 12px;
    color: ${props => props.selected ? "#fff" : "#360C70"};
    font-weight: 700;
`;

export const Verse = styled.Text`
    font-size: 20px;
    margin-bottom: 8px;
    text-align: justify;
    color: ${props => props.selected ? "#fff" : "#171717"};
    background: ${props => props.selected ? "#360C70" : "transparent"};
    padding: ${props => props.selected ? `${5}px` : `${0}px`};
    border-radius: ${props => props.selected ? `${4}px` : `${0}px`};
`;