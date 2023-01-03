export interface IAppRouterProps {
  key: number;
  path: string;
  component: any;
}

export const ROUTE_PATH = {
  HOME: "/",
  OVERVIEW: "/overview",
  STATISTIC: "/statistic",
  ORGANIZATION: "/organization",
  MINI_APP: "/mini-app",
  MINI_BUNDLE: "/mini-bundle",
  USER_MANUAL: "/user-manual",
};
