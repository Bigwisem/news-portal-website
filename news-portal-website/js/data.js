// Mock News Data
const newsData = [
    {
        id: 1,
        title: "Local School Wins National Science Competition",
        excerpt: "Jefferson High School's robotics team has won first place in the National Science Olympiad, showcasing exceptional innovation and teamwork.",
        content: "Jefferson High School's robotics team has won first place in the National Science Olympiad, showcasing exceptional innovation and teamwork. The team competed against 150 schools from across the nation.",
        category: "education",
        date: "2024-03-10",
        author: "Sarah Johnson",
        image: "images/award.png",
        featured: true
    },
    {
        id: 2,
        title: "New Community Center Opens Downtown",
        excerpt: "The state-of-the-art community center officially opens its doors, offering recreational facilities, classes, and event spaces for all residents.",
        content: "The state-of-the-art community center officially opens its doors, offering recreational facilities, classes, and event spaces for all residents. The center features a swimming pool, gymnasium, and multipurpose rooms.",
        category: "community",
        date: "2024-03-09",
        author: "Michael Chen",
        image: "images/communityCenter.png",
        featured: true
    },
    {
        id: 3,
        title: "Tech Startup Announces Major Expansion",
        excerpt: "Local tech company TechVision Inc. announces plans to expand operations, creating 500 new jobs in the community.",
        content: "Local tech company TechVision Inc. announces plans to expand operations, creating 500 new jobs in the community. The expansion will include a new office building and research facility.",
        category: "business",
        date: "2024-03-08",
        author: "Emily Rodriguez",
        image: "images/techStartup.png",
        featured: true
    },
    {
        id: 4,
        title: "Local Sports Team Advances to Championship",
        excerpt: "The community's beloved basketball team has advanced to the state championship after an exciting playoff victory.",
        content: "The community's beloved basketball team has advanced to the state championship after an exciting playoff victory. The team will compete in the finals next week.",
        category: "sports",
        date: "2024-03-07",
        author: "James Wilson",
        image: "images/localSportsTeam.png",
        featured: true
    },
    {
        id: 5,
        title: "New Healthcare Initiative Launched",
        excerpt: "City officials launch a comprehensive healthcare initiative aimed at improving access to medical services for underserved populations.",
        content: "City officials launch a comprehensive healthcare initiative aimed at improving access to medical services for underserved populations. The program includes free health screenings and wellness classes.",
        category: "health",
        date: "2024-03-06",
        author: "Dr. Lisa Park",
        image: "images/healthcare.png",
        featured: true
    },
    {
        id: 6,
        title: "Environmental Group Plants 10,000 Trees",
        excerpt: "Local environmental organization completes massive tree-planting initiative to combat climate change and improve air quality.",
        content: "Local environmental organization completes massive tree-planting initiative to combat climate change and improve air quality. The project involved over 500 volunteers.",
        category: "environment",
        date: "2024-03-05",
        author: "Green Earth Team",
        image: "images/EnvironmentalGroupPlants.png",
        featured: true
    },
    {
        id: 7,
        title: "City Council Approves New Infrastructure Project",
        excerpt: "The city council has approved a $50 million infrastructure project to improve roads, bridges, and public transportation.",
        content: "The city council has approved a $50 million infrastructure project to improve roads, bridges, and public transportation. Construction is expected to begin next month.",
        category: "politics",
        date: "2024-03-04",
        author: "David Thompson",
        image: "images/NewInfrastructureProject.png",
        featured: true
    },
    {
        id: 8,
        title: "Local Artist Wins International Recognition",
        excerpt: "Renowned local artist Maria Santos has won the prestigious International Art Award for her innovative sculptures.",
        content: "Renowned local artist Maria Santos has won the prestigious International Art Award for her innovative sculptures. Her work will be displayed in galleries worldwide.",
        category: "entertainment",
        date: "2024-03-03",
        author: "Arts & Culture Weekly",
        image: "images/ArtistWinsAward.png",
        featured: true
    },
    {
        id: 9,
        title: "Community Hosts Annual Food Festival",
        excerpt: "The annual community food festival brings together local restaurants and food vendors for a celebration of culinary diversity.",
        content: "The annual community food festival brings together local restaurants and food vendors for a celebration of culinary diversity. Over 20,000 visitors are expected.",
        category: "entertainment",
        date: "2024-03-02",
        author: "Events Team",
        image: "images/foodFestival.png",
        featured: true
    },
    {
        id: 10,
        title: "New Public Library Branch Opens",
        excerpt: "A new state-of-the-art public library branch opens in the east side, featuring digital resources and community spaces.",
        content: "A new state-of-the-art public library branch opens in the east side, featuring digital resources and community spaces. The library includes a maker space and computer lab.",
        category: "education",
        date: "2024-03-01",
        author: "Library Services",
        image: "images/publicLibrary.png",
        featured: true
    },
    {
        id: 11,
        title: "Local Business Receives Sustainability Award",
        excerpt: "GreenTech Solutions has been recognized for its commitment to sustainable business practices and environmental responsibility.",
        content: "GreenTech Solutions has been recognized for its commitment to sustainable business practices and environmental responsibility. The company has reduced its carbon footprint by 40%.",
        category: "business",
        date: "2024-02-28",
        author: "Business News Daily",
        image: "images/sustainabilityAward.png",
        featured: true
    },
    {
        id: 12,
        title: "Community Volunteers Needed for Spring Cleanup",
        excerpt: "Local parks department is seeking volunteers for the annual spring cleanup initiative to beautify community spaces.",
        content: "Local parks department is seeking volunteers for the annual spring cleanup initiative to beautify community spaces. Sign up today to make a difference!",
        category: "community",
        date: "2024-02-27",
        author: "Parks & Recreation",
        image: "images/springCleanup.png",
        featured: true
    }
];

// Mock Announcements // 
const announcementsData = [
    {
        id: 1,
        title: "City Hall Closed for Maintenance",
        content: "City Hall will be closed for scheduled maintenance from March 15-20. All services will be available online. For emergencies, please call 911.",
        date: "2024-03-10",
        priority: "high"
    },
    {
        id: 2,
        title: "Spring Break School Schedule",
        content: "All public schools will be closed for spring break from March 22-29. Classes resume on March 30.",
        date: "2024-03-09",
        priority: "medium"
    },
    {
        id: 3,
        title: "Water Main Repair Notice",
        content: "Water service may be interrupted on March 12 from 8 AM to 5 PM for emergency repairs on Main Street.",
        date: "2024-03-08",
        priority: "high"
    },
    {
        id: 4,
        title: "Community Survey - Your Input Needed",
        content: "Please take 5 minutes to complete our community survey about local services. Your feedback is valuable!",
        date: "2024-03-07",
        priority: "low"
    },
    {
        id: 5,
        title: "Parking Restrictions During Festival",
        content: "Parking restrictions will be in effect downtown during the Food Festival on March 15-17. Please use designated parking areas.",
        date: "2024-03-06",
        priority: "medium"
    }
];

// Mock Community Members Data
const communityMembers = [
    {
        id: 1,
        name: "Henry Oboh",
        title: "Community Leader",
        bio: "Henry is a passionate advocate for community development and social justice. He has served the community for over 20 years.",
        image: "👨‍💼"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "Education Advocate",
        bio: "Sarah is dedicated to improving educational opportunities for all children in the community.",
        image: "👩‍🏫"
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "Environmental Activist",
        bio: "Michael works tirelessly to promote sustainable practices and environmental conservation.",
        image: "👨‍🌾"
    },
    {
        id: 4,
        name: "Maria Santos",
        title: "Arts & Culture Champion",
        bio: "Maria believes in the power of art to transform communities and bring people together.",
        image: "👩‍🎨"
    },
    {
        id: 5,
        name: "David Thompson",
        title: "Business Development Officer",
        bio: "David is committed to fostering economic growth and supporting local businesses.",
        image: "👨‍💼"
    },
    {
        id: 6,
        name: "Emily Rodriguez",
        title: "Healthcare Professional",
        bio: "Emily is dedicated to ensuring access to quality healthcare for all community members.",
        image: "👩‍⚕️"
    }
];

// Mock Events Data
const eventsData = [
    {
        id: 1,
        title: "Community Food Festival",
        date: "2024-03-15",
        month: "Mar",
        day: "15",
        description: "Join us for a celebration of culinary diversity featuring local restaurants and food vendors."
    },
    {
        id: 2,
        title: "Spring Cleanup Day",
        date: "2024-03-22",
        month: "Mar",
        day: "22",
        description: "Help beautify our community parks and green spaces. All volunteers welcome!"
    },
    {
        id: 3,
        title: "Youth Sports Tournament",
        date: "2024-03-29",
        month: "Mar",
        day: "29",
        description: "Annual youth sports tournament featuring basketball, soccer, and volleyball competitions."
    },
    {
        id: 4,
        title: "Community Health Fair",
        date: "2024-04-05",
        month: "Apr",
        day: "05",
        description: "Free health screenings, wellness workshops, and medical consultations for all ages."
    },
    {
        id: 5,
        title: "Local Business Expo",
        date: "2024-04-12",
        month: "Apr",
        day: "12",
        description: "Discover local businesses, network with entrepreneurs, and explore business opportunities."
    }
];

// User Database (for login)
const users = [
    {
        username: "bigdemo",
        password: "password123",
        email: "demo@communitynews.com",
        name: "Demo User"
    },
    {
        username: "admin",
        password: "admin123",
        email: "admin@communitynews.com",
        name: "Administrator"
    },
    {
        username: "user",
        password: "user123",
        email: "user@communitynews.com",
        name: "Regular User"
    }
];

// Categories
const categories = [
    { name: "Politics", icon: "🏛️", color: "#00a8b8" },
    { name: "Business", icon: "💼", color: "#00d4e8" },
    { name: "Technology", icon: "💻", color: "#00a8b8" },
    { name: "Health", icon: "🏥", color: "#00d4e8" },
    { name: "Sports", icon: "⚽", color: "#00a8b8" },
    { name: "Entertainment", icon: "🎭", color: "#00d4e8" },
    { name: "Education", icon: "📚", color: "#00a8b8" },
    { name: "Environment", icon: "🌍", color: "#00d4e8" },
    { name: "Community", icon: "👥", color: "#00a8b8" }
];
