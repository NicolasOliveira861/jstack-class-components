import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log({ queryParams: queryParams.get('search') });

  return <h1>Post id: {id}</h1>;
}
