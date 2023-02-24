import React from 'react';
import Card from 'react-bootstrap/Card';

const Display = ({data}) => {
  const {name, avatar_url, following, followers, public_repos, bio, id} = data;

  return (
    <div className='d-flex justify-content-center mt-3 pt-3 mb-5'>
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={avatar_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Following : {following} <br />
          Follower : {followers} <br />
          Repo : {public_repos} <br />
          Bio : {bio} <br />
          Id : {id}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
};

export default Display;