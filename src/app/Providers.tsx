// app/providers.tsx
'use client'


import { Toaster } from '@/components/ui/toaster';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';



export function Providers({ children }: { children: React.ReactNode }) {


    return (

        <>
            <ProgressBar
                height="2px"
                color="#55C056"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <Toaster/>
            {children}
        </>
    )
}