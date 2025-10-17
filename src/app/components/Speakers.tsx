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
];


const Speakers = () => {
  return (
    <div className="speakers-section first-design">
      <div className="import_wrap">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div
              className="col-md-12 session_wrap_style1 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <h2>
                Our <span>Speakers 2025</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="members-card-block">
              <div className="row-member row">
                {speakersData.map((speaker, index) => (
                  <div
                    className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4
                      ? 'members-specific-space'
                      : 'member-spacing'
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

          <div className="members-view-all-btn-block">
            <Link
              href="/speakers"
              title="View All"
              className="view-more-speakers-btn"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
