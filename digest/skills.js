const utils = require('./utils')

module.exports = digest => {

  digest.skills = {}

  const getSkillByRawText = rawText => {
    const name = utils.rawTextToName(rawText)
    const id = utils.nameToId(name)
    return digest.skills[id] = digest.skills[id] || {
      id, name, rawText, modules: []
    }
  }

  Object.keys(digest.modules).forEach(moduleId => {
    const module = digest.modules[moduleId]
    module.skills = module.skills
      .map(getSkillByRawText)
      .map(skill => {
        skill.modules.push(module.id)
        return skill.id
      })
  })

  digest.phases.forEach(phase => {
    phase.skills = []
    phase.modules.forEach(id => {
      const module = digest.modules[id]
      if (!module) return
      module.skills.forEach(skillId =>
        phase.skills.push(digest.skills[skillId])
      )
    })
  })

  return digest
}