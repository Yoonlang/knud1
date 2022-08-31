export interface Path {
  linkText: string;
  href: string;
}

const home = Object.freeze<Path>({
  linkText: 'Home',
  href: '/',
});

const identity = Object.freeze<Path>({
  linkText: 'Identity',
  href: '/identity',
});

const archive = Object.freeze<Path>({
  linkText: 'Archive',
  href: '/archive',
});

const teams = Object.freeze<Path>({
  linkText: 'Teams',
  href: '/teams',
});

const thanksto = Object.freeze<Path>({
  linkText: 'Thanks to',
  href: '/thanks-to',
});

const AppPathsArray = [home, identity, archive, teams, thanksto];

const AppPaths = {
  home,
  identity,
  archive,
  teams,
  thanksto,
};

export { AppPathsArray, AppPaths };
