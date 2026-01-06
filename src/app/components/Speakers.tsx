'use client';

import Image from "next/image";
import Link from "next/link";

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
    image: "/images/speakers-2026/Martin_Von_Bergen.jpg",
    name: "Martin Von Bergen",
    institution: "Helmholtz Centre for Environmental Research",
    country: "Germany",
    altText: "Martin Von Bergen",
  },
  {
    id: 3,
    image: "/images/speakers-2026/Andreas_M_Papas.webp",
    name: "Andreas M Papas",
    institution: "East Tennessee State University",
    country: "USA",
    altText: "Andreas M Papas",
  },
  {
    id: 4,
    image: "/images/speakers-2026/Shu_Chun_Chang.webp",
    name: "Shu-Chun Chang",
    institution: "Taipei Medical University",
    country: "Taiwan",
    altText: "Shu-Chun Chang",
  },
  {
    id: 5,
    image: "/images/speakers-2026/Willie_Sai_Ho_Chan.jpg",
    name: "Willie Sai Ho Chan",
    institution: "China Medical University",
    country: "Hong Kong",
    altText: "Willie Sai Ho Chan",
  },
  {
    id: 6,
    image: "/images/speakers-2026/Aalaa_Saad.png",
    name: "Aalaa Saad",
    institution: "Animal Health Research Institute",
    country: "Egypt",
    altText: "Aalaa Saad",
  },
];

const Speakers = () => {
  return (
    <div className="speakers-sections members-main-block">
      <div className="import_wrap import-wrapping">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
              data-wow-duration="1000ms">
              <h2>Our <span>Speakers 2026</span></h2>

            </div>
          </div>

          <section className="blog">
            {/* <!-- container Start--> */}
            <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
              <div className="col-md-12 col-12">
                <div className="grid-main-members-gap">
                  {speakersData.map((member, index) => (
                    <div
                      key={index}
                      className={`each-member-gap ${index >= 3 ? 'member-row-gap' : ''} wow fadeInUp`}
                      data-wow-delay={`${200 + index * 150}ms`}
                      data-wow-duration="1000ms"
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

          <div className="members-view-all-btn-block wow fadeInUp" data-wow-delay={`${200 + speakersData.length * 150}ms`} data-wow-duration="1000ms">
            <Link href='/speakers' title="View All" className="view-more-speakers-btn">View All</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
