import { IconName } from '../interfaces/icon-svg.ts'
import React, { FC } from 'react'
import { IconInstagram, IconVk, IconYoutube } from './exports.ts'

interface IProps {
  name: IconName
  className?: string
}

const Icon: FC<IProps> = ({ className, name }) => {
  const icons: { [key in IconName]: React.ReactNode } = {
    instagram: <IconInstagram className={className ?? ' '} />,
    vk: <IconVk className={className ?? ' '} />,
    youtube: <IconYoutube className={className ?? ' '} />,
  }
  return icons[name]
}

export default Icon
