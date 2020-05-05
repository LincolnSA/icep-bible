import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import HomeScreen from './pages/Home';
import ChaptersScreen from './pages/Chapters';
import VersesScreen from './pages/Verses';
import DailyVerseScreen from './pages/DailyVerse';


export default function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AppStack.Screen name="DailyVerse" component={DailyVerseScreen} />
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Chapters" component={ChaptersScreen} />
      <AppStack.Screen name="Verses" component={VersesScreen} />
    </AppStack.Navigator>
  );
}
