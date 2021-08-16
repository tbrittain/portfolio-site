import React from "react";
import vaultBotLogo from '../Assets/vaultbot.png'
import Project from "../Project/Project";
import { Skill } from '../Banner/Banner'

function ProjectVaultBot () {
  const vaultBotSkills = [
    Skill.docker,
    Skill.googlecloud,
    Skill.javascript,
    Skill.postgres,
    Skill.python,
    Skill.typescript
  ]
  return (
    <Project
      name='VaultBot'
      image={vaultBotLogo}
      imageAlt='VaultBot logo'
      skills={vaultBotSkills}
      link='https://github.com/tbrittain/vault-bot'
    >
      <div>
        <p>
          VaultBot is an ongoing project that in essence moderates a set of Spotify playlists. I have a habit of creating playlists,
          listening to them, and then eventually abandoning them for new playlists I create, so VaultBot is a method of
          breaking this cycle.
        </p>
      </div>
    </Project>
  )
}

export default ProjectVaultBot
