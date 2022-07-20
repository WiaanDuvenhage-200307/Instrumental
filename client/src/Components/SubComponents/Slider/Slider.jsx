import React, {useState} from 'react';
import logo from '../../../Assets/logo-light.svg';
import darkLogo from '../../../Assets/logo-dark.svg';

export default function Slider() {

    let images = [logo, darkLogo, logo, darkLogo];
    const [image, setImage] = useState(0);

  return (
    <div>Slider</div>
  )
}
