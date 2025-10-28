async function fetchApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        
        const firstFivePosts = posts.slice(0, 5);
        
        console.log('Titles of the first five posts:');
        firstFivePosts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        
        return firstFivePosts;
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchApi();