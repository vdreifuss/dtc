<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Thinkers' Club</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.js"></script>
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            min-height: 100vh;
            background-color: white;
            color: #111827;
        }

        /* Navigation */
        nav {
            border-bottom: 1px solid #e5e7eb;
            position: sticky;
            top: 0;
            background: white;
            z-index: 50;
        }

        .container {
            max-width: 80rem;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 4rem;
        }

        .nav-left {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .nav-brand {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .nav-links {
            display: none;
            gap: 1.5rem;
        }

        @media (min-width: 768px) {
            .nav-links {
                display: flex;
            }
        }

        .nav-link {
            color: #4b5563;
            text-decoration: none;
            transition: color 0.2s;
        }

        .nav-link:hover {
            color: #0d9488;
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .icon-button {
            padding: 0.5rem;
            border-radius: 9999px;
            transition: background-color 0.2s;
            border: none;
            background: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-button:hover {
            background-color: #f3f4f6;
        }

        /* Hero section */
        .hero {
            background-color: #f9fafb;
            padding: 4rem 1rem;
        }

        .hero-content {
            display: grid;
            gap: 3rem;
        }

        @media (min-width: 1024px) {
            .hero-content {
                grid-template-columns: 2fr 1fr;
                align-items: center;
            }
        }

        .hero-video {
            position: relative;
            aspect-ratio: 16/9;
            background-color: #e5e7eb;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            cursor: pointer;
            group-hover: shadow-lg;
        }

        .hero-video img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .play-button-wrapper {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.1);
            transition: background-color 0.2s;
        }

        .play-button {
            width: 4rem;
            height: 4rem;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
        }

        .hero-video:hover .play-button {
            background-color: rgba(0, 0, 0, 0.7);
        }

        .hero-text {
            margin-top: 2rem;
        }

        @media (min-width: 1024px) {
            .hero-text {
                margin-top: 0;
            }
        }

        .tag {
            color: #0d9488;
            font-weight: 500;
        }

        .hero-title {
            font-size: 1.875rem;
            font-weight: 700;
            color: #111827;
            margin-top: 0.5rem;
            line-height: 1.25;
        }

        .hero-description {
            margin-top: 1rem;
            color: #4b5563;
            font-size: 1.125rem;
            line-height: 1.75;
        }

        .primary-button {
            margin-top: 1.5rem;
            display: inline-flex;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            background-color: #0d9488;
            color: white;
            font-weight: 500;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        }

        .primary-button:hover {
            background-color: #0f766e;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }

        /* Categories section */
        .categories {
            padding: 4rem 1rem;
        }

        .category {
            margin-bottom: 3rem;
        }

        .category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .category-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
        }

        .view-all {
            color: #0d9488;
            border: none;
            background: none;
            cursor: pointer;
            transition: color 0.2s;
            font-size: 0.875rem;
        }

        .view-all:hover {
            color: #0f766e;
        }

        .video-grid {
            display: grid;
            gap: 1.5rem;
        }

        @media (min-width: 768px) {
            .video-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .video-card {
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            transition: all 0.2s;
            cursor: pointer;
            background: white;
        }

        .video-card:hover {
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        }

        .video-content {
            display: flex;
            gap: 1rem;
            padding: 1rem;
        }

        .video-thumbnail {
            position: relative;
            width: 10rem;
            height: 6rem;
            flex-shrink: 0;
            border-radius: 0.5rem;
            overflow: hidden;
            background-color: #e5e7eb;
        }

        .video-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
        }

        .video-title {
            font-weight: 500;
            color: #111827;
            margin-bottom: 0.25rem;
            transition: color 0.2s;
        }

        .video-card:hover .video-title {
            color: #0d9488;
        }

        .video-duration {
            font-size: 0.875rem;
            color: #6b7280;
        }

        .watch-link {
            color: #0d9488;
            font-size: 0.875rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            transition: transform 0.2s;
        }

        .video-card:hover .watch-link {
            transform: translateX(0.25rem);
        }

        .menu-button {
            display: block;
        }

        @media (min-width: 768px) {
            .menu-button {
                display: none;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="container">
            <div class="nav-content">
                <div class="nav-left">
                    <h1 class="nav-brand">Digital Thinkers' Club</h1>
                    <div class="nav-links">
                        <a href="#" class="nav-link">Home</a>
                        <a href="#" class="nav-link">Videos</a>
                        <a href="#" class="nav-link">About</a>
                        <a href="#" class="nav-link">Contact</a>
                    </div>
                </div>
                <div class="nav-right">
                    <button class="icon-button">
                        <i data-lucide="search" class="w-5 h-5 text-gray-400"></i>
                    </button>
                    <button class="icon-button menu-button">
                        <i data-lucide="menu" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-video">
                    <img src="/api/placeholder/800/450" alt="Platform Economy Video Thumbnail">
                    <div class="play-button-wrapper">
                        <div class="play-button">
                            <i data-lucide="play" color="white" size="32"></i>
                        </div>
                    </div>
                </div>
                <div class="hero-text">
                    <span class="tag">Featured</span>
                    <h2 class="hero-title">Platform Economy: A Deep Dive</h2>
                    <p class="hero-description">Explore the fundamental concepts of the platform economy and its transformative impact on modern business strategy.</p>
                    <button class="primary-button">Watch Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories section -->
    <section class="categories">
        <div class="container">
            <div id="video-categories"></div>
        </div>
    </section>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();

        // Video categories data
        const categories = [
            {
                name: "Platform Economics",
                videos: [
                    { title: "Network Effects in Digital Markets", duration: "5:32" },
                    { title: "Multi-sided Platform Dynamics", duration: "6:15" }
                ]
            },
            {
                name: "Business Strategy",
                videos: [
                    { title: "Competitive Advantage in Digital Age", duration: "7:45" },
                    { title: "Strategic Innovation Frameworks", duration: "6:20" }
                ]
            },
            {
                name: "Digital Transformation",
                videos: [
                    { title: "Legacy to Digital Migration", duration: "8:10" },
                    { title: "Cultural Change in Digital Era", duration: "5:55" }
                ]
            }
        ];

        // Render categories and videos
        const categoriesContainer = document.getElementById('video-categories');
        categories.forEach(category => {
            const categoryHtml = `
                <div class="category">
                    <div class="category-header">
                        <h2 class="category-title">${category.name}</h2>
                        <button class="view-all">View All</button>
                    </div>
                    <div class="video-grid">
                        ${category.videos.map(video => `
                            <div class="video-card">
                                <div class="video-content">
                                    <div class="video-thumbnail">
                                        <img src="/api/placeholder/160/96" alt="${video.title} thumbnail">
                                        <div class="play-button-wrapper">
                                            <div class="play-button">
                                                <i data-lucide="play" color="white" size="16"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-info">
                                        <div>
                                            <h3 class="video-title">${video.title}</h3>
                                            <p class="video-duration">${video.duration}</p>
                                        </div>
                                        <a href="#" class="watch-link">Watch Video →</a>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            categoriesContainer.insertAdjacentHTML('beforeend', categoryHtml);
        });

        // Reinitialize Lucide icons after dynamic content is added
        lucide.createIcons();
    </script>
</body>
</html>
