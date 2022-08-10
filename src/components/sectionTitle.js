import React from 'react';
import '../styles/sectionTitle.css';

const SectionTitle = ({ title }) => {
  return (
    <div className="sectionTitleWrapper">
      <div className="sectionTitle">
        / {title}
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default SectionTitle;