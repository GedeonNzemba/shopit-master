import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { DataGrid } from '@material-ui/data-grid';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function BasicPagination(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={10} />
            <Pagination
                count={props.totalItemsCount}
                color="primary"

            />
            <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled />
        </div>
    );
}