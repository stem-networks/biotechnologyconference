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
    <div className="speakers-sections members-main-block">
      <div className="import_wrap import-wrapping">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
              data-wow-duration="1000ms">
              <h2>Our <span>Planning Committee 2025</span></h2>

            </div>
          </div>

          <section className="blog">
            {/* <!-- container Start--> */}
            <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
              <div className="col-md-12 col-12">
                <div className="grid-main-members-gap">
                  {membersData.map((member, index) => (
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

          {/* <div className='members-view-all-btn-block'>
            <Link href='/committee' title="View All" className="view-more-speakers-btn">View All</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Members;
