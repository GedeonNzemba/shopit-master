import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import en from './images/en.png'
import fr from './images/fr.png'

export default function LangSwitch() {
  const { t, i18n } = useTranslation();


  const actions = [
    { icon: <Avatar alt="English" src={en} />, name: t("new.key", "English") },
    { icon: <Avatar alt="French" src={fr} />, name: t("new.key", "French") }
  ];


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEnglish = () => {
    handleClose()
    i18n.changeLanguage('en');
  };
  const handleFrench = () => {
    handleClose()
    i18n.changeLanguage('fr');
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} id="float_lng">
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          icon={actions[0].icon}
          tooltipTitle={actions[0].name}
          onClick={handleEnglish}
        />
        <SpeedDialAction
          icon={actions[1].icon}
          tooltipTitle={actions[1].name}
          onClick={handleFrench}
        />
      </SpeedDial>
    </Box>
  );
}
