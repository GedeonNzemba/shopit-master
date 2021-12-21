import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Bar from '../Bar';
import { Stack } from '@mui/material';
import SideDrawer from '../Drawer'



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Stack direction="column" spacing={2}>
                        {/* <SideDrawer /> */}
                        
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                            id="Tab"
                        >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                            <Tab label="Item Four" {...a11yProps(3)} />
                            <Tab label="Item Five" {...a11yProps(4)} />
                            <Tab label="Item Six" {...a11yProps(5)} />
                            <Tab label="Item Seven" {...a11yProps(6)} />
                        </Tabs>
                    </Stack>
                </Grid>

                <Grid item xs={9}>
                    <Box id="BoxTab">
                        <Stack direction="column" spacing={2}>
                            <Bar />

                            <Box>
                                <TabPanel value={value} index={0}>
                                    Item One main
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two main
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three main
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    Item Five
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    Item Six
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    Item Seven
                                </TabPanel>
                            </Box>
                        </Stack>
                       
                    </Box>
                </Grid>
            </Grid>



        </Box>
    );
}

export default VerticalTabs;