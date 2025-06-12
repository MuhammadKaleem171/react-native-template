import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ColorValue, TextStyle} from 'react-native';
import {StyleProp} from 'react-native';
import {theme} from '../constants/theme';

const defaultSettings = {
  color: theme.main.green,
  size: 23,
};
export enum IconsProvider {
  FontAwesome_IC = 'fa',
  FontAwesome5_IC = 'fa5',
  Octicons_IC = 'oct',
  SimpleLineIcons_IC = 'sl',
  Fontisto_IC = 'ft',
  MaterialCommunityIcons_IC = 'mc',
  Foundation_IC = 'fo',
  MaterialIcons_IC = 'mt',
  FeatherIcons_IC = 'fh',
  AntDesign_IC = 'ad',
  Entypo_IC = 'et',
  Ionicons_IC = 'ii',
  EvilIcon_IC = 'ev',
}

export interface IconProps {
  onPress?: () => void;
  provider: IconsProvider;
  style?: StyleProp<TextStyle>;
  iconName: string;
  size?: number;
  color?: ColorValue | number;
}

const IconComponents = {
  [IconsProvider.FontAwesome_IC]: FontAwesome,
  [IconsProvider.FontAwesome5_IC]: FontAwesome5,
  [IconsProvider.Octicons_IC]: Octicons,
  [IconsProvider.SimpleLineIcons_IC]: SimpleLineIcons,
  [IconsProvider.Fontisto_IC]: Fontisto,
  [IconsProvider.MaterialCommunityIcons_IC]: MaterialCommunityIcons,
  [IconsProvider.Foundation_IC]: Foundation,
  [IconsProvider.MaterialIcons_IC]: MaterialIcons,
  [IconsProvider.FeatherIcons_IC]: FeatherIcons,
  [IconsProvider.AntDesign_IC]: AntDesign,
  [IconsProvider.Entypo_IC]: Entypo,
  [IconsProvider.Ionicons_IC]: Ionicons,
  [IconsProvider.EvilIcon_IC]: EvilIcon,
};

export const AppIcon = ({
  onPress,
  provider,
  iconName,
  style,
  size = defaultSettings.size,
  color = defaultSettings.color,
}: IconProps) => {
  const IconComponent = IconComponents[provider];

  if (!IconComponent) {
    return null; // Handle invalid provider case
  }

  return (
    <IconComponent
      onPress={onPress}
      name={iconName}
      color={color}
      size={size}
      style={style}
    />
  );
};
