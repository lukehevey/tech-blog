const commentBtnHandler = async (event) => {
    event.preventDefault()
    const content = document.querySelector('.content').value
    const blog_id = window.location.href.split('/')[4]
    console.log(blog_id)
    if (blog_id && content) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ blog_id, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to create comment');
        }
      }
  }
  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentBtnHandler)