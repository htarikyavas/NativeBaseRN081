import React, { useMemo } from 'react';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import type { ComponentTheme } from '../theme';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/styled';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  return React.forwardRef<any, P & FactoryComponentProps>(
    ({ children, _state, ...props }, ref) => {
      const StyledComponent = useMemo(() => makeStyledComponent(Component), []);
      const calculatedProps = usePropsWithComponentTheme(
        componentTheme ?? {},
        props,
        _state
      );
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    }
  );
}
