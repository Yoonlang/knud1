import { Obj } from 'utils/Obj';

export const portfolioData: Obj<any> = {
  gny: {
    titles: {
      thumbnail: './assets/곽나영/thumbnail.png',
      title: '곽테일',
      slogan: '홈텐딩을 위한 칵테일 브랜드',
      detail:
        '곽테일은 개인의 기분에 맞춰 칵테일을 추천해주는 브랜드입니다. 종류도 많고 이름도 낯선 칵테일에 표정을 부여하여 진입장벽을 낮추고 즐거움을 선사합니다. 와인 한병은 부담스러울 때, 나에게 주는 한잔의 보상으로 곽테일 어떠세요?',
      hashtag: ['Conceptual', 'Emotional', 'Infographic'],
    },
    info: {
      uri: 'gny',
      icon: './assets/곽나영/personal_unit.png',
      profile: {
        img: './assets/곽나영/곽나영.jpg',
        name: '곽나영',
        mail: 'skdud9290@gmail.com',
        insta: '@na.bong.e',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/곽나영/slide_1.gif', './assets/곽나영/slide_2.png', './assets/곽나영/slide_3.png'],
        detail: '',
      },
      {
        type: 'add1',
        title: 'GRAPHIC',
        img: './assets/곽나영/추가1.GIF',
        detail:
          '우리가 칵테일을 마시면서 느꼈던 미각의 경험을 공감각적으로 해석해 그래픽에 정보를 담았으며, 각 요소의 조합은 해당 칵테일을 마실 때 짓는 표정으로 나타내 맛 유추를 더욱 쉽게합니다.',
      },
      {
        type: 'portfolio',
        title: 'VISUAL PLAYING',
        imgs: ['./assets/곽나영/pf_1.png', './assets/곽나영/pf_2.png', './assets/곽나영/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'APP & PACKAGE',
        imgs: ['./assets/곽나영/추가_2-1.gif', './assets/곽나영/추가_2-2.png'],
      },
    ],
  },

  knh: {
    titles: {
      thumbnail: './assets/김나현/thumbnail.png',
      title: 'KESSLER',
      slogan: 'from PIECE to PEACE!',
      detail:
        'KESSLER는 지구로 떨어진 우주쓰레기를 재활용하여 만든 제품과 브랜드 아이덴티티를 담은 굿즈들을 판매해, 얻은 수익의 일부를 우주쓰레기 청소 기업에 후원합니다. 또한 제품 사용자들에게 우주쓰레기의 심각성을 알리는 역할을 합니다.',
      hashtag: ['우주쓰레기', '인공위성', '케슬러_신드롬'],
    },
    info: {
      uri: 'knh',
      icon: './assets/김나현/personal_unit.png',
      profile: {
        img: './assets/김나현/김나현.jpg',
        name: '김나현',
        mail: 'naloing@naver.com',
        insta: '',
        call: '01046560320',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/김나현/slide_1.png', './assets/김나현/slide_2.png', './assets/김나현/slide_3.gif'],
        detail: '',
      },
      {
        type: 'portfolio',
        title: 'about KESSLER',
        imgs: ['./assets/김나현/pf_1.png', './assets/김나현/pf_2.png', './assets/김나현/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'Infographics',
        imgs: ['./assets/김나현/추가_2-1.png', './assets/김나현/추가_2-2.png'],
      },
    ],
  },

  kmh: {
    titles: {
      thumbnail: './assets/김미현/thumbnail.png',
      title: 'FLOVE',
      slogan: '우리 가족은 대화가 필요해!',
      detail:
        '현재 우리 가족은 어떤 모습을 하고 있나요?//현대사회의 가족의 모습은 개인주의의 심화 및 세대 간의 갈등, 대화의 단절과 같은 문제로 인해 가족의 가치는 약화되고 있으며 우리는 현재 가족이라는 이름을 가지고 있지만 고독감을 느끼며 살아가고 있습니다. 현재 이런 가족의 삶에는 변화가 필요합니다.',
      hashtag: ['가족', '대화', '소통'],
    },
    info: {
      uri: 'kmh',
      icon: './assets/김미현/personal_unit.png',
      profile: {
        img: './assets/김미현/김미현.jpg',
        name: '김미현',
        mail: 'hye0n-99@naver.com',
        insta: '',
        call: '01023593130',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/김미현/slide_1.png', './assets/김미현/slide_2.png', './assets/김미현/slide_3.png'],
        detail:
          'FLOVE는 멀어진 가족의 관계를 개선하기 위해 가족들이 집에서 다 함께 해야 하는 카드의 미션을 다 같이 수행하며 쉽게 즐길 수 있는 보드게임 디자인으로 이를 통해 가족 구성원들이 서로를 이해하고 각자의 생각을 존중하는 시간을 가짐으로써 가족의 관계를 개선하고자 합니다.',
      },
      {
        type: 'add1',
        title: 'FLOVE NOTE',
        img: './assets/김미현/추가_1.png',
        detail:
          '게임이 끝난 뒤 공용 스케줄러 및 노트에 자신이 걸린 게임 카드의 미션을 기록한 뒤 미션을 실행합니다. 미션의 진행 상황과 일정 등을 공용 스케줄러 및 노트에 함께 기록하며 바쁜 삶에서도 가족들이 서로를 이해하고 소통할 수 있도록 합니다.',
      },
      {
        type: 'portfolio',
        title: '우리 가족을 위한 FLOVE PROJECT',
        imgs: ['./assets/김미현/pf_1.png', './assets/김미현/pf_2.png', './assets/김미현/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'FLOVE MESSAGE',
        imgs: ['./assets/김미현/추가_2-1.png'],
      },
    ],
  },
  kej: {
    titles: {
      thumbnail: './assets/김의정/thumbnail.png',
      title: '여우 영이의 첫외출',
      slogan: '서로를 이해하는 방법을 찾기 위한 여행',
      detail:
        '오늘 여우 영이는 도깨비 가면을 받았습니다. 도깨비 가면은 도깨비 숲의 여우가 혼자 외출을 할 수 있는 나이가 되면 받는 가면입니다. 가면을 받은 영이는 첫외출을 준비하죠. 영이는 무사히 집으로 돌아올 수 있을까요?',
      hashtag: ['외출', '처음', '나', '남'],
    },
    info: {
      uri: 'kej',
      icon: './assets/김의정/personal_unit.png',
      profile: {
        img: './assets/김의정/김의정.jpg',
        name: '김의정',
        mail: '',
        insta: '@forgamza',
        call: '01065528376',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/김의정/slide_1.png', './assets/김의정/slide_2.png', './assets/김의정/slide_3.png'],
        detail: '',
      },
      {
        type: 'portfolio',
        title: '여우 영이의 첫외출',
        imgs: ['./assets/김의정/pf_1.png', './assets/김의정/pf_2.png', './assets/김의정/pf_3.png'],
      },
    ],
  },

  khj: {
    titles: {
      thumbnail: './assets/김현주/thumbnail.png',
      title: 'òsso',
      slogan: '다 함께, Bone Bone 하게~',
      detail:
        '백문이 불여일견이라는 말처럼 백 마디의 말보다는 한번 보고 느끼는 게 훨씬 더 효과적일 때가 있습니다. 이번 프로젝트를 통해 대화로는 쉽게 공감을 얻지 못했던 주제를 시각적으로 표현함으로써, 사람들의 공감을 얻길 바랍니다.',
      hashtag: ['뼈', '설득', '교류'],
    },
    info: {
      uri: 'khj',
      icon: './assets/김현주/personal_unit.png',
      profile: {
        img: './assets/김현주/김현주.jpg',
        name: '김현주',
        mail: 'hyunjoo85533@gmail.com',
        insta: '',
        call: '01043130415',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/김현주/slide_1.png', './assets/김현주/slide_2.png', './assets/김현주/slide_3.png'],
        detail:
          '여러분은 뼈라는 단어를 듣게 되면 어떤 이미지가 가장 먼저 떠오르시나요? 저는 얇고 긴 형태와 한정된 요소들로 다양한 사람을 연상시킬 수 있는 특징이 정말 매력적이라고 생각합니다. 하지만 대부분 사람이 뼈를 인식하면 부정적인 요소를 먼저 떠올리기 때문에 공감하지 못하는 경우가 많았습니다. 제가 생각했던 뼈에 대해 구구절절한 말은 줄이고, 시각적으로 보임으로서 상대방이 뼈라는 단어보다 먼저 이런 매력점에 흥미를 느껴보셨으면 합니다.',
      },
      {
        type: 'portfolio',
        title: '너 또한, _ òsso',
        imgs: ['./assets/김현주/pf_1.png', './assets/김현주/pf_2.png', './assets/김현주/pf_3.png'],
      },
    ],
  },

  nsb: {
    titles: {
      thumbnail: './assets/남시본/thumbnail.png',
      title: '공감각 악보',
      slogan: '광야, 디자인을 만나다.',
      detail:
        '시는 언어와 여러 표현 기법을 사용하여 읽는 이들의 상상력을 자극하고,음악은 음을 재료로 리듬, 멜로디, 하모니를 만들어 무언의 메시지를 전달합니다. 그렇다면 시를 노래하는 예술가곡은 어떻게 시각과 청각을 넘나들 수 있을까요?',
      hashtag: ['악보', '청각의_시각화', '광야'],
    },
    info: {
      uri: 'nsb',
      icon: './assets/남시본/personal_unit.png',
      profile: {
        img: './assets/남시본/남시본.jpg',
        name: '남시본',
        mail: 'bbb05050@naver.com',
        insta: '',
        call: '01062620839',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/남시본/slide_1.png'],
        detail:
          '공감각이란 어떤 감각에 자극이 주어졌을 때 다른 영역의 감각을 불러일으키는 감각 전이 현상을 말합니다.//이 과정 속에서 의미는 다양해지고 그 깊이를 더하게 됩니다. 흥미로운 공감각 현상을 시각적으로 풀기 위해 악보에 주목했습니다. 악보는 음악의 창작과 보존 및 재생에 최적화 된 문서이며, 그 역사 또한 오래되었습니다. 하지만 전공자가 아니면 접할 일도 없고 멀게만 느껴집니다. 우리가 가지고 있는 공감각을 활용해 소통의 창구를 열어 보면 어떨까요?//가곡의 악보를 그래픽으로 옮기기 위해 숫자나 알파벳에서 색을 느끼는 소수의 공감각이 아닌, 다수가 이해하는 공감각에 주목했습니다. ‘따뜻한 색’과 같은 관습적인 은유와 지각석 유사성, 소리의 3요소를 고려하여 변환시켰습니다. 음의 높이는 컬러로, 음의 크기는 부피로, 박자와 악상기호는 역할에 따라 지정했습니다.',
      },
      {
        type: 'portfolio',
        title: 'GRAPHIC SYSTEM',
        imgs: ['./assets/남시본/pf_1.png', './assets/남시본/pf_2.png', './assets/남시본/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'GRAPHIC GOODS',
        imgs: ['./assets/남시본/추가_2-1.png', './assets/남시본/추가_2-2.png'],
      },
    ],
  },
  bsj: {
    titles: {
      thumbnail: './assets/배상진/thumbnail.png',
      title: '_amily',
      slogan: '‘f’ather is one of us',
      detail:
        'family 에서 ‘f’가 잠시 빠졌지만, 그 빈자리는 애밀리가 연결해드립니다. 메세지, 영상통화를 넘어서 기러기 가족들을 위한 패밀리 커넥션 메타버스입니다.',
      hashtag: ['가족', '기러기_아빠', '메타버스'],
    },
    info: {
      uri: 'bsj',
      icon: './assets/배상진/personal_unit.png',
      profile: {
        img: './assets/배상진/배상진.jpg',
        name: '배상진',
        mail: 'baesj1997@gmail.com',
        insta: '',
        call: '01072057049',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/배상진/slide_1.jpg', './assets/배상진/slide_2.jpg', './assets/배상진/slide_3.jpg'],
        detail:
          '애밀리만의 독립형 메타버스에 유저의 공간을 구축해, 실제 집에 들어온듯한 경험을 제공합니다.//가구를 통해 다양한 기능들로 인터렉션이 가능하며, 입체감 있게 구현함으로써 유저의 완전한 몰입을 추구합니다.',
      },
      {
        type: 'add1',
        title: '기러기 아빠들을 위한 가족 소통 메타버스__amily',
        img: './assets/배상진/추가_1.jpg',
        detail: '',
      },
      {
        type: 'portfolio',
        title: '기러기 아빠들을 위한 가족 소통 메타버스__amily',
        imgs: ['./assets/배상진/pf_1.jpg', './assets/배상진/pf_2.jpg', './assets/배상진/pf_3.jpg'],
      },
      {
        type: 'add2',
        title: '기러기 아빠들을 위한 가족 소통 메타버스__amily',
        imgs: ['./assets/배상진/추가_2-1.jpg', './assets/배상진/추가_2-2.jpg'],
      },
    ],
  },
  sde: {
    titles: {
      thumbnail: './assets/서다은/thumbnail.png',
      title: 'MAKESURE',
      slogan: '1인 가구를 위한 건강 키트 브랜딩',
      detail:
        "오늘의 '약' 잊지 않았나요?//이와 같은 말을 듣는것이 늘 먹던 영양제나 약을 되돌아보는 계기가 됩니다. 건강한 일상을 유지하기 위해, 또는 건강을 회복하기 위해 약을 먹는 현대인들이 부쩍 늘어난 상황에서 1인 가구를 위한 건강 키트 브랜딩 MAKE SURE는 바쁜 일상 속 약 챙기는 것을 자주 잊는 현대인을 타겟으로 기획되었습니다.",
      hashtag: ['영양제', '잘_챙겼나요'],
    },
    info: {
      uri: 'sde',
      icon: './assets/서다은/personal_unit.png',
      profile: {
        img: './assets/서다은/서다은.jpg',
        name: '서다은',
        mail: 'come_true13@naver.com',
        insta: '',
        call: '01065563765',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/서다은/slide_1.jpg', './assets/서다은/slide_2.jpg', './assets/서다은/slide_3.jpg'],
        detail: '',
      },
      {
        type: 'portfolio',
        title: '1인 가구를 위한 건강 키트 브랜딩 MAKESURE',
        imgs: ['./assets/서다은/pf_1.jpg', './assets/서다은/pf_2.jpg', './assets/서다은/pf_3.jpg'],
      },
      {
        type: 'add2',
        title: '1인 가구를 위한 건강 키트 브랜딩 MAKESURE',
        imgs: ['./assets/서다은/추가_2-1.jpg', './assets/서다은/추가_2-2.jpg'],
      },
    ],
  },
  syb: {
    titles: {
      thumbnail: './assets/송예빈/thumbnail.png',
      title: 'DOT',
      slogan: 'Dot makes life',
      detail:
        '다가오는 미래 사회에서 우리는 어떻게 살아가야 할 것인가? 삶이란 긴 선에서 우리가 할 수 있는 것은 오늘 찍을 수 있는 점들에 노력을 기울이는 것 뿐입니다. 사우디아라비아에서 진행하는 Neom프로젝트는 미래의 모습을 구현하고 있고 the dot 프로젝트는 그렇게 구현된 모습 속에서 살고 있는 사람들의 모습을 조명합니다.',
      hashtag: ['dot', 'makes', 'future', 'life', 'in', 'neom'],
    },
    info: {
      uri: 'syb',
      icon: './assets/송예빈/personal_unit.png',
      profile: {
        img: './assets/송예빈/송예빈.jpg',
        name: '송예빈',
        mail: 'jeniffer0304@naver.com',
        insta: '',
        call: '01032354558',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/송예빈/slide_1.jpg'],
        detail:
          "사우디아라비아가 추진하고 있는 '네옴 프로젝트'는 미래사회의 모습을 실제 구현하고 있습니다. 상상만으로 그리던 미래 사회의 모습은 모든 기술이 환경과 사람을 위해 발전하고 있는 것이었습니다. 이러한 모습들이 실제로 펼쳐질 때 사우디아라비아 사람들은 어떤 삶을 살게 될까요? 이전에 이들이 가지고 있는 독특하고도 폐쇄적인 문화들과 개방적인 미래모습이 만났을 때를 위한 프로젝트가 the dot project입니다.",
      },
      {
        type: 'add1',
        title: 'Neom 프로젝트가 선보이는 주거 혁신, the line',
        img: './assets/송예빈/추가_1.jpg',
        detail:
          'Neom 프로젝트는 크게 Trojena, Oxagon, The line 세가지 카테고리로 나누어 진행됩니다. 이 중 The line은 주거환경에 초점을 맞춘 영역으로 모든 교통 시설들이 지하로 사라지고 오직 사람과 환경에 중점을 둡니다. 이 영역에서는 사람이 생활을 보다 편리하게 만들기 위하여 다양한 시설들을 투명하고 유기적으로 구성하고 있습니다. 이 속에서 사람들의 직접적인 삶의 모습을 조명하는 것이 the dot 프로젝트 입니다.',
      },
      {
        type: 'portfolio',
        title: 'APP_how to make a dot',
        imgs: ['./assets/송예빈/pf_1.jpg'],
      },
      {
        type: 'add2',
        title: "Brochure&Scarf_Saudi's culture",
        imgs: ['./assets/송예빈/추가_2-1.jpg', './assets/송예빈/추가_2-2.jpg'],
      },
    ],
  },
  shj: {
    titles: {
      thumbnail: './assets/송희주/thumbnail.png',
      title: 'miol',
      slogan: 'At that time, in your time',
      detail:
        "사람은 기록을 통해 기억되고 싶은 '나'를 만듭니다. 원하는 느낌의 사진들로 나를 기록하면 그것을 보는 타인, 혹은 미래의 나는 그 느낌으로 그를 기억할 것입니다. 미올의 목표는 색감을 통해 '나'를 원하는 데로 기록하기 쉽게 하는 것입니다.",
      hashtag: ['기록', '기억', '시간'],
    },
    info: {
      uri: 'shj',
      icon: './assets/송희주/personal_unit.png',
      profile: {
        img: './assets/송희주/송희주.jpg',
        name: '송희주',
        mail: '',
        insta: '@miol_moment',
        call: '01073883164',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/송희주/slide_1.gif', './assets/송희주/slide_2.gif', './assets/송희주/slide_3.gif'],
        detail:
          '사진에서는 피사체와 어울리는 색감에 따라 느낌이 굉장히 달라집니다.  사진의 색감은 조명에 의해 좌우되는데, 시간에 따라 햇빛의 색이 변하며 사진의 색감도 달라집니다. 이 변화하는 색감을 원하는 분위기에 맞게 사용하려고 하루를 4개의 시간대로 나눠서 각각 색감을 부여했습니다. 먼저 맑고 부드러운 noon, 다음으로 강렬하고 경쾌한 sunset으로 분류했습니다. 다음으로는 midnight으로 클래식하고 중후한 느낌이고, 마지막 dawn은 차분하고 신뢰감을 주는 분위기입니다.',
      },
      {
        type: 'portfolio',
        title: '그때, 당신의 시간을 기록하세요_miol',
        imgs: ['./assets/송희주/pf_1.gif', './assets/송희주/pf_2.gif', './assets/송희주/pf_3.gif'],
      },
      {
        type: 'add3',
        title: '그때의 시간, 당신의 색감_miol',
        video: '송희주',
      },
    ],
  },
  yjy: {
    titles: {
      thumbnail: './assets/양준녕/thumbnail.png',
      title: 'Divenamic',
      slogan: '다이나믹 스쿠버 브랜드',
      detail: `만약 해수면이 상승해 지구가 물에 잠긴다면 인류에겐 재앙이나 다름없을 것입니다. 하지만 스킨스쿠버 업계는 전례 없는 호황을 맞지 않을까요? 여기 해수면 상승으로 물에 잠긴 부산을 탐험하는 스킨스쿠버 브랜드 Divenamic이 있습니다.`,
      hashtag: ['UX', 'UI', '브랜'],
    },
    info: {
      uri: 'yjy',
      icon: './assets/양준녕/personal_unit.png',
      profile: {
        img: './assets/양준녕/양준녕.jpg',
        name: '양준녕',
        mail: 'yjn4956@naver.com',
        insta: '',
        call: '01027960190',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/양준녕/slide_1.png', './assets/양준녕/slide_2.png', './assets/양준녕/slide_3.png'],
        detail: ``,
      },
      {
        type: 'portfolio',
        title: '다이나믹 스쿠버 브랜드',
        imgs: ['./assets/양준녕/pf_1.png', './assets/양준녕/pf_2.png', './assets/양준녕/pf_3.png'],
      },
    ],
  },
  ojh: {
    titles: {
      thumbnail: './assets/오지현/thumbnail.png',
      title: '오메가메',
      slogan: '오며 가며 즐기는 귀촌 라이프!',
      detail: `오메가메는 이름 그대로 도시와 시골을 자유롭게 오가며 부담 없이 즐기는 스테이 프로그램입니다. 시기별, 지역별 즐길 수 있는 컨텐츠를 제공하여 자연스럽게 시골의 삶에 적응할 수 있도록 합니다.`,
      hashtag: ['귀촌', '러스틱_라이프', '이도향촌'],
    },
    info: {
      uri: 'ojh',
      icon: './assets/오지현/personal_unit.png',
      profile: {
        img: './assets/오지현/오지현.jpg',
        name: '오지현',
        mail: 'ojihyeon073@gmail.com',
        insta: '@o_jibari',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/오지현/slide_1.png', './assets/오지현/slide_2.png', './assets/오지현/slide_3.png'],
        detail: `'나'를 위한 힐링 공간을 찾아 시골을 찾는 현대인들이 많아졌습니다. 그들은 자연 그대로의 촌스러움과 투박함을 그대로 받아들이며 도시에서 지친 몸과 마음을 치유합니다. 특히 코로나로 인해 원격 근무가 활성화되면서 도시를 떠나는 것이 쉽지 않았던 직장인들이 일상은 유지하면서도 귀촌 생활을 몸소 실천해볼 수 있는 기회가 생겨나고 있습니다. 하지만 힐링의 목적만 가지고 무작정 시골로 거주지를 옮기기엔 현실적인 어려움이 많습니다. 이러한 문제를 해결하기 위해 오메가메는 시골의 삶에 대한 전반적인 이해와 적응을 돕는 프로그램을 제안합니다. 앱을 통해 롱 스테이를 할 시골을 선택한 후 지역별, 계절별로 제공되는 컨텐츠를 신청합니다. 신청한 컨텐츠는 시골에서 머무르며 체험합니다. 이를 통해 귀촌의 진입 장벽을 낮추고 적응을 도와 시골의 진정한 매력에 빠져들게 합니다.`,
      },
      {
        type: 'add1',
        title: '오메가메 Graphic',
        img: './assets/오지현/추가_1.png',
        detail: `시골 특유의 러스틱한 느낌을 그래픽에 담고자 하였습니다. 날것 그대로의 고유함, 지연스러움, 투박함 속에서 나오는 매력에 집중하여 의도된 삐뚤어짐과 일정하지 않은 선, 차분한 색감으로 시골의 이미지를 표현하였습니다.`,
      },
      {
        type: 'portfolio',
        title: '오메가메와 함께 귀촌 라이프 즐기기',
        imgs: ['./assets/오지현/pf_1.png', './assets/오지현/pf_2.png', './assets/오지현/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'Graphic& Kit package',
        imgs: ['./assets/오지현/추가_2-1.png', './assets/오지현/추가_2-2.png'],
      },
    ],
  },
  yjh: {
    titles: {
      thumbnail: './assets/윤지현/thumbnail.png',
      title: 'Comma',
      slogan: '나만의 휴식, 나만의 공간',
      detail: `쉼표는 휴식을 가장 직관적이고 단순하게 의미합니다. 쉼표를 모티브로 한 comma는 쳇바퀴같은 현대사회에서 숨 쉴 틈을 주기 위해 심플하고 편안한 기운을 전달하고자 합니다. 현대인들을 위한 휴식 권유 메세지를 담은 comma와 함께 치열하고 바쁜 일상 속에서 나만의 휴식, 나만의 공간을 만들어 나가길 바랍니다.`,
      hashtag: ['휴식공간', '휴식을위한소비트렌드', '쉼표', '콤마', '라이프스타일'],
    },
    info: {
      uri: 'yjh',
      icon: './assets/윤지현/personal_unit.png',
      profile: {
        img: './assets/윤지현/윤지현.jpg',
        name: '윤지현',
        mail: 'jhhh0304@daum.net',
        insta: '@jhyunyun',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/윤지현/slide_1.jpg', './assets/윤지현/slide_2.jpg'],
        detail: `우리는 모든 것이 넘쳐나는 과잉의 시대에 살고 있습니다. 이런 삶을 살아가다보면 온전한 나만의 시간을 갖는다는 것은 생각보다 어려울 수 있습니다. 나만의 휴식공간을 만들기 위한 방법 중 하나는 자신의 취향에 맞는 무언가로 주변 환경을 바꾸어주는 일입니다.`,
      },
      {
        type: 'add1',
        title: '나만의 휴식, 나만의 공간_comma',
        img: './assets/윤지현/추가_1.jpg',
        detail: `우리는 이제 좀 다른 소비를 원합니다. 예쁜 물건이라도 꼭 필요한 것이 아니라면 구입을 자제하고, 꼭 사야 한다면 화려한 것보다는 몸과 마음에 안락함을 줄 수 있는 것을 고릅니다. comma는 쉼표에서 영감을 받아 쉼, 휴식이라는 의미를 심플하고 모던한 무드로 표현합니다. 포스터와 상품 속 쉼표와 함께 평안한 하루를 보내세요!`,
      },
      {
        type: 'portfolio',
        title: '나만의 휴식, 나만의 공간_comma',
        imgs: ['./assets/윤지현/pf_1.jpg', './assets/윤지현/pf_2.jpg', './assets/윤지현/pf_3.jpg'],
      },
    ],
  },
  lar: {
    titles: {
      thumbnail: './assets/이아림/thumbnail.png',
      title: 'Ahoy',
      slogan: 'It comes in waves',
      detail: `Ahoy매거진은 매달 특정 기념일을 상기시키고, 하루를 더 특별하게 보낼 수 있도록 그 날에 꼭 맞는 노래를 소개해 주는 웹 매거진입니다.`,
      hashtag: ['웹_매거진', 'music_is_my_life', '파도'],
    },
    info: {
      uri: 'lar',
      icon: './assets/이아림/personal_unit.png',
      profile: {
        img: './assets/이아림/이아림.jpg',
        name: '이아림',
        mail: 'arimimii@naver.com',
        insta: '',
        call: '01050449194',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/이아림/slide_1.jpg', './assets/이아림/slide_2.jpg'],
        detail: ``,
      },
      {
        type: 'portfolio',
        title: '파도파도 끝이 없는 음악의 바다_Ahoy',
        imgs: ['./assets/이아림/pf_1.gif', './assets/이아림/pf_2.gif', './assets/이아림/pf_3.jpg'],
      },
    ],
  },
  lyj: {
    titles: {
      thumbnail: './assets/이연주/thumbnail.png',
      title: 'US BEE',
      slogan: 'No bees, No humans',
      detail: `올해 2022년 봄, 국내에서 약 60억 마리의 꿀벌이 실종되었습니다. 이 사건의 원인은 이상기후와 해충의 영향이 복합적으로 작용한 것으로 보인다는 것이 전문가들의 의견입니다.//생태계에서 중요한 역할을 하고 있는 꿀벌이 사라진다면 어떻게 될까요?`,
      hashtag: ['꿀벌실종', '픽셀게임', '16비트_감성'],
    },
    info: {
      uri: 'lyj',
      icon: './assets/이연주/personal_unit.png',
      profile: {
        img: './assets/이연주/이연주.jpg',
        name: '이연주',
        mail: 'lyj15723@naver.com',
        insta: '',
        call: '01098252275',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/이연주/slide_1.jpg', './assets/이연주/slide_2.jpg', './assets/이연주/slide_3.jpg'],
        detail: `누구나 쉽게 즐길 수 있는 단순한 게임을 통해 사람들에게 꿀벌의 소중함, 그리고 인류의 생존을 위협할 수 있는 꿀벌 실종 사태에 대해 경각심을 불러일으키고자 합니다. 게임 ‘어스비(US BEE)’는 매력적인 픽셀 감성의 게임으로, 이러한 메시지를 담아내고 있습니다.`,
      },
      {
        type: 'add1',
        title: '생태계에서의 꿀벌의 역할',
        img: './assets/이연주/추가_1.jpg',
        detail: `유엔식량농업기구(FAO)에 따르면 전 세계 식량 중 63%가 꿀벌의 수분으로 열매를 맺는다고 합니다. 특히 아몬드, 사과, 블루베리 등은 꿀벌 없이 만들어지기 어려운 것들입니다. 이처럼 식물의 수분 활동에 중요한 역할을 하는 꿀벌은 생태계에서 큰 역할을 하고 있습니다.`,
      },
      {
        type: 'portfolio',
        title: 'US BEE',
        imgs: ['./assets/이연주/pf_1.jpg', './assets/이연주/pf_2.jpg', './assets/이연주/pf_3.jpg'],
      },
      {
        type: 'add2',
        title: 'US BEE Characters',
        imgs: ['./assets/이연주/추가_2-1.jpg', './assets/이연주/추가_2-2.jpg'],
      },
    ],
  },
  lyr: {
    titles: {
      thumbnail: './assets/이예림/thumbnail.png',
      title: '차차',
      slogan: 'Drinking tea, enjoying tea',
      detail: `‘차차’는 현대인들이 살아가면서 느끼는 피로감, 스트레스 같은 공통적인 건강 문제를 가볍게 다루면서 매일매일 다른 종류의 7가지 차를 꾸준히 마실 수 있게 하고, 또한 차를 마시는 행위가 차차 습관이 될 수 있게 도와줍니다.`,
      hashtag: ['자연', '건강', '차', '일러스트', '습관'],
    },
    info: {
      uri: 'lyr',
      icon: './assets/이예림/personal_unit.png',
      profile: {
        img: './assets/이예림/이예림.jpg',
        name: '이예림',
        mail: 'yelim425@naver.com',
        insta: '',
        call: '01095721147',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/이예림/slide_1.png', './assets/이예림/slide_2.png', './assets/이예림/slide_3.png'],
        detail: ``,
      },
      {
        type: 'add1',
        title: '차차 마시고 즐기기 : 차차',
        img: './assets/이예림/추가_1.png',
        detail: `최근 건강에 대한 관심이 젊은 층 까지 급격하게 확산되면서 대부분의 사람들은 계획적이고 부지런한 삶을 지향하며, 운동을 하고 기능식품을 섭취하는 등의 노력으로 개인의 건강을 적극적으로 관리합니다. 과거의 건강 관리가 절제하고 감내하는 방식이었다면 현재는 자발적으로 본인의 건강을 가꾸는 사람들이 많아졌습니다. 차차는 이것을 토대로 현대인들의 건강관리에 즐거움을 더해 7일 동안 다른 차를 즐길 수 있는 차 패키지를 구성했습니다. 차를 마시고 제공되는 스티커를 포스터에 붙이면서 재미를 느끼고 더 나아가 습관을 들일 수 있게 도와줍니다. 차차와 함께 차를 마시고, 즐겨보세요.`,
      },
      {
        type: 'portfolio',
        title: 'Drinking tea, enjoying tea',
        imgs: ['./assets/이예림/pf_1.png', './assets/이예림/pf_2.png', './assets/이예림/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'Drinking tea, enjoying tea',
        imgs: ['./assets/이예림/추가_2-1.png', './assets/이예림/추가_2-2.png'],
      },
    ],
  },
  lwj: {
    titles: {
      thumbnail: './assets/이원준/thumbnail.png',
      title: '쓰담쓰담',
      slogan: '펫로스 증후군 극복 프로젝트',
      detail: `‘쓰담쓰담’은 반려동물을 키우는 반려인들을 위한 서비스로서, 반려동물을 떠나보낸 반려인에게서 빈번하게 발생하는 ‘펫로스 증후군’을 이겨내고 ‘애완’이 아닌 ‘반려’라는 단어에 걸맞는 새로운 문화와 인식을 확립하고 정의하는 서비스 입니다.`,
      hashtag: ['반려동물', '서비스디자인', '펫로스_증후군'],
    },
    info: {
      uri: 'lwj',
      icon: './assets/이원준/personal_unit.png',
      profile: {
        img: './assets/이원준/이원준.jpg',
        name: '이원준',
        mail: 'kei04065@naver.com',
        insta: '@2o_jjun',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/이원준/slide_1.jpg', './assets/이원준/slide_2.jpg', './assets/이원준/slide_3.jpg'],
        detail: `‘쓰담쓰담’은 사람과 반려동물의 관계에 주목한 반려동물 이별 극복 프로젝트입니다. 쓰담쓰담은 반려동물을 만난 순간부터 떠나보낸 뒤의 순간까지도 건강한 반려동물과 반려인의 관계를 유지하고자 하는 취지를 반영하고 있습니다. 급성장하고 있는 반려동물 시장 속에서 우리 사회는 어쩌면 많은 것을 놓치고 있는지도 모릅니다. 반려동물과의 질 높은 관계를 형성하는 것, 반려 동물을 잘 떠나 보내는 것, 반려동물을 떠나보낸 반려인의 슬픔을 다루는 일 등. ‘쓰담쓰담’은 반려동물과 좋은 관계를 유지할 수 있게 도움을 줄 뿐만 아니라 반려동물을 떠나보낸 반려인의 슬픔까지도 쓰다듬어 주는 서비스입니다. 펫로스 증후군을 앓고 있는 많은 사람들이 쓰담쓰담을 통하여 자신의 마음도 쓰다듬어 줄 수 있기를 바라고 반려동물을 키우고 있는 많은 반려인에게 반려동물을 키우는 새로운 방법을 제안하고자 합니다.`,
      },
      {
        type: 'add1',
        title: '쓰담쓰담 Naming & Logo',
        img: './assets/이원준/추가_1.jpg',
        detail: `반려동물과 함께 했을 때 가장 자주 했던 교감행동은 쓰다듬는 행위가 아닐까요?//‘쓰담쓰담’은 사람과 반려동물의 관계에 주목한 반려동물 프로젝트인 만큼 쓰다듬는 행위에 착안하여 네이밍을 하였습니다.//이러한 의도를 나타내기 위해 브랜드 로고는 둥근 곡선을 이용하여 사용자에게 신선한 느낌을 주는 동시에 쓰다듬는 행위를 유도하여 브랜드의 이름을 각인시키고자 합니다.`,
      },
      {
        type: 'portfolio',
        title: '쓰담쓰담 Design Process',
        imgs: ['./assets/이원준/pf_1.jpg', './assets/이원준/pf_2.jpg', './assets/이원준/pf_3.jpg'],
      },
      {
        type: 'add2',
        title: '쓰담쓰담 Kit',
        imgs: ['./assets/이원준/추가_2-1.jpg', './assets/이원준/추가_2-2.jpg'],
      },
    ],
  },
  lja: {
    titles: {
      thumbnail: './assets/이지안/thumbnail.png',
      title: 'aqua 26°C',
      slogan: '반려어(魚) 케어 브랜드',
      detail: `반려어(魚) 케어 브랜드 아쿠아 26도는 일반 소비자에게 접근성을 높히기 위한 반려어 케어에 대한 지식과 질병관리를 위한 플랫폼을 제시하며, 관상어의 반려시장 확대를 도모합니다.`,
      hashtag: ['반려동물로써_반려어의_인식개선', '반려어', '반려어_질병과_치료', '아쿠아테리어', '물멍'],
    },
    info: {
      uri: 'lja',
      icon: './assets/이지안/personal_unit.png',
      profile: {
        img: './assets/이지안/이지안.jpg',
        name: '이지안',
        mail: 'leean5528@naver.com',
        insta: '@deee_g__',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/이지안/slide_1.png', './assets/이지안/slide_2.png', './assets/이지안/slide_3.png'],
        detail: `반려어 케어 키트는 일반 소비자의 접근성을 높히기 위해 반려어 기초 지식과 질병관리를 위한 플랫폼입니다. 병원에 직접 데려가기 힘든 반려어 특성상 집에서 육안으로 진단 가능한 정보 책자 제공합니다. 또한, 기초물품과 질병예방, 반려어 관리를 위한 필수 약품 키트를 배송하고 온라인 처방이 불가한 전문약품은 가까운 동물병원에서 수령할 수 있도록 합니다.`,
      },
      {
        type: 'add1',
        title: '반려어(魚) 케어 브랜드_ aqua 26°C',
        img: './assets/이지안/추가_1.png',
        detail: `바쁘게 생활하며 자신조차 신경쓰기 힘든 현대인들에게 반려어(魚)는 비교적 함께하기 쉬운 동물이며 무거운몸과 마음의 휴식처가 될 수 있습니다.`,
      },
      {
        type: 'portfolio',
        title: 'aqua 26°C_Brand Identity',
        imgs: [
          './assets/이지안/pf_1.png',
          './assets/이지안/pf_2.png',
          './assets/이지안/pf_3.png',
          './assets/이지안/pf_4.png',
          './assets/이지안/pf_5.png',
        ],
      },
      {
        type: 'add2',
        title: 'aqua 26°C_ Package',
        imgs: ['./assets/이지안/추가_2-1.png', './assets/이지안/추가_2-2.png'],
      },
    ],
  },
  jsh: {
    titles: {
      thumbnail: './assets/장수현/thumbnail.png',
      title: 'MONTRER',
      slogan: '나를 위한 맞춤 니치 향수',
      detail: `자신의 개성과 취향을 드러내는 소비에 대한 관심이 급격하게 커지면서 니치 향수에 대한 관심도 꾸준히 상승하는 추세입니다.그러나 시향없이는 잘 알 수 없는 향에 대한 설명과 향수에 대한 여러 용어들로 인해 진입 장벽을 느껴 향수에 입문하기 어려움을 느끼는 이들이 많습니다. 그리하여 감성 형용사를 사용하여 향에 대한 진입 장벽을 낮추고 선택을 통해 스스로 고유의 개성을 담은 향을 만드는 경험을 고객에게 제공합니다.`,
      hashtag: ['니치향수', '브랜딩', '커스텀'],
    },
    info: {
      uri: 'jsh',
      icon: './assets/장수현/personal_unit.png',
      profile: {
        img: './assets/장수현/장수현.jpg',
        name: '장수현',
        mail: 'jsh10623@naver.com',
        insta: '',
        call: '01062602049',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/장수현/slide_1.png', './assets/장수현/slide_2.png', './assets/장수현/slide_3.png'],
        detail: `브랜드 몽띠르(Montrer)는 프랑스어로 ‘보여주다’, '나타내다'라는 뜻으로, 키워드의 조합을 통해 나를 나타낼 수 있는 향수를 만들어내는 향수 브랜드입니다. 세상에 하나 밖에 없는 나의 향, 그리고 향수를 통해얻을수 있는 나만의 그래픽을 몽띠르에서 만나보세요.`,
      },
      {
        type: 'add1',
        title: 'Brand Philosophy',
        img: './assets/장수현/추가_1.png',
        detail: `선택하는 형용사를 통해 자신이 다른이에게 어떻게 보이고 싶은지 엿볼 수 있습니다. 몽띠르를 경험하는 고객에게 자신의 향수를 만드는 경험을 자신에 대해 알아가는 콘텐츠로 인식할 수 있게 하여 자아 탐구를 통해 자신의 개성을 발견할 수 있는 발판이 되기를 기대합니다.//몽띠르의 핵심 가치는 도전 정신 그리고 다양성입니다. 도전의 가치는 언제나 높습니다. 과감한 도전 정신에서 나오는 용기,그리고 창의적인 생각들과 끈기는 우리에게 항상 새롭고 놀라운 것들을 선물해줍니다.몽띠르는 이를 이어받아 기존 향수 시장에서 보지못한 과감한 선택을 디자인을 통해 보여주고자합니다. 또한 다양성을 추구함과 동시에 존중합니다.여기서 다양성이란 성별, 국적, 신체적 조건, 신념, 사상, 가치관, 행동 양식, 종교, 문화 등의 차이를 인정하고 존중하는 것을 뜻하며, 다양성은 곧 몽띠르에서 찾고자하는 '개성'을 발굴하기 위한 첫 걸음이라 할 수 있습니다. 몽띠르를 경험하면서 개개인의 다름을 인지하고 존중하는 일에 동참할 수 있기를 기대합니다.`,
      },
      {
        type: 'portfolio',
        title: 'Brand System',
        imgs: ['./assets/장수현/pf_1.png', './assets/장수현/pf_2.png', './assets/장수현/pf_3.png'],
      },
    ],
  },
  jys: {
    titles: {
      thumbnail: './assets/전유석/thumbnail.png',
      title: 'dolittle',
      slogan: '실천의 시각화, 자기계발 서비스 두리틀',
      detail: `나태한 사람, 게으름뱅이라는 의미를 가진 두리틀은 자기계발에 어려움을 겪고 있는 사람들을 위하여 만다라트를 기반으로 자신을 성장시키는 것에 흥미를 가지게 하고 사용자가 효율적으로 자신을 업그레이드할 수 있도록 도움을 주는 자기계발 서비스 브랜드입니다.`,
      hashtag: ['자기계발', '성취', '나'],
    },
    info: {
      uri: 'jys',
      icon: './assets/전유석/personal_unit.png',
      profile: {
        img: './assets/전유석/전유석.jpg',
        name: '전유석',
        mail: 'sub05168@naver.com',
        insta: '@u_doryeee',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/전유석/slide_1.png', './assets/전유석/slide_2.png', './assets/전유석/slide_3.png'],
        detail: ``,
      },
      {
        type: 'portfolio',
        title: '어제와 다른 오늘의 나 : 두리틀',
        imgs: ['./assets/전유석/pf_1.png', './assets/전유석/pf_2.png', './assets/전유석/pf_3.png'],
      },
      {
        type: 'add2',
        title: '자기계발 나무 (self-development fractal wood',
        imgs: ['./assets/전유석/추가_2-1.png', './assets/전유석/추가_2-2.png'],
      },
    ],
  },
  jde: {
    titles: {
      thumbnail: './assets/정다은/thumbnail.png',
      title: 'Jalza',
      slogan: '“Good night, Sweet dreams”',
      detail: `일상생활에서 많이 지친 우리, 잠자리에서 만큼은 걱정 없이 가벼운 마음으로 잠에 들어 보아요.//Jalza의 몽환적인 상상과 함께 포근하고 편안한 수면을 즐겨본다면 어떨까요?`,
      hashtag: ['Deep_sleep', 'Life_style branding'],
    },
    info: {
      uri: 'jde',
      icon: './assets/정다은/personal_unit.png',
      profile: {
        img: './assets/정다은/정다은.jpg',
        name: '정다은',
        mail: 'jdaeun223@naver.com',
        insta: '',
        call: '01082256954',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/정다은/slide_1.png', './assets/정다은/slide_2.png', './assets/정다은/slide_3.png'],
        detail: ``,
      },
      {
        type: 'add1',
        title: 'About Deep Sleep',
        img: './assets/정다은/추가_1.png',
        detail: `수면은 무엇이고 왜 필요할까요?//인간은 누구나 잠을 자도록 생물학적으로 설계되어 있습니다. 그러나 우리는 수면이 무엇이고 어떤 원리로 이루어지는지에 대한 기초지식이 부족합니다. 또한 쉽게 잠들지 못하는 날이면 수면에 대한 강박이 생겨 편안한 잠자리를 방해받습니다.//본질적인 수면 문제를 해결하기 위해서는 보다 근원적인 접근이 필요합니다. 오늘날 인류 과학과 의학이 밝혀낸 수면은 단순히 잠을 자는 것이 아니라, 두뇌 기능의 회복 및 발달과 매우 밀접한 관련을 갖고 있기 때문입니다. 수면의 핵심은 수면을 돕는 도구나 제품이 아니라 바로 ‘사람’입니다. 편리한 물질문명 속에서 신체 움직임 감소와 과도한 스트레스를 가진 현대인에게 라이프스타일의 변화가 없는 외적인 조건의 변화만은 일시적이고 부차적인 해결법일 뿐입니다.//브랜드 Jalza는 수면을 방해하는 근원적인 원인을 분석하고 해결할 수 있도록 제안합니다.`,
      },
      {
        type: 'portfolio',
        title: 'Contents',
        imgs: ['./assets/정다은/pf_1.png', './assets/정다은/pf_2.png', './assets/정다은/pf_3.png'],
      },
      {
        type: 'add2',
        title: 'Sleep Record Paper & Poster',
        imgs: ['./assets/정다은/추가_2-1.png', './assets/정다은/추가_2-2.png'],
      },
    ],
  },
  jyn: {
    titles: {
      thumbnail: './assets/정유나/thumbnail.png',
      title: '어디둥지',
      slogan: '누구둥지 언제둥지 어디둥지',
      detail: `새들은 둥지를 지을 때 많은 재료들을 가지고 자신만의 둥지를 만듭니다. 새들마다 사용하는 재료들도 서로 다르고 다양합니다. 그렇게 다르고 다양한 재료들로 저마다 자신만의 안락한 둥지를 만듭니다. 사람도 마찬가지 입니다. 사람들도 저마다 다른 재료들을 가지고 있습니다. 어디둥지에서는 사용자의 취향, 선택을 바탕으로 그에 맞는 장소를 추천해줌으로써 사용자가 원하는 분위기, 힐링요소를 빠르게 알려줍니다.`,
      hashtag: ['힐링', '테스트', '둥자'],
    },
    info: {
      uri: 'jyn',
      icon: './assets/정유나/personal_unit.png',
      profile: {
        img: './assets/정유나/정유나.jpg',
        name: '정유나',
        mail: 'rabbit9924@naver.com',
        insta: '@__unaz',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/정유나/slide_1.png', './assets/정유나/slide_2.png', './assets/정유나/slide_3.png'],
        detail: `요즘 사람들은 mbti같은 테스트에 열광합니다. 이것은 포러효과라는 효과를 나타내는데, 포러효과는 성격에 대한 보편적인 묘사들이 자신과 정확히 일치 한다고 생각하는 경향을 뜻합니다.//어디둥지에서는 이 효과를 활용해 사용자의 힐링취향을 테스트형식으로 제공해 분석 한뒤,  조금 더 세밀하게 힐링분위기의 키워드를 선택하게 하여 사용자들의 정확한 힐링취향, 분위기등을 파악합니다. 그리고 어디둥지 의 ai가 사용자들에게 적합한 주변 여러 힐링명소들을 찾아 추천해줍니다. 다른 앱이나 인터넷에 검색할 필요없이 사용자는 원하는 힐링명소를 선택하면 바로 숙박, 예약까지도 한번에 어디둥지에서 해결할 수 있습니다.`,
      },
      {
        type: 'add1',
        title: 'APP CHARACTER, GRAPHIC',
        img: './assets/정유나/추가_1.png',
        detail: `어디둥지의 메인 캐릭터 둥자입니다.//둥자는 새를 바탕으로 만든 캐릭터로 , 자신만의 재료를 찾아 자기만의 안락한 둥지를 만들어 힐링을 즐깁니다.//어디둥지의 그래픽 아이덴디티 아이콘입니다.//둥근 라인을 활용해 앱의 아이콘등에 활용했습니다.`,
      },
      {
        type: 'portfolio',
        title: '누구둥지 언제둥지 어디둥지 : 어디둥지',
        imgs: ['./assets/정유나/pf_1.png', './assets/정유나/pf_2.png', './assets/정유나/pf_3.png'],
      },
    ],
  },
  jej: {
    titles: {
      thumbnail: './assets/조은지/thumbnail.png',
      title: '6060',
      slogan: '당신의 청력은 안전한가요?',
      detail: `시·청각 미디어 시장의 발달로 인해 콘텐츠를 손쉽게 시청, 청취할 수 있는 환경입니다. 이러한 환경들이 사람들에게 소음성 난청에 노출될 확률이 높아지게 됩니다. 소음성 난청을 예방하고자 세계 보건기구에서 '최대 음량의 60% 이하, 하루 60분 미만'을 듣도록 권고해왔습니다. 이것을 6060 법칙이라고 부릅니다. 당신의 청력을 보호하기 위한 6060 법칙,//6060 법칙을 삶에 스며들게 하기 위한 헤드폰을 소개합니다.`,
      hashtag: ['소음성난청', '헤드폰', '6060법칙'],
    },
    info: {
      uri: 'jej',
      icon: './assets/조은지/personal_unit.png',
      profile: {
        img: './assets/조은지/조은지.jpg',
        name: '조은지',
        mail: 'joenji5933@naver.com',
        insta: '',
        call: '01022728615',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/조은지/slide_1.png', './assets/조은지/slide_2.png', './assets/조은지/slide_3.png'],
        detail: `70dB을 기준점으로 하여 지역별로 2019년부터 2021년3월까지의 데시벨 통계, 난청환자의 수, 데시벨에 따른 신체적 영향 위험도를 시각화 한 인포그래픽스 디자인입니다. 소음에 의한 소음성 난청의 심각성을 인지하고 예방할 수 있도록 전달하는 것에 목적을 두고 있습니다.`,
      },
      {
        type: 'add1',
        title: '당신의 청력을 위한 6060 헤드폰',
        img: './assets/조은지/추가_1.png',
        detail: `소음에 의한, 소음을 위한 6060의 BI는 소음으로 소음을 잡는 노이즈 캔슬링의 원리를 이용한 로고부터 시작합니다. 외부에서 유입되고자 하는음파를 레드,그와 반대되는 음파를 블루로 잡아 대비가 되는 색상이 강렬하게 나타내도록 하였습니다.//레드를 잡아줄 블루, 그것이 당신의 청력을 안전하게 지켜줄 6060 헤드폰입니다.`,
      },
      {
        type: 'portfolio',
        title: 'APP_일주일간의 청력 기록 mainpage',
        imgs: ['./assets/조은지/pf_1.png', './assets/조은지/pf_2.png', './assets/조은지/pf_3.png'],
      },
      {
        type: 'add2',
        title: '청력을 예방하기 위한 적절한 데시벨',
        imgs: ['./assets/조은지/추가_2-1.png', './assets/조은지/추가_2-2.png'],
      },
      {
        type: 'add3',
        title: 'APP_Motion',
        video: '조은지',
      },
    ],
  },
  jsb: {
    titles: {
      thumbnail: './assets/진수별/thumbnail.png',
      title: '休_휴',
      slogan: 'Closed your eyes and see',
      detail: `오늘날 현대인들은 다양한 문화를 즐기며 사회를 살아가고 있지만 그와 동시에 스트레스와 피로 속에서 생활하고 있어 육체적 안정과 심리적인 위안을 찾는 데에 관심이 더욱 높아지고 있습니다. 이런 현대인들에게는 지친 일상 속에서 잠시 눈을 감고 모든 것을 내려놓을 수 있는 휴식시간이 절실하게 필요합니다.`,
      hashtag: ['휴식', '평온', 'closed_eyes'],
    },
    info: {
      uri: 'jsb',
      icon: './assets/진수별/personal_unit.png',
      profile: {
        img: './assets/진수별/진수별.jpg',
        name: '진수별',
        mail: 'polisup3@naver.com',
        insta: '',
        call: '01048595144',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/진수별/slide_1.png', './assets/진수별/slide_2.png', './assets/진수별/slide_3.png'],
        detail: `휴식 명상 키트 브랜드 ‘휴’는 휴식을 원하는 사람들의 삶에 평온하고 안정적인 마음의 휴식처를 마련해 주어 심신의 안정을 느낄 수 있는 것을 목표로 합니다. 눈을 감고 자연의 향을 느끼며 마음의 짐을 내려놓으면 평소 우리가 보지 못했던 새로운 것들이 보일 것입니다.`,
      },
      {
        type: 'add1',
        title: 'Graphic motifs',
        img: './assets/진수별/추가_1.png',
        detail: `우리가 눈을 감으면 보이는 노이즈와 섬광의 특징을 그래픽으로 표현하여 시각적 즐거움과 동시에 안내섬광에 대한 정보를 함께 담아보았습니다. 노이즈와 섬광 그리고 빛의 흐름을 다양한 방식으로 표현하여서 잔잔하지만 화려하게, 다채로운 느낌을 전달합니다. 이러한 그래픽 시스템을 바탕으로 기존의 휴식과 명상의 잔잔하고 무료한 이미지를 탈피하여 새로운 이미지를 제안하였습니다.`,
      },
      {
        type: 'portfolio',
        title: '눈을 감으면 보이는 것: 안내섬광',
        imgs: ['./assets/진수별/pf_1.png', './assets/진수별/pf_2.png', './assets/진수별/pf_3.png'],
      },
      {
        type: 'add2',
        title: '休_휴: Branding',
        imgs: ['./assets/진수별/추가_2-1.png', './assets/진수별/추가_2-2.png'],
      },
    ],
  },
  hyr: {
    titles: {
      thumbnail: './assets/한예리/thumbnail.png',
      title: 'Colorado bitches',
      slogan: '10일간의 로드트립, 우리들은 Colorado bitches.',
      detail: `로드트립은 차로 이동하는 장거리의 여행을 의미합니다. 미국에서의 교환학생 생활 중 가장 기억에 남는 10일간의 로드트립을 그래픽으로 작업하였습니다.`,
      hashtag: ['로드트립'],
    },
    info: {
      uri: 'hyr',
      icon: './assets/한예리/personal_unit.png',
      profile: {
        img: './assets/한예리/한예리.jpg',
        name: '한예리',
        mail: 'yoriya030@daum.net',
        insta: '@yeeeeeeeeeri',
        call: '',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/한예리/slide_1.png', './assets/한예리/slide_2.png', './assets/한예리/slide_3.png'],
        detail: ``,
      },
      {
        type: 'portfolio',
        title: 'Colorado bitches',
        imgs: ['./assets/한예리/pf_1.png', './assets/한예리/pf_2.png', './assets/한예리/pf_3.png'],
      },
    ],
  },
  hyd: {
    titles: {
      thumbnail: './assets/홍이도/thumbnail.png',
      title: '그루터기',
      slogan: '나무에 남겨진 나이테',
      detail: `그루터기를 재해석하여 의자를 디자인하였고 인간의 삶과 시간을 담았습니다.`,
      hashtag: ['가구', '나이테', '삶'],
    },
    info: {
      uri: 'hyd',
      icon: './assets/홍이도/personal_unit.png',
      profile: {
        img: './assets/홍이도/홍이도.jpg',
        name: '홍이도',
        mail: 'ghdduddnr@naver.com',
        insta: '',
        call: '01075910602',
      },
    },
    contents: [
      {
        type: 'slide',
        imgs: ['./assets/홍이도/slide_1.png', './assets/홍이도/slide_2.png', './assets/홍이도/slide_3.png'],
        detail: ``,
      },
      {
        type: 'portfolio',
        title: '그루터기',
        imgs: ['./assets/홍이도/pf_1.png', './assets/홍이도/pf_2.png', './assets/홍이도/pf_3.png'],
      },
    ],
  },
};
