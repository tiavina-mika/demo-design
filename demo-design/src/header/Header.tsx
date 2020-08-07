import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const menus = [
    {
        url: '/',
        text: 'Services'
    },
    {
        url: '/',
        text: 'Projets'
    },
];

const useStyles = createUseStyles((theme: any) => ({
    rowCenter: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    headerRoot: {
        composes: 'flexColumn justifyCenter alignCenter font-ProximaNova-regular',
        padding: theme.spacing(20),
        fontSize: 22
    },
    menu: {
        composes: 'flexRow spaceBetween alignCenter stretchSelf',
    },
    leftMenu: {
        composes: 'flexRow alignCenter flex1',
    },
    logo: {
        composes: '$rowCenter',
        fontSize: 52,
        fontStyle: 'italic',
        padding: 0
    },
    description: {
        composes: '$rowCenter',
        paddingLeft: theme.spacing(6),
        fontSize: 16,
        color: '#666',
        '& span': {
            marginTop: 5
        }
    },
    rightMenu: {
        composes: 'flexRow alignCenter justifyEnd flex1'
    },
    item: {
        padding: [theme.spacing(3), theme.spacing(6)],
    },
    link: {
        color: theme.color.active,
        textDecoration: 'none'
    }
}));

const Header: FC= () => {
    const classes = useStyles();

    return (
        <div className={classes.headerRoot}>
            <div className={classes.menu}>
                <div className={classes.leftMenu}>
                    <div className={classes.logo}>
                        Increzia
                    </div>
                    <div className={classes.description}>
                        <span>Some description about increzia</span>
                    </div>
                </div>
                <div className={classes.rightMenu}>
                    {menus.map(({text , url }, index) => (
                        <div className={classes.item} key={index}>
                            <a href={url} className={classes.link}>{text}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
