// 'use client';

import React from 'react';
// import PDFViewer from '../components/PDFViewer';
import Link from 'next/link';
import { ApiResponse } from '@/types';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';
import PDFViewerWrapperTentative from '../components/PDFViewerWrapperTentative';

async function fetchGeneralData(): Promise<ApiResponse> {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/general`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch general data");
    return res.json();
}

async function fetchGeneralDataStatic(): Promise<ApiResponse> {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/general`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) throw new Error("Failed to fetch general data statically");
    return res.json();
}

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
    try {
        const generalData = await fetchGeneralDataStatic();
        const meta = generalData?.pages?.tentative_program?.[0] || {
            title: "Tentative Program",
            content: "Explore the Tentative Program of the conference.",
            meta_keywords: "",
        };

        // Canonical
        // const baseUrl = process.env.BASE_URL || "";
        const canonicalPath = "/tentative-program"; // hardcode since we know this is sessions page
        const canonicalURL = `${getBaseUrl()}${canonicalPath}`;

        return {
            title: meta.title,
            description: meta.content,
            keywords: meta.meta_keywords,
            metadataBase: new URL(getBaseUrl()),
            alternates: {
                canonical: canonicalURL,
            },
        };
    } catch (error) {
        console.error("Metadata generation error Tentative Program:", error);
        return {
            title: "Tentative Program",
            description: "Explore the Tentative Program of the conference.",
            keywords: "",
        };
    }
}

const ScientificProgram = async () => {

    const general = await fetchGeneralData();
    const general_info = general?.data || {};


    const fileUrl = `/${general_info.csname}_tentative_program.pdf`; // Make sure this file is inside your public folder

    return (
        <div>
            {/* Breadcrumb */}
            <div className="brand_wrap">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                            <Link href="/">Home</Link> <i className="fa fa-angle-right"></i>
                            <span>Tentative Program</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Title */}
            <h2 className="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                Tentative Program 2026
            </h2>

            {/* PDF Viewer */}
            <PDFViewerWrapperTentative fileUrl={fileUrl} />
        </div>
    );
};

export default ScientificProgram;
