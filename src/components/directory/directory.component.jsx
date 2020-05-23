import React, { useContext, useEffect, useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import DirectoryContext from '../../contexts/directory/directory.context';

import './directory.styles.scss';

import axios from 'axios'
import keys from '../../keys'

const Directory = () => {
  const INITIAL_STATE = useContext(DirectoryContext);
  const [sections, setSections] = useState(useContext(DirectoryContext));
  
  
  useEffect(() => {
    axios.get(`${keys.url}section`)
      .then(data => setSections(data.data))
      .catch(() => setSections(INITIAL_STATE))
  },[INITIAL_STATE])

  const size = {size: "large"}
  return (
    <div className='directory-menu'>
      {sections.map(({ _id, id, ...otherSectionProps }, index) => {
        if( Number(index+1) % 4 === 0 || Number(index+1)%5 === 0) {
          return (<MenuItem key={id || _id} {...otherSectionProps} {...size} />)
        }
        else{
          return(<MenuItem key={id || _id} {...otherSectionProps} />)
        }
      })}
    </div>
  );
};

export default Directory;
