import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { getBaseUrl } from '@/lib/getBaseUrl';
import { ApiResponse } from '@/types';
import { Metadata } from 'next';

interface Speaker {
    id: number;
    image: string;
    name: string;
    institution: string;
    country: string;
    altText: string;
}

const speakersData: Speaker[] = [
    {
        id: 1,
        image: "/images/images/eliane_silva.webp",
        name: "Eliane Silva",
        institution: "University of Porto",
        country: "Portugal",
        altText: "Eliane Silva",
    },
    {
        id: 2,
        image: "/images/images/malgorzata_masierek.jpg",
        name: "Malgorzata Masierek",
        institution: "Bioton S.A",
        country: "Poland",
        altText: "Malgorzata Masierek",
    },
    {
        id: 3,
        image: "/images/images/kayhan_Hulya.JPG",
        name: "Kayhan Hulya",
        institution: "Istanbul University",
        country: "United Kingdom",
        altText: "Kayhan Hulya",
    },
    {
        id: 4,
        image: "/images/images/sadee_Wolfgang.png",
        name: "Sadee Wolfgang",
        institution: "The Ohio State University",
        country: "United States",
        altText: "Sadee Wolfgang",
    },
    {
        id: 5,
        image: "/images/images/nigel_Smart.jpg",
        name: "Nigel J Smart",
        institution: "SMART Pharmaceutical Consulting",
        country: "United States",
        altText: "Nigel J Smart",
    },
    {
        id: 6,
        image: "/images/images/rafael_Vazquez_Duhalt.png",
        name: "Rafael Vazquez Duhalt",
        institution: "National Autonomous University of Mexico",
        country: "Mexico",
        altText: "Rafael Vazquez Duhalt",
    },
    {
        id: 7,
        image: "/images/images/Francis_T_Scullion.jpg",
        name: "Francis T. Scullion",
        institution: "Veterinary Services, N. Ireland",
        country: "United Kingdom",
        altText: "Francis T. Scullion",
    },
    {
        id: 8,
        image: "/images/images/Andreas_Engel.jpg",
        name: "Andreas Engel",
        institution: "University of Basel",
        country: "Switzerland",
        altText: "Andreas Engel",
    },
    {
        id: 9,
        image: "/images/images/Iliana_Ivanova.jpg",
        name: "Iliana Ivanova",
        institution: "Sofia University",
        country: "Bulgaria",
        altText: "Iliana Ivanova",
    },
    {
        id: 10,
        image: "/images/images/Yarigui_Bao.jpg",
        name: "Yarigui Bao",
        institution: "Inner Mongolia Medical University",
        country: "China",
        altText: "Yarigui Bao",
    },
    {
        id: 11,
        image: "/images/images/prashant_sakharam.webp",
        name: "Prashant Sakharam Bhokardankar",
        institution: "Datta Meghe Ayurvedic Medical College",
        country: "India",
        altText: "Prashant Sakharam Bhokardankar",
    },
    {
        id: 12,
        image: "/images/images/sergei_danilov.webp",
        name: "Sergei M. Danilov",
        institution: "University of Illinois at Chicago",
        country: "USA",
        altText: "Sergei M. Danilov",
    },
    {
        id: 13,
        image: "/images/images/yongda_Sun.png",
        name: "Yongda Sun",
        institution: "3S PharmaTech (3SPT LLC), CA",
        country: "United States of America",
        altText: "Yongda Sun",
    },
];



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
        const meta = generalData?.pages?.speakers?.[0] || {
            title: "Speakers",
            content: "Explore the Speakers of the conference.",
            meta_keywords: "",
        };

        // Canonical
        // const baseUrl = process.env.BASE_URL || "";
        const canonicalPath = "/speakers"; // hardcode since we know this is sessions page
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
        console.error("Metadata generation error Speakers:", error);
        return {
            title: "Speakers",
            description: "Explore the Speakers of the conference.",
            keywords: "",
        };
    }
}

const speakers = () => {
    return (
        <div>

            <div className="brand_wrap">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link href="/" title='Navigate to Homepage'>Home</Link> <i className="fa fa-angle-right"></i>
                            <span>Speakers</span>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Our Speakers</h2>

            <div className="speakers-section first-design">
                <div className='auto-container'>
                    <div className='row clearfix'>
                        <div className='col-lg-12 col-md-12 mar_center'>
                            <div className='row clearfix'>
                                <div className='col-lg-12 col-md-12 wow fadeInUp animated' data-wow-delay='400ms'
                                    data-wow-duration='1000ms'>

                                    <div className="">
                                        <div className='members-card-block committee-spacing'>
                                            <div className="row-member row">
                                                {speakersData.map((speaker, index) => (
                                                    <div
                                                        className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4 ? 'members-specific-space' : 'member-spacing'
                                                            }`}
                                                        key={index}
                                                    >
                                                        <div className="card text-center p-3 border">
                                                            <div className="custom-border-wrapper">
                                                                <div className="image-wrapper mb-3">
                                                                    <Image
                                                                        src={speaker.image}
                                                                        alt={speaker.name}
                                                                        title={speaker.name}
                                                                        width={200}
                                                                        height={200}
                                                                        className="rounded-circle img-fluid"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="speaker-details normal-design">
                                                                <h3>{speaker.name}</h3>
                                                                <p>{speaker.institution}</p>
                                                                <p>{speaker.country}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default speakers