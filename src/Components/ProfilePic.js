import React from 'react'
import { makeStyles,Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
      medium: {
            width: theme.spacing(8),
            height: theme.spacing(8),
          },
      large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
    }));

export default function ProfilePic(props) {
      const classes = useStyles();
      const{alt,size,photoUrl}=props;
      return (
            <Avatar alt={alt} src={photoUrl} className={`${classes[size]}`} />
            )
}
