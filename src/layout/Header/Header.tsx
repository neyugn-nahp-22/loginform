import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, Button, Container, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './Header.module.scss';
import { FlagIcon, Logo } from '../../components/Icons';

const cx = classNames.bind(styles)

const Header = () => {
    return (
        <Paper className={cx('wrapper')} component='header'>
            <Container maxWidth={false}>
                <Toolbar className={cx("container")}>
                    <Logo />
                    <Box className={cx("title")}>
                        <Typography variant='h4'>
                            <FormattedMessage id="titleAuthLayout" />
                        </Typography>
                    </Box>
                    <Box className={cx("btn-home")}>
                        <Button endIcon={<KeyboardArrowDownIcon />} className={cx("change-language")}>
                            <Box>
                                <FlagIcon />
                                <Typography component='span'>EN</Typography>
                            </Box>
                        </Button>
                        <IconButton className={cx('btn-user')}>
                            <Avatar>n</Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </Paper>
    )
}

export default Header