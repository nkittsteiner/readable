const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
const token = process.env.MY_KEY

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () => {
  return fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const insertPost = (post) =>{
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
}


export const updatePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: post.title, body: post.body })
  }).then(res => res.json())
}


export const getComments = (post_id) => {
  return fetch(`${api}/posts/${post_id}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const insertComment = (comment) =>{
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())
}


export const updateComment = (comment) =>{
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body:comment.body, timestamp:comment.timestamp })
  }).then(res => res.json())
}


export const votePost = (id, vote) =>
fetch(`${api}/posts/${id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ option: vote })
}).then(res => res.json())

export const voteComment = (id, vote) =>
fetch(`${api}/comments/${id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ option: vote })
}).then(res => res.json())

export const deletePost = (post) =>
fetch(`${api}/posts/${post.id}`, {
  method: 'DELETE',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ post })
}).then(res => res.json())

export const deleteComment = (comment) =>
fetch(`${api}/comments/${comment.id}`, {
  method: 'DELETE',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ comment })
}).then(res => res.json())