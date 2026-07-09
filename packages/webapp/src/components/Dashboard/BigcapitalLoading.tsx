// @ts-nocheck
import React from 'react';
import classNames from 'classnames';

import '@/style/components/BigcapitalLoading.scss';
import { useIsDarkMode } from '@/hooks/useDarkMode';

/**
 * Bigcapital logo loading.
 */
export default function BigcapitalLoading({ className }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={classNames('bigcapital-loading', className)}>
      <div className="center">
        {import.meta.env.VITE_AGENCY_LOGO_URL ? (
          <img
            src={import.meta.env.VITE_AGENCY_LOGO_URL}
            alt={import.meta.env.VITE_AGENCY_NAME || 'Loading...'}
            style={{
              maxHeight: '40px',
              maxWidth: '214px',
              objectFit: 'contain',
            }}
          />
        ) : (
          <h1
            style={{
              color: isDarkMode ? 'rgba(255,255,255,0.85)' : '#111827',
              margin: 0,
              fontSize: '32px',
              opacity: 0.7,
              animation: 'pulse 2s infinite',
            }}
          >
            {import.meta.env.VITE_AGENCY_NAME || 'TravelBooks'}
          </h1>
        )}
      </div>
    </div>
  );
}
