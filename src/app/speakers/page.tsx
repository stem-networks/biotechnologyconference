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
        image: "/images/speakers-2026/Bimal_Roy_Krishna.jpg",
        name: "Bimal Roy Krishna",
        institution: "Touro University",
        country: "United States",
        altText: "Bimal Roy Krishna",
    },
    {
        id: 2,
        image: "/images/speakers-2026/Shu_Chun_Chang.webp",
        name: "Shu-Chun Chang",
        institution: "Taipei Medical University",
        country: "Taiwan",
        altText: "Shu-Chun Chang",
    },
    {
        id: 3,
        image: "/images/speakers-2026/Willie_Sai_Ho_Chan.jpg",
        name: "Willie Sai Ho Chan",
        institution: "China Medical University",
        country: "Hong Kong",
        altText: "Willie Sai Ho Chan",
    },
    {
        id: 4,
        image: "/images/speakers-2026/Aalaa_Saad.png",
        name: "Aalaa Saad",
        institution: "Animal Health Research Institute",
        country: "Egypt",
        altText: "Aalaa Saad",
    },
    {
        id: 5,
        image: "/images/speakers-2026/Aziz_Maleki.jpg",
        name: "Aziz Maleki",
        institution: "Zanjan University of Medical Sciences",
        country: "Iran",
        altText: "Aziz Maleki",
    },
    {
        id: 6,
        image: "/images/speakers-2026/Ved_Prakash_Singh.jpg",
        name: "Ved Prakash Singh",
        institution: "Mizoram University",
        country: "India",
        altText: "Ved Prakash Singh",
    },
    {
        id: 7,
        image: "/images/speakers-2026/Shanmugam_Gunalan_Pillai.jpg",
        name: "Shanmugam Gunalan Pillai",
        institution: "AMET University",
        country: "India",
        altText: "Shanmugam Gunalan Pillai",
    },
    {
        id: 8,
        image: "/images/speakers-2026/tarek_aboul.jpg",
        name: "Tarek Aboul Fadl",
        institution: "Assiut University",
        country: "Egypt",
        altText: "Tarek Aboul Fadl",
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

            <h2 className="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Our Speakers 2026</h2>

            <div className="speakers-sections members-main-block">
                <div className='auto-container'>
                    <div className='row clearfix'>
                        <div className='col-lg-12 col-md-12 mar_center'>
                            <div className='row clearfix'>
                                <div className='col-lg-12 col-md-12 wow fadeInUp animated' data-wow-delay='400ms'
                                    data-wow-duration='1000ms'>

                                    <div className="">
                                        <section className="blog">
                                            {/* <!-- container Start--> */}
                                            <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                                                <div className="col-md-12 col-12">
                                                    <div className="grid-main-members-gap">
                                                        {speakersData.map((member, index) => (
                                                            <div
                                                                key={index}
                                                                className={`each-member-gap ${index >= 3 ? 'member-row-gap' : ''}`}
                                                            >
                                                                <div className="grid-res-gap member-resp-gap">
                                                                    <div className="grid-res-item">
                                                                        <Image
                                                                            src={member.image}
                                                                            alt={member.name}
                                                                            title={member.name}
                                                                            width={200}
                                                                            height={200}
                                                                            className="rounded-circle img-fluid"
                                                                        />
                                                                    </div>
                                                                    <div className="inner-content">
                                                                        <h3>{member.name}</h3>
                                                                        <p className="members-p1 member-country">{member.country}</p>
                                                                        <p className="members-p1">{member.institution}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
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