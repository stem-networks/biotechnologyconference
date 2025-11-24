// 'use client';

// import dynamic from 'next/dynamic';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { useState } from 'react';

// // Dynamically import Viewer and Worker to avoid SSR issues
// const Viewer = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Viewer), {
//     ssr: false,
// });
// const Worker = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Worker), {
//     ssr: false,
// });

// interface PDFViewerProps {
//     fileUrl: string;
// }

// const PDFViewer = ({ fileUrl }: PDFViewerProps) => {
//     const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

//     const tabs = [
//         {
//             id: 1,
//             label: "All Teams",
//             content:
//                 "TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet eget lectus eu congue...",
//         },
//         {
//             id: 2,
//             label: "Sales",
//             content:
//                 "TAB 2 - Quisque egestas, purus in tempor vulputate, diam augue mollis quam...",
//         },
//         {
//             id: 3,
//             label: "Marketing",
//             content:
//                 "TAB 3 - Donec vulputate ante ac ligula vestibulum, id mollis diam commodo...",
//         },
//         {
//             id: 4,
//             label: "Customer Success",
//             content:
//                 "TAB 4 - Quisque egestas, purus in tempor vulputate, diam augue mollis quam...",
//         },
//     ];

//     if (!fileUrl) {
//         return <p className="auto-container">No scientific program available.</p>;
//     }

//     // const fileUrl =
//     //     activeTab === 'day1'
//     //         ? '/pdfs/day1-program.pdf'
//     //         : '/pdfs/day2-program.pdf'; // change to your actual file paths

//     return (
//         // <div className='tentative-pdf-block'>

//         //     <div className='tentative-tabs-block'>
//         //         <div>Day1</div>
//         //         <div>Day2</div>
//         //     </div>
//         //     <div className="auto-container">
//         //         <div className="scientific-program-container">
//         //             <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//         //                 <Viewer fileUrl={fileUrl} />
//         //             </Worker>
//         //         </div>
//         //     </div>
//         // </div>

//          <div className="tentative-pdf-block">
//             <div className="tentative-tabs-block">
//                 <div
//                     className={`tab-item ${activeTab === 'day1' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('day1')}
//                 >
//                     Day 1
//                 </div>
//                 <div
//                     className={`tab-item ${activeTab === 'day2' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('day2')}
//                 >
//                     Day 2
//                 </div>
//                 <div
//                     className={`active-line ${activeTab === 'day2' ? 'move-right' : ''}`}
//                 ></div>
//             </div>

//             <div className="auto-container">
//                 <div className="scientific-program-container">
//                     <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//                         <Viewer fileUrl={fileUrl} />
//                     </Worker>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PDFViewer;

'use client';

import dynamic from 'next/dynamic';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useState } from 'react';

// Dynamically import Viewer and Worker to avoid SSR issues
const Viewer = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Viewer), {
    ssr: false,
});
const Worker = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Worker), {
    ssr: false,
});

interface PDFViewerProps {
    fileUrl: string; // initial or default PDF
}

const PDFViewerTentative = ({ fileUrl }: PDFViewerProps) => {
    const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

    // Decide which file to show
    // const currentFileUrl =
    //     activeTab === 'day1'
    //         ? fileUrl // Use the prop for Day 1 (dynamic from API)
    //         : '/tentative_virtual_program.pdf'; // Adjust this path as needed

    if (!fileUrl) {
        return <p className="auto-container">No scientific program available.</p>;
    }

    return (
        <div className="tentative-pdf-block">
            {/* Tabs */}
            <div className="tentative-tabs-block wow fadeInUp animated" data-wow-delay="400ms"
                data-wow-duration="1000ms">
                {/* Sliding background */}
                <div className={`tab-bg-slide ${activeTab === 'day2' ? 'move-right' : ''}`}></div>

                {/* Tab 1 */}
                <div
                    className={`tab-item ${activeTab === 'day1' ? 'active' : ''}`}
                    onClick={() => setActiveTab('day1')}
                >
                    <div className="tab-title">Day 1</div>
                    {/* <div className="tab-subtitle">In-Person (Apr 16)</div> */}
                </div>

                {/* Tab 2 */}
                <div
                    className={`tab-item ${activeTab === 'day2' ? 'active' : ''}`}
                    onClick={() => setActiveTab('day2')}
                >
                    <div className="tab-title">Day 2</div>
                    {/* <div className="tab-subtitle">Virtual (Apr 17)</div> */}
                </div>
            </div>


            {/* PDF Viewer */}
            {/* <div className="auto-container">
                <div className="scientific-program-container">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer fileUrl={currentFileUrl} />
                    </Worker>
                </div>
            </div> */}

            {/* PDF Viewer or Message */}
            <div className="auto-container">
                <div className="scientific-program-container wow fadeInUp animated" data-wow-delay="600ms"
                    data-wow-duration="1000ms">
                    {activeTab === 'day1' ? (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                            <Viewer fileUrl={fileUrl} />
                        </Worker>
                    ) : (
                        <p className='update-soon-msg wow fadeInUp animated'
                        >
                            Will be updated soon
                        </p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default PDFViewerTentative;
