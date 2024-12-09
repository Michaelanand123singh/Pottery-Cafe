export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'breakfast' | 'beverages' | 'shisha' | 'snacks' | 'desserts';
  dietary?: ('vegetarian' | 'vegan')[];
}