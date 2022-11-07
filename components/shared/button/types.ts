export interface IProps {
  title: string;
  type: 'submit' | 'button'
  disabled?: boolean;
  onClick?: () => void;
}
