// Write your code here

import {useState} from 'react'

import {MainContainer, Text, Image, Button} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(true)

  const image = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const alt = isUnlocked ? 'Lock' : 'Unlock'
  const text = isUnlocked ? 'Your device is Locked' : 'Your device is Unlocked'

  const buttonText = isUnlocked ? 'UnLock' : 'Lock'

  const onClickButton = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <Image src={image} alt={alt} />
      <Text>{text}</Text>
      <Button onClick={onClickButton}>{buttonText}</Button>
    </MainContainer>
  )
}

export default Unlock
