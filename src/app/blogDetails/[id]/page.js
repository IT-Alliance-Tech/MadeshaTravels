import React from 'react'


export default function BlogDetails({ params=1 }) {
  return (
    <div>
      <h1>Blog ID: {params}</h1>
    </div>
  );
}