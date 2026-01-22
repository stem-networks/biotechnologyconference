"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IndexPageData } from "@/types";

interface DeadlineSidebarProps {
    indexPageData: IndexPageData;
}

const DeadlineSidebar: React.FC<DeadlineSidebarProps> = ({ indexPageData }) => {

    const importantDates = indexPageData?.importantDates || [];
    const [isOpen, setIsOpen] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);

    // Function to parse date from HTML string
    const parseDate = (htmlString: string): string => {
        // Create a temporary div to parse HTML
        const temp = document.createElement("div");
        temp.innerHTML = htmlString;

        // Get text content and clean it
        const text = temp.textContent || "";

        // Extract day number (e.g., "30", "31")
        const dayMatch = text.match(/(\d+)/);
        const day = dayMatch ? dayMatch[1] : "";

        // Extract month (e.g., "January")
        const monthMatch = text.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i);
        const month = monthMatch ? monthMatch[1].substring(0, 3) : "";

        // Extract year (e.g., "2026")
        const yearMatch = text.match(/(\d{4})/);
        const year = yearMatch ? yearMatch[1] : "";

        return day && month && year ? `${day} ${month} ${year}` : "";
    };

    useEffect(() => {
        // Appears after 1.5 seconds
        const timer = setTimeout(() => setShouldShow(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!shouldShow) return null;

    return (
        <div className={`deadline-sidebar-wrapper ${isOpen ? "is-open" : ""}`}>
            {/* The Trigger Tab with Ripple Effect */}
            <div className="deadline-tab" onClick={() => setIsOpen(!isOpen)}>
                {/* Ripple effect only active when closed */}
                {!isOpen && <div className="tab-ripple"></div>}

                <div className="tab-icon-box">
                    <i className={`fa ${isOpen ? "fa-times" : "fa-calendar-check-o"}`}></i>
                </div>
                <span>{isOpen ? "Close" : "Deadlines"}</span>
            </div>

            {/* The Content Panel */}
            <div className="deadline-content">
                <div className="timeline-alert-title">
                    <i className="fa fa-bullhorn"></i> Important Dates
                </div>

                {/* Timeline */}

                <div className="notification-body">
                    <div className="timeline-container">
                        <div className="timeline-line"></div>

                        {/* Deadline 1 */}
                        <div className="deadline-card">
                            <div className="timeline-dot">
                                {/* <span className="dot-number">1</span> */}
                                <i className="fa fa-file-text"></i>
                            </div>
                            <Link href="/call-for-abstract-submission" className="deadline-info">
                                <div className="date-badge">
                                    <span className="calendar-icon"><i className="fa fa-calender"></i></span>
                                    <span>{parseDate(importantDates[0]?.date || "")}</span>
                                </div>
                                <h4 className="deadline-title">Abstract Submission Deadline</h4>
                            </Link>
                        </div>

                        {/* Deadline 2 */}
                        <div className="deadline-card">
                            <div className="timeline-dot">
                                {/* <span className="dot-number">2</span> */}
                                <i className="fa fa-ticket"></i>
                            </div>
                            <Link href="/register" className="deadline-info">
                                <div className="date-badge">
                                    {/* <span className="calendar-icon">🎟️</span> */}
                                    <span>{parseDate(importantDates[1]?.date || "")}</span>
                                </div>
                                <h4 className="deadline-title">Early Bird Registration</h4>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DeadlineSidebar;