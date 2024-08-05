'use client'

import { ClerkProvider } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

function Globalprovider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider >
        {children}
      </ClerkProvider>
    </QueryClientProvider>
  )
}

export default Globalprovider