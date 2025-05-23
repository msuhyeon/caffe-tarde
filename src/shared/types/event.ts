export interface EventType {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
  isActive: boolean;
  period: {
    start: string;
    end: string;
  };
}
