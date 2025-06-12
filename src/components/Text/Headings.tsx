import {StyleSheet, Text, TextProps} from 'react-native';

import {theme} from '../../constants/theme';
import {FC, ReactNode} from 'react';
import {RFValue} from '../../helpers/utilsHelper';

export type HeadingProps = TextProps & {
  children: ReactNode;
};

//HEADING 1
export const Heading1: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading1, props.style]} />
);
export const Heading1Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading1Bold, props.style]} />
);
export const Heading1SemiBold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading1SemiBold, props.style]} />
);
export const Heading1Medium: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading1Medium, props.style]} />
);
export const Heading1Regular: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading1Regular, props.style]} />
);

//HEADING 2
export const Heading2: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading2, props.style]} />
);
export const Heading2Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading2Bold, props.style]} />
);
export const Heading2SemiBold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading2SemiBold, props.style]} />
);
export const Heading2Medium: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading2Medium, props.style]} />
);
export const Heading2Regular: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading2Regular, props.style]} />
);

//HEADING 3
export const Heading3: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading3, props.style]} />
);
export const Heading3Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading3Bold, props.style]} />
);
export const Heading3SemiBold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading3SemiBold, props.style]} />
);
export const Heading3Medium: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading3Medium, props.style]} />
);
export const Heading3Regular: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading3Regular, props.style]} />
);

//HEADING 4
export const Heading4: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading4, props.style]} />
);
export const Heading4Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading4Bold, props.style]} />
);
export const Heading4SemiBold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading4SemiBold, props.style]} />
);
export const Heading4Medium: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading4Medium, props.style]} />
);
export const Heading4Regular: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading4Regular, props.style]} />
);

//HEADING 5
export const Heading5: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading5, props.style]} />
);
export const Heading5Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading5Bold, props.style]} />
);
export const Heading5SemiBold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading5SemiBold, props.style]} />
);
export const Heading5Medium: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading5Medium, props.style]} />
);
export const Heading5Regular: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading5Regular, props.style]} />
);

//HEADING 6
export const Heading6: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading6, props.style]} />
);
export const Heading6Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading6Bold, props.style]} />
);
export const Heading6SemiBold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading6SemiBold, props.style]} />
);
export const Heading6Medium: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading6Medium, props.style]} />
);
export const Heading6Regular: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading6Regular, props.style]} />
);
export const Heading32: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading32, props.style]} />
);
export const Heading700: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading700, props.style]} />
);
export const Heading8: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading8, props.style]} />
);

export const Heading700Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading700Bold, props.style]} />
);

//HEADING 9
export const Heading9: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading9, props.style]} />
);
export const textStyles = StyleSheet.create({
  //Headings Styles
  heading1: {
    fontSize: 30,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  heading1Bold: {
    fontSize: 30,
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading1SemiBold: {
    fontSize: 30,
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading1Medium: {
    fontSize: 30,
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading1Regular: {
    fontSize: 30,
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  heading2: {
    fontSize: 24,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  heading2Bold: {
    fontSize: 24,
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading2SemiBold: {
    fontSize: RFValue(24),
    color: theme.main.black,
    fontFamily: 'Manrope-Bold',
    fontWeight: '700',
  },
  heading2Medium: {
    fontSize: RFValue(24),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading2Regular: {
    fontSize: 24,
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  heading3: {
    fontSize: 20,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  heading3Bold: {
    fontSize: 20,
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading3SemiBold: {
    fontSize: RFValue(20),
    color: theme.main.black,
    fontFamily: 'Manrope-Bold',
    fontWeight: '700',
  },
  heading3Medium: {
    fontSize: 20,
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading3Regular: {
    fontSize: RFValue(20),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  heading4: {
    fontSize: 16,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  heading4Bold: {
    fontSize: RFValue(16),
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading4SemiBold: {
    fontSize: RFValue(16),
    color: theme.main.black,
    fontFamily: 'Manrope-Bold',
    fontWeight: '700',
  },
  heading4Medium: {
    fontSize: RFValue(16),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading4Regular: {
    fontSize: RFValue(16),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading5: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  heading5Bold: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading5SemiBold: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading5Medium: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading5Regular: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  heading6: {
    fontSize: 12,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  heading6Bold: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading6SemiBold: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'Manrope-Bold',
    fontWeight: '700',
  },
  heading6Medium: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  heading6Regular: {
    fontSize: 12,
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  heading32: {
    fontSize: 32,
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  heading700: {
    fontSize: 14,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '700',
  },
  heading8: {
    fontSize: RFValue(8),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '800',
  },
  heading700Bold: {
    fontSize: RFValue(28),
    color: theme.main.black,
    fontFamily: 'Manrope-Bold',
    fontWeight: '700',
  },
  heading9: {
    fontSize: RFValue(36),
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
});
