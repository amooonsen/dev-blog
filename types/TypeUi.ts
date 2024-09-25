export type DialogType = 'alert' | 'dialog';

export interface AlertDialogProps {
  type: 'alert';
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface CustomDialogProps {
  type: 'dialog';
  title?: string;
  description?: string;
  content?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
