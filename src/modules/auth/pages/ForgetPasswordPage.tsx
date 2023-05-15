import React from 'react'
import ForgetPasswordForm from '../components/ForgetPasswordForm'
import { Box, Stack, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

const ForgetPasswordPage = () => {
  return (
    <div>
      <Stack className={cx('login-wrapper')}>
        <Box className={cx('login-logo')} component='img' src='http://web-training.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg'></Box>
        <Typography className={cx("login-title")} variant='h3'>
          <FormattedMessage id='titleAuthLayout' />
        </Typography>
        <ForgetPasswordForm errorMessage='' loading={false} />
      </Stack >
    </div>
  )
}

export default ForgetPasswordPage