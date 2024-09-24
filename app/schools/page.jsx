import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            "name": "John Doe",
            "title": "The Future of Technology",
            "description": "Exploring upcoming trends and innovations in the tech industry."
        },
        {
            "name": "Jane Smith",
            "title": "Healthy Eating Tips",
            "description": "A guide to maintaining a balanced diet and healthy lifestyle."
        },
        {
            "name": "Alex Johnson",
            "title": "Traveling the World",
            "description": "Experiences and tips from a globetrotter visiting various countries."
        },
        {
            "name": "Maria Garcia",
            "title": "Learning to Code",
            "description": "Resources and advice for beginners in programming."
        },
        {
            "name": "Michael Brown",
            "title": "Photography Basics",
            "description": "Tips and tricks for capturing stunning photographs."
        },
        {
            "name": "Emma Wilson",
            "title": "Fitness Journey",
            "description": "A personal account of getting fit and staying motivated."
        },
        {
            "name": "David Lee",
            "title": "Financial Independence",
            "description": "Strategies for achieving financial freedom and security."
        },
        {
            "name": "Sophia Martinez",
            "title": "Mindfulness and Meditation",
            "description": "Techniques for practicing mindfulness and reducing stress."
        },
        {
            "name": "Chris Anderson",
            "title": "Home Gardening",
            "description": "How to start and maintain a successful home garden."
        },
        {
            "name": "Olivia Thomas",
            "title": "DIY Home Projects",
            "description": "Creative and cost-effective home improvement ideas."
        }
    ];
    
    return (
        <div className='p-24 text-black'>
            {blogs.map((blog, index) => (
                <div className='border border-green-400 space-x-6 p-12' key={index}>
                    <h1>{blog.name}</h1>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <button className='btn-error bg-orange-400 p-2'><Link href={`/blogs/${blog.name}`}>View Details</Link></button>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
