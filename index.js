function superbowlWin(array) {
   let winningYear
   if (winningYear = array.find(array => array.result === 'W')) {
    return winningYear.year
   } else {return undefined}
}