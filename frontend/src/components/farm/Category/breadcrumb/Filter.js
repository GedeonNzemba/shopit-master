import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '1.6rem!important',
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

export default function Filter(props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                component="a"
                label={props.nameA}
                icon={<FilterAltIcon />}
                onClick={handleClick}
            />
            <StyledBreadcrumb component="a" label={props.nameB} disabled onClick={handleClick} />
            <StyledBreadcrumb component="a" label={props.nameC} disabled onClick={handleClick} />
            <StyledBreadcrumb component="a" label={props.nameD} disabled onClick={handleClick} />
            {/* <StyledBreadcrumb
                label="Accessories"
                deleteIcon={<ExpandMoreIcon />}
                onClick={handleClick}
                onDelete={handleClick}
            /> */}
        </Breadcrumbs>
    );
}