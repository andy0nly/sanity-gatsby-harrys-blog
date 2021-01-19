import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from './serializers'
import arrowIcon from './icon/arrow.svg'


const PortableText = ({blocks}) => (
  <>
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />

  {/* <img src={arrowIcon} style={{display: 'inline'}} /> */}
  </>
)

export default PortableText
