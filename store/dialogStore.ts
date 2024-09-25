// stores/dialogStore.ts
import { create } from 'zustand';

import { AlertDialogProps, CustomDialogProps } from '../types/TypeUi';

export type DialogProps = AlertDialogProps | CustomDialogProps;

interface DialogStore {
  isOpen: boolean;
  dialogProps?: DialogProps;
  openDialog: (props: DialogProps) => void;
  closeDialog: () => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false,
  dialogProps: undefined,
  openDialog: (props) => set({ isOpen: true, dialogProps: props }),
  closeDialog: () => set({ isOpen: false, dialogProps: undefined }),
}));
