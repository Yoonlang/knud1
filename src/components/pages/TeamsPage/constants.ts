interface TeamDataInterface {
  name: string;
  imgSrc: string;
  leader: string;
  members: string[];
}

export const TEAMS_DATA: TeamDataInterface[] = [
  {
    name: 'Planning Team',
    imgSrc: '/assets/teams/planning_team.webp',
    leader: '조은지',
    members: ['곽나영', '송예빈', '양준녕', '이원준', '이지안'],
  },
  {
    name: 'Digital Media Team',
    imgSrc: '/assets/teams/digital media_team.webp',
    leader: '곽나영',
    members: ['김현주', '오지현', '이예림', '장수현', '정다은', '정유나'],
  },
  {
    name: ' Editorial Team',
    imgSrc: '/assets/teams/editorial_team.webp',
    leader: '이원준',
    members: ['김미현', '송희주', '이연주', '진수별'],
  },
  {
    name: ' Exhibition Team',
    imgSrc: '/assets/teams/exhibition team.webp',
    leader: '이지안',
    members: ['김의정', '서다은', '이아림', '윤지현', '한예리', '홍이도'],
  },
  {
    name: 'Graphic Team',
    imgSrc: '/assets/teams/graphic_team.webp',
    leader: '양준녕',
    members: ['김나현', '남시본', '배상진', '전유석'],
  },
];
