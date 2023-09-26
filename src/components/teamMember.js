import React, { useState } from 'react'

const TeamMember = ({ member }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  return (
    <div className='member-container'>
      <button
        onClick={toggleOpen}
        aria-label='click for more information'
        className={`team-header ${open ? 'team-border-bottom' : ''}`}
      >
        <div className='team-name'>{member.name}</div>
        <div className='team-position'>{member.position}</div>
      </button>
      <div className={`team-body ${open ? 'team-show' : ''}`}>
        <a href={`mailto:${member.email}`} className='team-email'>
          {member.email}
        </a>
        {member.bio && (
          <div
            dangerouslySetInnerHTML={{
              __html: member.bio.childMarkdownRemark.html,
            }}
            className='lofty team-bio'
          ></div>
        )}
      </div>
    </div>
  )
}

export default TeamMember
