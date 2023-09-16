const user = {
    lastActivityTime: null,
    posts: [],
  };
  
  // Function to update user's last activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  // Function to create a new post
  function createPost(post) {
    return new Promise((resolve) => {
      // Log the last activity time before creating a post
      const beforeActivityTime = user.lastActivityTime;
      console.log("Before Creating Post - Last Activity Time:", beforeActivityTime);
  
      setTimeout(() => {
        user.posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.posts.length === 0) {
          reject("No posts to delete");
        } else {
          const deletedPost = user.posts.pop();
          resolve(deletedPost);
        }
      }, 1000);
    });
  }
  
  // Function to perform the sequence of actions
  async function performActions() {
    try {
      // Update last activity time initially
      await updateLastUserActivityTime();
  
      // Log the last activity time before creating any post
      console.log("Initial Last Activity Time:", user.lastActivityTime);
  
      // Create the first post and update last activity time
      const post1 = await createPost({ title: "Post 1" });
      await updateLastUserActivityTime();
  
      // Create the second post and update last activity time
      const post2 = await createPost({ title: "Post 2" });
      await updateLastUserActivityTime();
  
      // Create the third post and update last activity time
      const post3 = await createPost({ title: "Post 3" });
      await updateLastUserActivityTime();
  
      // Log all posts
      console.log("All posts:", user.posts);
  
      // Delete the last post
      const deletedPost = await deleteLastPost();
      console.log("Deleted Post:", deletedPost);
  
      // Log the updated set of posts
      console.log("Updated Posts:", user.posts);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the function to perform the actions
  performActions();
  