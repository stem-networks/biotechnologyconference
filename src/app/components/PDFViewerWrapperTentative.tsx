// src/app/components/PDFViewerWrapperTentative.tsx
'use client';

import dynamic from 'next/dynamic';
// import PDFViewerTentative from './PDFViewerTentative';

const PDFViewerTentative = dynamic(() => import('./PDFViewerTentative'), {
    ssr: false,
});

interface PDFViewerWrapperProps {
    fileUrl: string;
}

export default function PDFViewerWrapperTentative({ fileUrl }: PDFViewerWrapperProps) {
    return <PDFViewerTentative fileUrl={fileUrl} />;
}
