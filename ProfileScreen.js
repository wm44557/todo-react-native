import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import ImageE from './assets/Unknown.jpeg';
import styled from 'styled-components';

const onUpgradePress = () => {
  console.log('XDDDD');
};
const ProfileScreen: () => React$Node = () => {
  return (
    <SafeAreaView>
      <Container>
        <ProfileNameText>{'Hello'}</ProfileNameText>
        <ProfileImage resizeMode={'contain'} source={ImageE} />
        <DescriptionNameText>{'Someting cool here...'}</DescriptionNameText>
        <UpgradeButton onPress={onUpgradePress}>
          <UpgradeButtonText>{'UPGRADE'}</UpgradeButtonText>
        </UpgradeButton>
        <DescriptionInput placeholder={'New Description'} />
        <DescriptionButton onPress={onUpgradePress}>
          <DescriptionButtonText>{'UPGRADE'}</DescriptionButtonText>
        </DescriptionButton>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled(View)`
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
`;

const UpgradeButtonText = styled(Text)`
  color: white;
`;

const DescriptionInput = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: #aaa;
  padding: 8px;
`;

const DescriptionButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 8px;
  border-radius: 4px;
  margin-top: 20px;
`;

const DescriptionButtonText = styled(Text)`
  color: white;
`;

export default ProfileScreen;
