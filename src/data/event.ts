import { EventType } from '@/shared/types/event';

export const eventData: EventType[] = [
  {
    id: '1',
    title: '가을이오면 고소한 라떼 한잔!',
    imageUrl: '/images/event_banner_pre.png',
    createdAt: '2024-04-11T00:00:00',
    isActive: false,
    period: {
      start: '2024-04-11',
      end: '2024-04-25',
    },
  },
  {
    id: '2',
    title: '멤버십 회원 대상 🎁 아메리카노 1+1 쿠폰 증정',
    imageUrl: '/images/event_banner_pre.png',
    createdAt: '2024-04-21T00:00:00',
    isActive: false,
    period: {
      start: '2024-04-21',
      end: '2024-05-05',
    },
  },
  {
    id: '3',
    title: '프리미엄 티라미수 출시! 🍰 인스타 인증 이벤트',
    imageUrl: '/images/event_banner_pre.png',
    createdAt: '2024-05-01T00:00:00',
    isActive: false,
    period: {
      start: '2024-05-01',
      end: '2024-05-15',
    },
  },
  {
    id: '4',
    title: '콜라보 굿즈 런칭 기념 한정판 머그 증정 이벤트',
    imageUrl: '/images/event_banner_pre.png',
    createdAt: '2024-05-11T00:00:00',
    isActive: false,
    period: {
      start: '2024-05-11',
      end: '2024-05-25',
    },
  },
  {
    id: '5',
    title: '따르데X페이코 결제 시 2천원 즉시 할인 💳',
    imageUrl: '/images/event_banner_pre.png',
    createdAt: '2024-05-21T00:00:00',
    isActive: true,
    period: {
      start: '2024-05-21',
      end: '2024-06-04',
    },
  },
  {
    id: '6',
    title: '여름 시즌 🍋 청포도 에이드 출시 이벤트',
    imageUrl: '/images/event_banner_pre.png',
    createdAt: '2025-05-15T00:00:00',
    isActive: true,
    period: {
      start: '2025-05-15',
      end: '2025-05-29',
    },
  },
  {
    id: '7',
    title: 'SNS 공유하고 무료 디저트 받자! 🎉',
    imageUrl: '/images/event_banner_7.png',
    createdAt: '2025-05-25T00:00:00',
    isActive: true,
    period: {
      start: '2025-05-25',
      end: '2025-06-08',
    },
  },
];
