import React, { useCallback, useEffect, useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../../../redux/reducer'
import { Action } from 'redux'
import { fetchThunk } from '../../common/redux/thunk'
import { API_PATHS } from '../../../configs/api'
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode'
import { IProfile } from '../../../models/profile'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ProfilePage = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>()
    const [profile, setProfile] = useState<IProfile>({
        id: 1,
        email: '',
        name: '',
        gender: '',
        avatar: '',
        region: 1,
        state: 1,
        description: '',
        createdAt: '',
        updatedAt: '',
    })

    const getProfileUser = useCallback(async () => {
        const json = await dispatch(fetchThunk(API_PATHS.profile, 'get'))
        if (json?.code === RESPONSE_STATUS_SUCCESS) {
            setProfile(json.data)
        }
    }, [dispatch])



    useEffect(() => {
        getProfileUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container
            fluid
            style={{
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}
        >
            <Row className="mt-4 p-3 pb-0">
                <Col className="mt-3" md="6">
                    Email: <span style={{ fontWeight: '600', fontSize: '16px' }}>{profile.email}</span>
                </Col>
                <Col className="mt-3" md="6">
                    Name: <span style={{ fontWeight: '600', fontSize: '16px' }}>{profile.name}</span>
                </Col>
                <Col className="mt-3" md="6">
                    Giới tính: <span style={{ fontWeight: '600', fontSize: '16px' }}>{profile.gender}</span>
                </Col>
                <Col className="mt-3" md="6">
                    Ngày đăng kí: <span style={{ fontWeight: '600', fontSize: '16px' }}>{profile.createdAt}</span>
                </Col>
                <Col className="mt-4 d-flex justify-content-center align-items-center" md="12">

                    <Button onClick={() => { }} style={{ minWidth: '200px' }}>
                        Log out
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}

export default ProfilePage