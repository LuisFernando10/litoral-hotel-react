export type RoutesType = {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  exact?: boolean;
};
