import React from 'react';

const page = ({ params }) => {
    // console.log(params);
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
    const {title, description} = blogs.find((blog)=> blog.name == params.name)
    return (
        <div className='text-black'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default page;