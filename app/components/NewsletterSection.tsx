"use client";

import { useState } from "react";
import NewsletterBanner from "./NewsletterBanner";
import NewsletterModal from "./NewsletterModal";

export default function NewsletterSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <NewsletterBanner onOpenModal={() => setIsModalOpen(true)} />
            <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
