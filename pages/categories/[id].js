/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import fetch from 'node-fetch';
// import Layout from '../../components/layout'
export default function Products({ products }) {
  return <div>...</div>;
}


export async function getStaticPaths() {
  const res = await fetch('https://lightsandpartsapi.azurewebsites.net/api/website/producttypes');
  const items = await res.json();
  return items.map((item) => ({ params: { id: item.slugUrl } }));
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
