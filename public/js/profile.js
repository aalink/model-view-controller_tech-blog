console.log("PROFILE.JS DETECTED")
const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("SAVE POST BUTTON CLICKED")

  const name = document.querySelector('#create-post-title').value.trim();
  const description = document.querySelector('#create-post-content').value.trim();

  if (name && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('#save-post')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);


  // function test(event) {
  //   event.preventDefault()
  //   console.log("TEST")
  // }
  // document
  //   .getElementById('test')
  //   .addEventListener('click', test);