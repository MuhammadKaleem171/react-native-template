import {FC, ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {theme} from '../../constants/theme';
import {RFValue} from '../../helpers/utilsHelper';

export type ParagraphProps = TextProps & {
  children: ReactNode;
};

//Paragraph 1
export const Paragraph1: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph1, props.style]} />
);
export const Paragraph1Medium: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph1Medium, props.style]} />
);
export const Paragraph1Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph1Regular, props.style]} />
);
export const Paragraph1Light: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph1Light, props.style]} />
);
export const Paragraph1Bold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph1Bold, props.style]} />
);

//Paragraph 2
export const Paragraph2: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph2, props.style]} />
);
export const Paragraph2Medium: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph2Medium, props.style]} />
);
export const Paragraph2Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph2Regular, props.style]} />
);
export const Paragraph2Light: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph2Light, props.style]} />
);

//Paragraph 3
export const Paragraph3: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph3, props.style]} />
);
export const Paragraph3Medium: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph3Medium, props.style]} />
);
export const Paragraph3SemiBold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph3SemiBold, props.style]} />
);
export const Paragraph3Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph3Regular, props.style]} />
);
export const Paragraph3Light: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph3Light, props.style]} />
);

//Paragraph 4
export const Paragraph4: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph4, props.style]} />
);
export const Paragraph4Bold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph4Bold, props.style]} />
);
export const Paragraph4Medium: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph4Medium, props.style]} />
);
export const Paragraph4SemiBold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph4SemiBold, props.style]} />
);
export const Paragraph4Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph4Regular, props.style]} />
);
export const Paragraph4Light: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph4Light, props.style]} />
);

//Paragraph 5
export const Paragraph5: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph5, props.style]} />
);
export const Paragraph5Medium: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph5Medium, props.style]} />
);
export const Paragraph5Bold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph5Bold, props.style]} />
);
export const Paragraph5Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph5Regular, props.style]} />
);
export const Paragraph5Light: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph5Light, props.style]} />
);
export const Paragraph300: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph300, props.style]} />
);
export const Paragraph6Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph6Regular, props.style]} />
);
export const Paragraph6RegularSmall: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph6RegularSmall, props.style]} />
);
export const Paragraph6Small: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph6Small, props.style]} />
);
export const Paragraph6ExtraSmall: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph6ExtraSmall, props.style]} />
);
export const Paragraph6Bold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph6Bold, props.style]} />
);

export const Paragraph7Light: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph7Light, props.style]} />
);
export const Paragraph7Medium: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph7Medium, props.style]} />
);
export const Paragraph7Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph7Regular, props.style]} />
);

export const Paragraph8Small: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph8Small, props.style]} />
);
export const Paragraph9Small: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph9Small, props.style]} />
);
export const Paragraph9: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph9, props.style]} />
);
export const Paragraph10SemiBold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph10SemiBold, props.style]} />
);
export const Paragraph10Bold: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph10Bold, props.style]} />
);
export const Paragraph10: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph10regular, props.style]} />
);
export const Paragraph11: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph11regular, props.style]} />
);
export const Paragraph9Regular: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph9SmallRegular, props.style]} />
);
export const textStyles = StyleSheet.create({
  //Paragraphs Styles
  paragraph1: {
    fontSize: 20,
    color: theme.main.black,
    fontFamily: 'Kanit-Regular',
    fontWeight: '400',
  },
  paragraph1Bold: {
    fontSize: RFValue(20),
    color: theme.main.black,
    fontFamily: 'Kanit-bold',
    fontWeight: '600',
  },
  paragraph1Medium: {
    fontSize: RFValue(20),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  paragraph1Regular: {
    fontSize: 20,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph1Light: {
    fontSize: 20,
    color: theme.main.black,
    fontFamily: 'Manrope-Light',
    fontWeight: '300',
  },
  paragraph2: {
    fontSize: 18,
    color: theme.main.black,
    fontFamily: 'Kanit-Regular',
    fontWeight: '400',
  },
  paragraph2Medium: {
    fontSize: RFValue(18),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  paragraph2Regular: {
    fontSize: 18,
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph2Light: {
    fontSize: 18,
    color: theme.main.black,
    fontFamily: 'Manrope-Light',
    fontWeight: '300',
  },
  paragraph3: {
    fontSize: 16,
    color: theme.main.black,
    fontFamily: 'Kanit-Regular',
    fontWeight: '400',
  },
  paragraph3Medium: {
    fontSize: 16,
    color: theme.main.black,
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
  },
  paragraph3SemiBold: {
    fontSize: RFValue(16),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '700',
  },
  paragraph3Regular: {
    fontSize: RFValue(16),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph3Light: {
    fontSize: 16,
    color: theme.main.black,
    fontFamily: 'Manrope-Light',
    fontWeight: '300',
  },
  paragraph4: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Kanit-Regular',
    fontWeight: '400',
  },
  paragraph4Bold: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
  },
  paragraph4SemiBold: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '700',
  },
  paragraph4Medium: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  paragraph4Regular: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph4Light: {
    fontSize: 14,
    color: theme.main.black,
    fontFamily: 'Manrope-Light',
    fontWeight: '300',
  },
  paragraph300: {
    fontSize: RFValue(15),
    color: theme.main.black,
    fontFamily: 'Kanit-Regular',
    fontWeight: '300',
  },
  paragraph5: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'ProductSans-Regular',
    fontWeight: '400',
  },
  paragraph5Medium: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  paragraph5Bold: {
    fontSize: RFValue(14),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '700',
  },
  paragraph5Regular: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph5Light: {
    fontSize: RFValue(12),
    color: theme.main.black,
    fontFamily: 'Manrope-Light',
    fontWeight: '300',
  },
  paragraph6Regular: {
    fontSize: RFValue(10),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph6RegularSmall: {
    fontSize: RFValue(10),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '300',
  },
  paragraph6Small: {
    fontSize: RFValue(10),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  paragraph6ExtraSmall: {
    fontSize: RFValue(10),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '200',
  },
  paragraph6Bold: {
    fontSize: RFValue(10),
    color: theme.main.black,
    fontFamily: 'Kanit-Bold',
    fontWeight: '900',
  },
  paragraph7Medium: {
    fontSize: RFValue(8),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '800',
  },
  paragraph7Regular: {
    fontSize: RFValue(8),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  paragraph7Light: {
    fontSize: RFValue(8),
    color: theme.main.black,
    fontFamily: 'Manrope-Light',
    fontWeight: '300',
  },

  paragraph8Small: {
    fontSize: 12,
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  paragraph9Small: {
    fontSize: 15,
    color: theme.main.black,
    fontFamily: 'Kanit-Regular',
    fontWeight: '400',
  },
  paragraph9: {
    fontSize: RFValue(9),
    color: theme.main.black,
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
  },
  paragraph9SmallRegular: {
    fontSize: RFValue(15),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
  },
  paragraph10SemiBold: {
    fontSize: RFValue(8),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  paragraph10regular: {
    fontSize: RFValue(8),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
  },
  paragraph10Bold: {
    fontSize: RFValue(9.5),
    color: theme.main.black,
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '500',
  },
  paragraph11regular: {
    fontSize: RFValue(6),
    color: theme.main.black,
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
  },
});
