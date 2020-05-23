import React, { useContext, useState, useEffect, createContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

import axios from 'axios'
import keys from '../../keys'

const CollectionPage = ({ match }) => {  
  const INITIAL_STATE = useContext(CollectionsContext);
  const [collections, setCollections] = useState(INITIAL_STATE);
  
  
  useEffect(() => {
    axios.get(`${keys.url}collection`)
      .then(data => setCollections(data.data))
      .catch(() => setCollections(INITIAL_STATE))
  },[INITIAL_STATE])

  const collection = collections[match.params.collectionId] || {items: []};
  const items = collection.items || [];
  const title = String(match.params.collectionId).toUpperCase()

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
