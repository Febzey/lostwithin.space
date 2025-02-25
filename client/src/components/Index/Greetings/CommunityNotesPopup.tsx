import React from "react";

interface Props {
    onClose: () => void;
}

const dummyCommunityNotes = [
    {
        title: "Welcome to RootCorp",
        description:
            "A work-in-progress hub for open-source projects and internet services...",
        date: "2023-10-01",
        author: "Febzey",
    },
    {
        title: "Coming soon",
        description:
            "An image server is in development to host and share images quickly...",
        date: "2025-02-23",
        author: "Febzey",
    },
];

export default function CommunityNotesPopup({ onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black bg-opacity-80"
                onClick={onClose}
            />
            <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg max-h-[66vh] w-3/4 md:w-1/2 overflow-y-auto p-1">
                <div className="bg-gray-900 p-4 rounded relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white"
                    >
                        X
                    </button>
                    <h2 className="text-xl mb-3 text-white tracking-wide">
                        Community Notes
                    </h2>
                    {dummyCommunityNotes.map((note, i) => (
                        <div key={i} className="mb-4">
                            <h3 className="text-lg text-violet-500">
                                {note.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {note.date} by {note.author}
                            </p>
                            <p>{note.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
