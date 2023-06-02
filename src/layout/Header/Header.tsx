import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, Button, Container, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { FlagIcon, Logo } from '../../components/Icons';


const Header = () => {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'sticky',
            boxSizing: 'border-box',
            flexShrink: 0,
            top: "0px",
            left: 'auto',
            right: "0px",
            color: 'rgb(251, 253, 255)',
            zIndex: 1201,
            borderRadius: '0px',
            boxShadow: 'rgb(236, 238, 240) 0px 3px 15px'
        }} component='header'>
            <Container maxWidth={false}>
                <Toolbar disableGutters variant='dense' sx={{ height: '60px', minHeight: '60px' }}>
                    <Logo />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h4' sx={{ fontWeight: 500, lineHeight: 1.375, fontSize: '24px', letterSpacing: '-0.03em', color: 'rgb(17, 24, 28)' }}>
                            <FormattedMessage id="titleAuthLayout" />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 0 }}>
                        <Button sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontWeight: 400,
                            textTransform: 'capitalize',
                            minWidth: '98px',
                            height: '32px',
                            color: 'rgb(17, 24, 28)',
                            borderRadius: '8px',
                            flex: '1 1 0%',
                            padding: '8px 12px',
                            backgroundColor: 'rgb(241, 243, 245)'
                        }} endIcon={<KeyboardArrowDownIcon />}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon />
                                <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', }} component='span'>EN</Typography>
                            </Box>
                        </Button>
                        <IconButton sx={{ color: 'rgb(215, 219, 223)', padding: 0 }}>
                            <Avatar sx={{ width: '32px', height: '32px', backgroundColor: 'rgb(230, 232, 235)' }}>n</Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </Paper>
    )
}

export default Header