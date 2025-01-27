import React, { ComponentType, FunctionComponent, ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core';

import StyleIcon from '^icons/Style';
import ConfluenceIcon from '^icons/Confluence';
import RoadIcon from '^icons/Road';
import HandshakeIcon from '^icons/Handshake';
import FormIcon from '^icons/Form';
import ShopCartIcon from '^icons/ShopCart';
import WheelIcon from '^icons/Wheel';
import CalculatorIcon from '^icons/Calculator';
import ElectricIcon from '^icons/Electric';
import LoudSpeakerIcon from '^icons/LoudSpeaker';
import TimerIcon from '^icons/Timer';
import TextIcon from '^icons/Text';
import ScriptIcon from '^icons/Script';
import ToolIcon from '^icons/Tool';
import ExportIcon from '^icons/Export';
import ImportIcon from '^icons/Import';
import CloseSmallIcon from '^icons/CloseSmall';
import PictureIcon from '^icons/Picture';
import ResendIcon from '^icons/Resend';
import FilterAltIcon from '^icons/FilterAlt';
import FilterAltOutlinedIcon from '^icons/FilterAltOutlined';
import MagnetIcon from '^icons/Magnet';
import FontDownloadOffIcon from '^icons/FontDownloadOff';
import PeugeotIcon from '^icons/Peugeot';
import CitroenIcon from '^icons/Citroen';
import DsIcon from '^icons/Ds';
import MitsubishiIcon from '^icons/Mitsubishi';
import FiatProfessionalIcon from '^icons/FiatProfessional';
import FiatIcon from '^icons/Fiat';
import JeepIcon from '^icons/Jeep';
import AlfaRomeoIcon from '^icons/AlfaRomeo';
import OpelIcon from '^icons/Opel';
import HongqiIcon from '^icons/Hongqi';
import VoyahIcon from '^icons/Voyah';
import NavorIcon from '^icons/Navor';
import GarageIcon from '^icons/GarageIcon';

import styles from './stories.styles.module.scss';

interface IIconCardProps {
  Icon: ComponentType<SvgIconProps>;
  name: string;
}

const IconCard = ({ Icon, name }: IIconCardProps): ReactElement => (
  <div className={styles.iconWrapper}>
    <Icon />
    <Typography
      className={styles.name}
      variant="caption"
      color="textSecondary"
    >
      {name}
    </Typography>
  </div>
);

const Template: StoryFn = (): ReactElement => (
  <>
    <div className={styles.wrapper}>
      <IconCard
        Icon={FontDownloadOffIcon}
        name="FontDownloadOffIcon"
      />
      <IconCard
        Icon={StyleIcon}
        name="StyleIcon"
      />
      <IconCard
        Icon={ConfluenceIcon}
        name="ConfluenceIcon"
      />
      <IconCard
        Icon={ConfluenceIcon}
        name="ConfluenceIcon"
      />
      <IconCard
        Icon={RoadIcon}
        name="RoadIcon"
      />
      <IconCard
        Icon={HandshakeIcon}
        name="HandshakeIcon"
      />
      <IconCard
        Icon={FormIcon}
        name="FormIcon"
      />
      <IconCard
        Icon={ShopCartIcon}
        name="ShopCartIcon"
      />
      <IconCard
        Icon={WheelIcon}
        name="WheelIcon"
      />
      <IconCard
        Icon={CalculatorIcon}
        name="CalculatorIcon"
      />
      <IconCard
        Icon={ElectricIcon}
        name="ElectricIcon"
      />
      <IconCard
        Icon={LoudSpeakerIcon}
        name="LoudSpeakerIcon"
      />
      <IconCard
        Icon={TimerIcon}
        name="TimerIcon"
      />
      <IconCard
        Icon={TextIcon}
        name="TextIcon"
      />
      <IconCard
        Icon={ScriptIcon}
        name="ScriptIcon"
      />
      <IconCard
        Icon={ToolIcon}
        name="ToolIcon"
      />
      <IconCard
        Icon={ExportIcon}
        name="ExportIcon"
      />
      <IconCard
        Icon={ImportIcon}
        name="ImportIcon"
      />
      <IconCard
        Icon={CloseSmallIcon}
        name="CloseSmallIcon"
      />
      <IconCard
        Icon={PictureIcon}
        name="PictureIcon"
      />

      <IconCard
        Icon={ResendIcon}
        name="ResendIcon"
      />

      <IconCard
        Icon={FilterAltIcon}
        name="FilterAltIcon"
      />

      <IconCard
        Icon={FilterAltOutlinedIcon}
        name="FilterAltOutlinedIcon"
      />

      <IconCard
        Icon={MagnetIcon}
        name="MagnetIcon"
      />

      <IconCard
        Icon={GarageIcon}
        name="GarageIcon"
      />
    </div>
    <div className={styles.wrapper}>
      <IconCard
        Icon={PeugeotIcon}
        name="PeugeotIcon"
      />

      <IconCard
        Icon={CitroenIcon}
        name="CitroenIcon"
      />
      <IconCard
        Icon={DsIcon}
        name="DsIcon"
      />

      <IconCard
        Icon={MitsubishiIcon}
        name="MitsubishiIcon"
      />
      <IconCard
        Icon={FiatIcon}
        name="FiatIcon"
      />

      <IconCard
        Icon={FiatProfessionalIcon}
        name="FiatProfessionalIcon"
      />
      <IconCard
        Icon={AlfaRomeoIcon}
        name="AlfaRomeoIcon"
      />

      <IconCard
        Icon={JeepIcon}
        name="JeepIcon"
      />

      <IconCard
        Icon={OpelIcon}
        name="OpelIcon"
      />

      <IconCard
        Icon={HongqiIcon}
        name="HongqiIcon"
      />

      <IconCard
        Icon={VoyahIcon}
        name="VoyahIcon"
      />

      <IconCard
        Icon={NavorIcon}
        name="NavorIcon"
      />
    </div>
  </>
);

export const Icons = Template.bind({});

Icons.args = {};

export default {
  title: 'AdminUI/Icons',
  component: (null as unknown) as FunctionComponent,
} as Meta;
