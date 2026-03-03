export interface PlayItem {
  id: number;
  size: 'small' | 'large' | 'tall' | 'wide' | string;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  img: string;
  video?: string | null;
  link?: string;
}