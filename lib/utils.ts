import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// store
import { DialogProps, useDialogStore } from '@/store/dialogStore';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const makeDialog = (props: DialogProps) => {
  const { openDialog } = useDialogStore.getState();
  openDialog(props);
};
