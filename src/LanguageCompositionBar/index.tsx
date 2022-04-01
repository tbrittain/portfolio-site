import React from 'react';
import './LanguageCompositionBar.scss';


function LanguageCompositionBar(props): JSX.Element {
  const gitRepo: string = props.gitRepo;
  return (
    <>
      gitRepo: {gitRepo}
    </>
  )
}

export default LanguageCompositionBar;
