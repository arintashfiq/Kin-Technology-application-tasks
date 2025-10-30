/**
 * Fetches and displays the first five posts from JSONPlaceholder API
 * 
 * Approach:
 * 1. Use async/await for clean asynchronous code handling
 * 2. Implement error handling for network issues and API errors
 * 3. Process the response by converting to JSON and extracting needed data
 * 4. Display the results in a formatted way to the console
 */

async function fetchApi() {
    try {
        // TASK: Fetch data from API
        // Approach: Use Fetch API with await for clean asynchronous operation
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        // TASK: Handle HTTP errors
        // Approach: Check response status and throw descriptive error if not OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // TASK: Parse JSON response
        // Approach: Convert response stream to JavaScript objects
        const posts = await response.json();
        
        // TASK: Extract first five posts
        // Approach: Use array slice method to get subset of data
        const firstFivePosts = posts.slice(0, 5);
        
        // TASK: Display results
        // Approach: Loop through posts and log formatted titles with numbering
        console.log('Titles of the first five posts:');
        firstFivePosts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        
        // TASK: Return processed data for potential further use
        // Approach: Return the filtered posts array
        return firstFivePosts;
        
    } catch (error) {
        // TASK: Comprehensive error handling
        // Approach: Catch all errors (network, parsing, HTTP) and log user-friendly message
        console.error('Error fetching data:', error.message);
    }
}

// TASK: Execute the main function
// Approach: Call the async function to start the data fetching process
fetchApi();
