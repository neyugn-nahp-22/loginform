import React from 'react'
import { IProfile } from '../../../models/profile'

interface Props {
    profileUser: Array<IProfile>
}

const ProfileComponent = (props: Props) => {
    const { profileUser } = props
    console.log(profileUser, 'data');

    return (
        <div>
            {profileUser.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.avatar} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileComponent