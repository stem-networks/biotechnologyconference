'use client';

import Image from "next/image";
// import Link from "next/link";

interface Speaker {
  id: number;
  image: string;
  name: string;
  institution: string;
  country: string;
  altText: string;
}

const membersData: Speaker[] = [
  {
    id: 1,
    image: "/images/images/Thomas.png",
    name: "Thomas J. Webster",
    institution: "Hebei University of Technology",
    country: "United States",
    altText: "Thomas J. Webster",
  },
  {
    id: 2,
    image: "/images/images/ravi_maharjan.webp",
    name: "Ravi Maharjan",
    institution: "Dongguk University",
    country: "South Korea",
    altText: "Ravi Maharjan",
  },
  {
    id: 3,
    image: "/images/images/giovanni.webp",
    name: "Giovanni Pagano",
    institution: "University of Naples Federico II",
    country: "Italy",
    altText: "Giovanni Pagano",
  },
  {
    id: 4,
    image: "/images/images/Jaswanth.webp",
    name: "B.H. Jaswanth Gowda",
    institution: "Queen's University Belfast",
    country: "United Kingdom",
    altText: "B.H. Jaswanth Gowda",
  },
  {
    id: 5,
    image: "/images/images/rodica_olteanu.jpg",
    name: "Rodica Olteanu",
    institution: "Colentina Clinical Hospital",
    country: "Romania",
    altText: "Rodica Olteanu",
  },
  {
    id: 6,
    image: "/images/images/tarek_aboul.jpg",
    name: "Tarek Aboul Fadl",
    institution: "Assiut University",
    country: "Egypt",
    altText: "Tarek Aboul Fadl",
  },
];

const Members = () => {
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
                Our <span>Planning Committee 2025</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="members-card-block">
              <div className="row-member row">
                {membersData.map((speaker, index) => (
                  <div
                    className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4
                      ? 'members-specific-space'
                      : 'member-spacing'
                      }  wow fadeInUp`}
                    data-wow-delay={`${200 + index * 150}ms`}
                    data-wow-duration="1000ms"
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

          {/* <div className="members-view-all-btn-block wow fadeInUp" data-wow-delay={`${200 + membersData.length * 150}ms`} data-wow-duration="1000ms">
            <Link
              href="/committee"
              title="View All"
              className="view-more-speakers-btn"
            >
              View All
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Members;
