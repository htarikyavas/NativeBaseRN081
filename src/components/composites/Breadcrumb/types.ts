import type { IHStackProps } from '../../primitives/Stack/HStack';
import type { ITextProps, ILinkProps, IIconProps } from '../../primitives';
import type { MutableRefObject } from 'react';
import type { CustomProps, SpaceType } from '../../types';
export interface IBreadcrumbItemContext {
  isCurrent?: boolean;
  allChildren?: boolean;
}

export interface InterfaceBreadcrumbProps extends IHStackProps {
  spacing?: SpaceType;
  separator?: string | React.JSX.Element | React.JSX.Element[] | any;
  maxItems?: number | number[];
  _button?: any;
  isCollapsed?: boolean;
  onCollapseChange?: any;
}
export interface IBreadcrumbItemProps extends IHStackProps {
  spacing?: SpaceType;
  isCurrent?: boolean;
}
export interface IBreadcrumbIconProps extends IIconProps {
  _current?: any;
}
export interface IBreadcrumbTextProps extends ITextProps {
  _current?: any;
}
export type IBreadcrumbComponentType = ((
  props: IBreadcrumbProps & { ref?: MutableRefObject<any> }
) => React.JSX.Element) & {
  Item: React.MemoExoticComponent<
    (
      props: IBreadcrumbItemProps & { ref?: MutableRefObject<any> }
    ) => React.JSX.Element
  >;
  Link: React.MemoExoticComponent<
    (props: ILinkProps & { ref?: MutableRefObject<any> }) => React.JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IBreadcrumbIconProps & { ref?: any }) => React.JSX.Element
  >;
  Text: React.MemoExoticComponent<
    (props: IBreadcrumbTextProps & { ref?: any }) => React.JSX.Element
  >;
};

export type IBreadcrumbProps = InterfaceBreadcrumbProps &
  CustomProps<'Breadcrumb'>;
