import type { ITextProps } from '../../primitives/Text/types';
import type { IIconProps } from '../../primitives/Icon';
import type { CustomProps, VariantType } from '../../types';
import type { InterfaceBoxProps } from '../../primitives/Box';
import type { ColorSchemeType } from '../../../components/types';

export interface InterfaceBadgeProps extends InterfaceBoxProps<IBadgeProps> {
  /**
   * The style variant of the badge.
   * @default subtle
   */
  variant?: VariantType<'Badge'>;
  /**
   * The color scheme to use for the badge. Must be a key in theme.colors.
   */
  colorScheme?: ColorSchemeType;
  /**
   * The right icon element to use in the button.
   */
  rightIcon?: React.JSX.Element | Array<React.JSX.Element>;
  /**
   * The left icon element to use in the button.
   */
  leftIcon?: React.JSX.Element | Array<React.JSX.Element>;
  /**
   * The start icon element to use in the button.
   */
  startIcon?: React.JSX.Element | Array<React.JSX.Element>;
  /**
   * The end icon element to use in the button.
   */
  endIcon?: React.JSX.Element | Array<React.JSX.Element>;
  /**
   * Props to style the child text
   */
  _text?: ITextProps;
  /**
   * Props to be passed to the Icon used inside of Button.
   */
  _icon?: IIconProps;
}

export type IBadgeProps = InterfaceBadgeProps & CustomProps<'Badge'>;
