interface ProfessorDataInterface {
  imgSrc: string;
  position: string;
  name: string;
  email: string;
}

export const PROFESSOR_DATA: ProfessorDataInterface[] = [
  {
    imgSrc: '/assets/sample.png',
    position: 'Prof',
    name: '홍순상',
    email: 'djflakd@dkjfldfadfe',
  },
  {
    imgSrc: '/assets/sample.png',
    position: 'Prof',
    name: '홍순상2',
    email: 'djflakd@dkjfldfadfe',
  },
  {
    imgSrc: '/assets/sample.png',
    position: 'Prof',
    name: '홍순상3',
    email: 'djflakd@dkjfldfadfe',
  },
  {
    imgSrc: '/assets/sample.png',
    position: 'Prof',
    name: '홍순상4',
    email: 'djflakd@dkjfldfadfe',
  },
];

interface PartnersDataInterface {
  imgSrc: string;
  name: string;
  instagram: string;
  site: string;
}

export const PARTNERS_DATA: PartnersDataInterface[] = [
  {
    imgSrc: '/assets/ice.jpeg',
    name: '무림',
    instagram: '@ moorim_gallery',
    site: 'linktre.ee/moorim_gallery',
  },
  {
    imgSrc: '/assets/ice.jpeg',
    name: '라움',
    instagram: '@ moorim_gallery',
    site: 'linktre.ee/moorim_gallery',
  },
];
