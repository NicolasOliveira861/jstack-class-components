import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  handleNavigate = () => {
    this.props.history.push('/posts');
  };

  render() {
    console.log({ queryResult: this.queryParams.get('search') });

    return (
      <>
        <button onClick={this.handleNavigate}>
          Voltar para lista de posts
        </button>
        <h1>Post Page</h1>
      </>
    );
  }
}

// export default function Post() {
//   const { id } = useParams();
//   const { search } = useLocation();

//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log({ queryParams: queryParams.get('search') });

//   return <h1>Post id: {id}</h1>;
// }
