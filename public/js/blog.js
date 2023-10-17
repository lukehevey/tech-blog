const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  // const description = document.querySelector('#blog-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

// const updateBtnHandler = async (event) => {
//   if (event.target.hasAttribute('data-id1')) {
//     const id = event.target.getAttribute('data-id1');

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'PUT',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to update blog');
//     }
//   }
// };


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};


// const commentBtnHandler = async (event) => {
//   const content = document.querySelector('.content').value
//   const blog_id = window.location.href.split('/')
//   console.log(blog_id)
// }
// document
// .querySelector('.comment-form')
// .addEventListener('submit', commentBtnHandler)

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
