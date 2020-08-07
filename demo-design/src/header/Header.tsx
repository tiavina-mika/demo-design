import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    headerRoot: {
        composes: 'font-ProximaNova-regular'
    }
}));



const Header: FC= () => {
    const classes = useStyles();

    return (
        <div className={classes.headerRoot}>
            <h1>Header</h1>
        </div>
    );
};

export default Header;
