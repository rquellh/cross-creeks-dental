export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
  link?: { href: string; label: string };
}
