import { Obj } from 'utils/Obj';

export const portfolioData: Obj<any> = {
  ojh: {
    titles: {
      title: '오메가메',
      slogan: '오며가며 즐기는 귀촌 라이프',
      detail:
        '촌의 표면적인 이미지만 보고 귀촌,귀농을 했다가 다시 도시로 돌아가는 경우가 10명 중 1명 꼴로 빈번히 일어난다. 모든 것이 빠르고 효율적으로 돌아가는 도시 생활에 익숙한 현 세대들은 시골의 투박함과 부족함에 곧바로 적응하기 힘들다.',
      hashtag: ['귀촌', '느림의_미학', '시골'],
    },
    info: {
      uri: 'ojh',
      icon: './assets/ice.jpeg',
      profile: {
        img: './assets/ice.jpeg',
        name: '오지현',
        mail: 'ojihyeon073@gmail.com',
        insta: '@o_jibari',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/ice.jpeg', './assets/ice.jpeg'],
        detail:
          '촌의 표면적인 이미지만 보고 귀촌,귀농을 했다가 다시 도시로 돌아가는 경우가 10명 중 1명 꼴로 빈번히 일어난다. 모든 것이 빠르고 효율적으로 돌아가는 도시 생활에 익숙한 현 세대들은 시골의 투박함과 부족함에 곧바로 적응하기 힘들다. 시골에서만 할 수 있는 체험, 느림의 미학을 느끼게 할 수 있는 컨텐츠들, 기성에서 벗어나 직접 해보며 느끼는 배움이 위주이다. 더하여 실질적인 시골에서의 삶에 도움이 되는 정보들을 제공한다.',
      },
      {
        type: 'add1',
        title: '오며가며 즐기는 귀촌 라이프 ; 오메가메',
        img: './assets/square.png',
        detail:
          '촌의 표면적인 이미지만 보고 귀촌,귀농을 했다가 다시 도시로 돌아가는 경우가 10명 중 1명 꼴로 빈번히 일어난다. 모든 것이 빠르고 효율적으로 돌아가는 도시 생활에 익숙한 현 세대들은 시골의 투박함과 부족함에 곧바로 적응하기 힘들다. 시골에서만 할 수 있는 체험, 느림의 미학을 느끼게 할 수 있는 컨텐츠들, 기성에서 벗어나 직접 해보며 느끼는 배움이 위주이다. 더하여 실질적인 시골에서의 삶에 도움이 되는 정보들을 제공한다.',
      },
      {
        type: 'portfolio',
        title: '오며가며 즐기는 귀촌 라이프 ; 오메가메',
        imgs: ['./assets/ice.jpeg', './assets/ice.jpeg', './assets/ice.jpeg'],
      },
      {
        type: 'add2',
        title: '오며가며 즐기는 귀촌 라이프 ; 오메가메',
        imgs: ['./assets/ice.jpeg', './assets/ice.jpeg'],
      },
      {
        type: 'add3',
        title: '오며가며 즐기는 귀촌 라이프 ; 오메가메',
        video: 'a.mp4',
      },
    ],
  },
};
