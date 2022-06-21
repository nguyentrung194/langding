export interface LeftMenuProps {
  title: string;
  responsive?: ResponsiveProps;
  to?: string;
  pathIcon?: string;
  subMenus?: Array<SubMenuProps>;
  isOnDrawer?: Boolean;
}

export interface SubMenuProps {
  title: string;
  to?: string;
  pathIcon?: string;
}

export interface ResponsiveProps {
  mobile: Boolean;
  tablet: Boolean;
  desktop: Boolean;
}
