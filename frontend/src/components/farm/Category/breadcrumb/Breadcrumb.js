import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { useTranslation, Trans } from 'react-i18next';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs(props) {
    const { t, i18n } = useTranslation();
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                component="a"
                href={props.navigationA}
                label={props.nameA}
                icon={<HomeIcon />}
                onClick={handleClick}
            />
            <StyledBreadcrumb component="a" label={props.nameB} disabled onClick={handleClick} />
            <StyledBreadcrumb component="a" label={props.nameC} disabled onClick={handleClick} />
            {/* <StyledBreadcrumb
                label="Accessories"
                deleteIcon={<ExpandMoreIcon />}
                onClick={handleClick}
                onDelete={handleClick}
            /> */}
        </Breadcrumbs>
    );
}