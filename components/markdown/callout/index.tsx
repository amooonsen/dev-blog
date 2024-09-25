import { PropsWithChildren } from 'react';

import * as Icon from './Icons';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warn' | 'danger' | 'normal';

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

interface IconMetadata {
  icon: () => JSX.Element;
  boxClass: string;
}

// 개선된 메타데이터 타입 정의
const getIconMetadata = (type: CalloutType): IconMetadata => {
  switch (type) {
    case 'info':
      return {
        icon: Icon.Warn,
        boxClass: 'text-informative-foreground bg-primary-foreground',
      };
    case 'danger':
      return {
        icon: Icon.Danger,
        boxClass: 'text-destructive-foreground bg-destructive',
      };
    case 'warn':
      return {
        icon: Icon.Info,
        boxClass: 'text-warning-foreground bg-warning',
      };
    case 'normal':
    default:
      return {
        icon: Icon.Normal,
        boxClass: 'text-secondary-foreground bg-secondary',
      };
  }
};

export const Callout = ({ type = 'normal', title, children }: CalloutProps) => {
  const { icon: IconComponent, boxClass } = getIconMetadata(type);

  return (
    <div className={cn('my-6 flex items-center gap-3 rounded-md px-5 py-4', boxClass)}>
      {type !== 'normal' && (
        <div>
          <IconComponent />
        </div>
      )}

      <div className="callout-contents flex-1">
        {title && <span style={{ fontWeight: 'bold' }}>{children}</span>}
        {children}
      </div>
    </div>
  );
};
