const utils = require('./utils')
const capitalize = require('lodash/capitalize');

module.exports = () =>
  utils.getDirectoriesSync('/phases')
    .then(phaseNumbersToPhases)
    .then(loadDetails)
    .then(indexByNumber)

const phaseNumbersToPhases = phases => {
  return phases.map(phase => (
    {
      number: phase,
      path: `/phases/${phase}`,
      humanName: capitalize(phase)
    }
  ))
};

const extractChallenges = phases => {
  phases.forEach(phase => {
    const challenges = extractListFromMarkdownSection(
      phase.READMEMarkdown,
      'Challenges',
      2,
    )
    phase.challenges = challenges.map(extractChallengeId)
  })
  return phases
}

const extractChallengeId = (challenge) => {
  const matches = challenge.match(/\/challenges\/([^\/]+?)\)/)
  if (!matches) throw new Error('unable to parse challenge for phase: '+challenge)
  return matches ? matches[1] : challenge
}
