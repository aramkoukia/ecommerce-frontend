/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import Layout from '../../components/layout'
export default function Product() {
  return <div>Product:</div>;
}


export async function getStaticPaths() {
  return [
    {
      params: {
        id: 'ssg-ssr',
      },
    },
    {
      params: {
        id: 'pre-rendering',
      },
    },
  ];
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
