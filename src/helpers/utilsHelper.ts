import {PixelRatio} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const RFValue = (fontSize: number | string) => {
  const fontScale = PixelRatio.getFontScale();
  return +fontSize / fontScale;
};
const WP = (percentage: string | number) => widthPercentageToDP(percentage);
const HP = (percentage: string | number) => heightPercentageToDP(percentage);

export {RFValue, WP, HP};
