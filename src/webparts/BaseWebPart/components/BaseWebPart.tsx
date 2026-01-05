import * as React from 'react';
import { IBaseConfig } from '../models/IBaseConfig';
import { LoadingState } from './LoadingState';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';

export interface IBaseWebPartProps {
  config: IBaseConfig;
}

export const BaseWebPartComponent: React.FC<IBaseWebPartProps> = ({ config }) => {
  // Configuration guard
  if (!config?.enabled) {
    return <EmptyState />;
  }

  // Skeleton intentionally does not load real data
  const isLoading = false;
  const hasError = false;
  const hasData = false;

  if (isLoading) {
    return <LoadingState />;
  }

  if (hasError) {
    return <ErrorState message="An unexpected error occurred." />;
  }

  if (!hasData) {
    return <EmptyState />;
  }

  return (
    <div>
      {/* Placeholder for real content */}
      <div>Base Web Part Content</div>
    </div>
  );
};
