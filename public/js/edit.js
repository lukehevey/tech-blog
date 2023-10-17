const updateBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id1')) {
      const id = event.target.getAttribute('data-id1');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };