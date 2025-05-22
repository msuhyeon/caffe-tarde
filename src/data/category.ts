import { CategoryType } from '@/shared/types/category';

export const category: CategoryType[] = [
  {
    label: '따르데 소개',
    linkUrl: '/info/vision',
    subItems: [
      { label: '비전', linkUrl: '/info/vision' },
      { label: '품질', linkUrl: '/info/quality' },
    ],
  },
  {
    label: '메뉴',
    linkUrl: '/menu',
    subItems: [
      { label: '음료', linkUrl: '/menu/drinks' },
      { label: '디저트', linkUrl: '/menu/deserts' },
    ],
  },
  {
    label: '멤버십',
    linkUrl: '/membership',
    subItems: [],
  },
  {
    label: '브랜드 소식',
    linkUrl: '/brand/notice',
    subItems: [
      { label: '공지사항', linkUrl: '/brand/notice' },
      { label: '이벤트 안내', linkUrl: '/brand/event' },
      { label: '사회공헌 활동', linkUrl: '/brand/csp' },
    ],
  },
  {
    label: '고객 지원',
    linkUrl: '/faq',
    subItems: [{ label: '자주 묻는 질문', linkUrl: '/faq' }],
  },
];
