import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Svg width={99} height={140} viewBox="0 0 99 140" fill="none" {...props}>
      <Path
        fill="url(#pattern0_77_16042)"
        d="M0.580078 0H98.580078V140H0.580078z"
      />
      <Defs>
        <Pattern
          id="pattern0_77_16042"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#image0_77_16042"
            transform="matrix(.00073 0 0 .00051 -.003 0)"
          />
        </Pattern>
        <Image
          id="image0_77_16042"
          width={1374}
          height={1951}
        />
      </Defs>
    </Svg>
  );
}
export default SvgComponent;