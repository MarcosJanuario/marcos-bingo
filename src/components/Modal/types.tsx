export interface ModalProps {
  showCloseButton?: boolean;
  onClose?: () => void;
  children: JSX.Element;
}
