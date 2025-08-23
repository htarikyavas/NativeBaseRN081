import type { ScrollViewProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { CustomProps, PlatformProps } from '../../types';

export interface InterfaceScrollViewProps
  extends ScrollViewProps,
  StyledProps,
  PlatformProps<IScrollViewProps> {
  /**
   * Renders components as Box children. Accepts a React.JSX.Element or an array of React.JSX.Element. */
  children?: React.JSX.Element | React.JSX.Element[] | string | any;
  /**
   * Pass props to contentContainerStyle, and this also resolves NB tokens.
   */
  _contentContainerStyle?: Partial<IScrollViewProps>;
}

export type IScrollViewProps = InterfaceScrollViewProps &
  CustomProps<'ScrollView'>;
