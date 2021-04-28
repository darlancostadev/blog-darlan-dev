import React from 'react';

import * as S from './styles';

function Main({posts}) {
  return (
    <>
    {
      posts.map((post) => (
        <div>
          <h1>{post.data.title}</h1>
          <img src={post.data.capa.url} alt={post.data.capa.alt}/>
        </div>
      ))
    }
    </>
  );
}
export default Main;