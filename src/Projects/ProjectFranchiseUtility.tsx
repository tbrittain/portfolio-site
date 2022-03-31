import React from 'react'
import smb3appLogo from '../Assets/Projects/smb3app.png'
import Project from '../Project'
import { Skill } from '../Banner'

function FranchiseUtility(): JSX.Element {
  const utilitySkills = [
    Skill.electron,
    Skill.sqlite,
    Skill.svelte,
    Skill.typescript,
  ]

  return (
    <Project
      name="SMB3 Franchise Utility"
      image={smb3appLogo}
      imageAlt="SMB3 Franchise Utility logo"
      skills={utilitySkills}
    >
      <div>
        <p>
          SMB3 Franchise Utility is an upcoming external viewer for gameplay
          statistics for the video game Super Mega Baseball 3. It is an Electron
          application packaged specifically for Windows platforms since the game
          itself is on Windows only.
        </p>
        <p>
          The goal for the project is for the utility to parse the savegame for
          SMB3, which is in the form of a zipped SQLite database, and then to
          extract pertinent statistics for teams and players in a format similar
          to that of BaseballReference, which would provide significantly more
          detail than the in-game statistics provide.
        </p>
      </div>
    </Project>
  )
}

export default FranchiseUtility
