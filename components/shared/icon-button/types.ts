export interface IIconButton {
  src: string;
  title: string;
  size?: 'small' | 'large';
  color?: 'black' | 'white';
  onClick: () => void;
}