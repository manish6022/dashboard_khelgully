import React from 'react'
import { makeStyles,Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
      medium: {
            width: theme.spacing(10),
            height: theme.spacing(10),
          },
      large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    }));

export default function ProfilePic(props) {
      const classes = useStyles();
      const{alt,size,photoUrl}=props;
      return (
            <Avatar alt={alt} src={photoUrl} className={`${classes[size]}`} />
            )
}
