export interface NoticeDetailType {
  id: string;
  title: string;
  summary?: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  category?: '신메뉴' | '콜라보' | '공지' | '시즌메뉴';
}
