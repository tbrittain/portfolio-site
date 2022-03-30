import React from 'react'
import vaultBotLogo from '../Assets/Projects/vaultbot.png'
import Project from '../Project/Project'
import { Skill } from '../Banner/Banner'

function ProjectVaultBot () {
  const vaultBotSkills = [
    Skill.docker,
    Skill.googlecloud,
    Skill.graphql,
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
        <p>
          Generally speaking, users (i.e. my friends and I) interact with VaultBot directly through Discord, mainly by either
          utilizing a search function to find a specific song or by providing VaultBot with a Spotify song link directly.
          What then happens is VaultBot adds the song to a 'dynamic' playlist and an 'archive' playlist. For the dynamic playlist,
          songs are kept in there for two weeks, and then they are purged from the playlist.
        </p>
        <p>
          That was the original scope of the project, but it has since become much more robust. I migrated the Discord bot
          and database to Google Cloud and implemented a GraphQL endpoint and React frontend to display information on all of the
          cool things VaultBot has tracked over time. You can check that out&nbsp;
          <a
            href='https://vaultbot.tbrittain.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </a>.
        </p>
      </div>
    </Project>
  )
}

export default ProjectVaultBot
