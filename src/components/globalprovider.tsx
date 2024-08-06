'use client'



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