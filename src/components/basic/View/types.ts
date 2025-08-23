import type { StyledProps } from '../../../theme/types';
import type { ViewProps } from 'react-native';
import type { CustomProps, PlatformProps } from '../../types';

export interface InterfaceViewProps
  extends ViewProps,
  StyledProps,
  PlatformProps<IViewProps> {
  /**
   * Renders components as Box children. Accepts a React.JSX.Element or an array of React.JSX.Element. */
  children?: React.JSX.Element | React.JSX.Element[] | string | any;
}

export type IViewProps = InterfaceViewProps & CustomProps<'View'>;
