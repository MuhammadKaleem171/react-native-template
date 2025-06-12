import React, {FC} from 'react';
import {theme} from '../constants/theme';
import {HP, RFValue} from '../helpers/utilsHelper';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {Heading5Regular, Heading5SemiBold, Heading700} from './Text/Headings';
import {AppIcon, IconsProvider} from './AppIcon';
import {Paragraph4Medium} from './Text/Paragraphs';
import {Control, Controller, FieldValues} from 'react-hook-form';

interface IProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle> | undefined;
  inputProps?: TextInputProps;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  IconProvider?: IconsProvider;
  iconName?: string;
  error?: string;
  iconPress?: () => void;
  iconColor?: string;
  prefix?: string;
  showRequiredSign?: boolean;

  // React Hook Form integration (optional)
  control?: Control<FieldValues, any>;
  name?: string;
}

export const TextField: FC<IProps> = ({
  inputContainerStyle,
  inputStyle,
  inputProps,
  title,
  IconProvider,
  iconName,
  iconPress,
  error,
  prefix,
  iconColor = theme.main.black,
  showRequiredSign,
  control,
  name,
}) => {
  const hasIcon = iconName && IconProvider;

  const renderInput = (
    fieldValue?: string,
    onChange?: (text: string) => void,
    onBlur?: () => void,
  ) => {
    const value = fieldValue ?? inputProps?.value ?? '';

    return (
      <View
        style={[
          styles.inputContainer,
          error ? styles.errorInput : undefined,
          inputContainerStyle,
        ]}>
        {value ? (
          <Heading5SemiBold
            style={[
              styles.inputLabelBlur,
              error ? styles.errorLabel : undefined,
            ]}>
            {title}
            {showRequiredSign && (
              <Heading5Regular style={styles.required}>{' *'}</Heading5Regular>
            )}
          </Heading5SemiBold>
        ) : (
          <Heading700
            style={[styles.inputLabel, error ? styles.errorLabel : undefined]}>
            {title}
            {showRequiredSign && (
              <Heading5Regular style={styles.required}>{' *'}</Heading5Regular>
            )}
          </Heading700>
        )}

        <View style={styles.inputWithIcon}>
          {prefix && (
            <Paragraph4Medium style={styles.prefixStyle}>
              {prefix}
            </Paragraph4Medium>
          )}

          <TextInput
            placeholderTextColor={theme.main.grey}
            style={[styles.input, inputStyle]}
            autoCapitalize="none"
            {...inputProps}
            onChangeText={onChange ?? inputProps?.onChangeText}
            onBlur={onBlur ?? inputProps?.onBlur}
            value={value}
          />

          {hasIcon ? (
            <TouchableOpacity onPress={iconPress}>
              <AppIcon
                iconName={iconName}
                provider={IconProvider}
                color={iconColor}
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  };

  // if control & name are provided, we use Controller for react-hook-form integration
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) =>
          renderInput(value, onChange, onBlur)
        }
      />
    );
  }

  // default: uncontrolled input (non-form)
  return renderInput();
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.secondary.greyLight,
    width: '100%',
  },
  input: {
    paddingTop: HP(0.5),
    paddingBottom: HP(1.5),
    width: '100%',
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
    paddingLeft: 0,
    color: theme.main.black,
    fontSize: RFValue(14),
  },
  prefixStyle: {
    paddingTop: HP(0.5),
    paddingBottom: HP(1.5),
    fontWeight: '500',
  },
  required: {
    color: theme.secondary.milanoRed,
  },
  inputLabel: {
    color: theme.main.black,
  },
  inputLabelBlur: {
    color: theme.main.grey,
  },
  inputWithIcon: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  errorInput: {
    borderBottomColor: theme.status.danger,
  },
  errorLabel: {
    color: theme.status.danger,
  },
});
