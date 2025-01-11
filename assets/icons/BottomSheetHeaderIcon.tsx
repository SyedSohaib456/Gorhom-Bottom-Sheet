import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Svg width={133} height={126} viewBox="0 0 133 126" fill="none" {...props}>
      <Path
        fill="url(#pattern0_3731_13900)"
        d="M0.612305 0.924805H132.612305V125.924805H0.612305z"
      />
      <Defs>
        <Pattern
          id="pattern0_3731_13900"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#image0_3731_13900"
            transform="matrix(.00073 0 0 .00077 0 -.233)"
          />
        </Pattern>
        <Image
          id="image0_3731_13900"
          width={1374}
          height={1792}
        />
      </Defs>
    </Svg>
  );
}
export default SvgComponent;