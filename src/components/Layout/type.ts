import React from 'react';

export interface LayoutMenuItem {
  key: string;
  icon?: React.ReactNode;
  label: string;
  disabled?: boolean;
  children?: LayoutMenuItem[];
}
