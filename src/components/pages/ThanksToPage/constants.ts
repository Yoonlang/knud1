interface ProfessorDataInterface {
  imgSrc: string;
  position: string;
  name: string;
  email: string;
}

export const PROFESSOR_DATA: ProfessorDataInterface[] = [
  {
    imgSrc: '/assets/partners/prof_img-1.png',
    position: 'Prof',
    name: '홍순상',
    email: 'oh1005@knu.ac.kr',
  },
  {
    imgSrc: '/assets/partners/prof_img-2.png',
    position: 'Prof',
    name: '김성년',
    email: 'kimsn@knu.ac.kr',
  },
  {
    imgSrc: '/assets/partners/prof_img-3.png',
    position: 'Prof',
    name: '이경용',
    email: 'yong@knu.ac.kr',
  },
  {
    imgSrc: '/assets/partners/prof_img-4.png',
    position: 'Prof',
    name: '조철희',
    email: 'chery@knu.ac.kr',
  },
];

interface PartnersDataInterface {
  imgSrc: string;
  name: string;
  instagram?: string;
  site?: string;
}

export const PARTNERS_DATA: PartnersDataInterface[] = [
  {
    imgSrc: '/assets/partners/partners_moorim.png',
    name: '무림',
    instagram: '@ moorim_gallery',
    site: 'linktr.ee/moorim_gallery',
  },
  {
    imgSrc: '/assets/partners/partners_raum.png',
    name: '라움',
  },
];
