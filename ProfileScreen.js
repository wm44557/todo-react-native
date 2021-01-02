/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ImageE from './assets/Unknown.jpeg';
import styled from 'styled-components';

const ProfileScreen: () => React$Node = () => {
  const [description, setDescription] = useState('Someting cool here...');
  const [currentText, setCurrentText] = useState('');
  const [level, setLevel] = useState(1);

  const onDescriptionChange = () => {
    if (currentText.length < 3) {
      return;
    }
    setDescription(currentText);
    setCurrentText('');
    Keyboard.dismiss();
  };

  const onUpgradePress = () => {
    setLevel(level + 1);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <Container>
          <ContentWrapper>
            <ProfileImageWrapper>
              <ProfileImage resizeMode={'contain'} source={ImageE} />
              <ProfileNameText>{'Jan Nowak'}</ProfileNameText>

              <LevelIndicator>
                <LevelIndicatorText>{level}</LevelIndicatorText>
              </LevelIndicator>
            </ProfileImageWrapper>
            <DescriptionNameText>{description}</DescriptionNameText>
            <UpgradeButton onPress={onUpgradePress}>
              <UpgradeButtonText>{'UPGRADE'}</UpgradeButtonText>
            </UpgradeButton>
          </ContentWrapper>
          <SetDescriptionWrapper>
            <DescriptionInput
              placeholder={'New Description'}
              value={currentText}
              onChangeText={setCurrentText}
              onSubmitEditing={onDescriptionChange}
            />
            <DescriptionButton onPress={onDescriptionChange}>
              <DescriptionButtonText>{'SET'}</DescriptionButtonText>
            </DescriptionButton>
          </SetDescriptionWrapper>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const Container = styled(View)`
  display: flex;
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ProfileNameText = styled(Text)`
  font-size: 20px;
`;

const DescriptionNameText = styled(Text)`
  font-size: 16px;
  color: gray;
`;

const UpgradeButton = styled(TouchableOpacity)`
  background-color: blue;
  padding: 8px;
  border-radius: 4px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const UpgradeButtonText = styled(Text)`
  color: white;
`;

const DescriptionInput = styled(TextInput)`
  height: 50px;
  background-color: #aaa;
  padding: 8px;
  flex: 1;
`;

const DescriptionButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 8px;
  border-radius: 4px;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

const DescriptionButtonText = styled(Text)`
  color: white;
`;

const SetDescriptionWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 50px;
`;

const LevelIndicator = styled(View)`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;
const LevelIndicatorText = styled(Text)`
  color: white;
  font-size: 12px;
  text-align: center;
`;

const ProfileImageWrapper = styled(View)``;

const ContentWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export default ProfileScreen;
