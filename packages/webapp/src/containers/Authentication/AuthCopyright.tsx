// @ts-nocheck
// import React from 'react';
// import { Icon } from '@/components/Icon';

// export function AuthCopyright() {
//   return <Icon width={122} height={22} icon={'bigcapital'} />;
// }

import React from 'react';

export function AuthCopyright() {
  return (
    <div
      style={{
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '12px',
        fontWeight: 600,
        marginTop: '20px',
      }}
    >
      {import.meta.env.VITE_AGENCY_NAME || 'TravelBooks'}.
    </div>
  );
}
