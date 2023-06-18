
import React from 'react'
import { View } from 'react-native'
import { Svg, Circle, Text as SVGText } from 'react-native-svg'

import dark from '../../themes/dark'


interface CircularPercentageProps {
  percentage: number
}

export const CircularPercentage = ({ percentage }: CircularPercentageProps) => {
  const size = 70
  const strokeWidth = 5

  const radius = (size - strokeWidth) / 2
  const circum = radius * 2 * Math.PI
  const svgProgress = 100 - percentage

  return (
    <View style={{ margin: 10 }}>

      <Svg width={size} height={size}>

        <Circle
          stroke={dark.COLORS.GRAY_400}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        <Circle
          stroke={dark.COLORS.ORANGE_400}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />

        <SVGText
          fontSize='18'
          x={size / 2}
          y={size / 2 + 5}
          textAnchor="middle"
          fill='white'
        >
          {String(percentage)}
        </SVGText>

      </Svg>

    </View>
  )
}