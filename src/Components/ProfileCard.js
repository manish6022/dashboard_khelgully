import ProfilePic from "./ProfilePic"
import { makeStyles, Divider, Paper, Grid, Typography, ButtonBase, GridList, Card, Hidden, IconButton } from "@material-ui/core"
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const useStyles = makeStyles(theme => ({
   root:{
         border:'0.75rem solid #580111',
         backgroundColor:'#161616',
         color:'white',
         padding:'1rem 1rem'
   },
    
   subFont:{
         color:'rgb(255,255,255,0.7)'
   },

   divider:{
         width:'1px',
         backgroundColor:'rgb(225,229,234,0.5)',
      height:'80%'
   },
   dividerHorizontal:{
      backgroundColor:'rgb(225,229,234,0.5)',
      width:'80vw'
},
   cardPadding:{
      paddinfLeft:theme.spacing(2)
   },
   cardMargin:{
      marginLeft:theme.spacing(2)
   },
   IconBtn:{
         backgroundColor:'#cf2e2e',
         width:'1rem',
         height:'1rem',
         marginLeft:'10px',
         '&:hover': {
               backgroundColor:'#902020'
         }
   },
   btnSize:{
         fontSize:'0.75rem',
         color:'white'

   }
   
}))

export default function ProfileCard(props) {
      const {name,email,number,followers,following,played,won,photoUrl}=props
      const classes = useStyles();
      return (
            <Paper variant='outlined' className={classes.root}>
           <Grid container direction='row' spacing={3} justify='center'>
                  <Grid item container xs={12} sm={12} md={5} alignItems='center' justify='center' spacing={0} >
                   <Grid container item sm  alignItems='center' justify='center'>
                              <ProfilePic size='large' photoUrl={photoUrl}/>
                        <Grid container direction='column' xs spacing={2} className={classes.cardMargin}>
                              <Grid item xs>
                              
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Name{<IconButton className={classes.IconBtn}>
                                          <EditRoundedIcon className={classes.btnSize}/>
                                          </IconButton>}
                                    </Typography>
                                    <Typography variant="h6" color="initial" >{name}</Typography>
                              
                              </Grid>
                              <Grid item>
                              
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Email{<IconButton className={classes.IconBtn}>
                                          <EditRoundedIcon className={classes.btnSize}/>
                                          </IconButton>}</Typography>
                                    <Typography variant="h6" color="initial">{email}</Typography>
                              
                              </Grid>
                        
                        </Grid>
                        </Grid>
                        <Hidden smDown>
                        <Divider orientation='vertical' className={classes.divider}/>
                        </Hidden>

  
                        <Hidden mdUp>
                        <Divider orientation='horizontal' className={classes.dividerHorizontal}/>
                        </Hidden>
                  </Grid>
                              {/* Divider */}

                  <Grid item container sm={12} md alignItems='center' spacing={3} xs={12} justify='center' direction='column'>
                        <Grid item xs >
                              
                              <Typography variant="subtitle1" color="initial" className={classes.subFont}>Number{<IconButton className={classes.IconBtn}>
                                          <EditRoundedIcon className={classes.btnSize}/>
                                          </IconButton>}</Typography>
                              <Typography variant="h6" color="initial">{number}</Typography>
                              
                        

                        </Grid>
                        <Hidden mdUp>
                        <Divider orientation='horizontal' className={classes.dividerHorizontal}/>
                        </Hidden>

                        <Hidden smDown>
                        <Divider orientation='vertical' className={classes.divider}/>
                        </Hidden>

                  </Grid>




                        {/* Divider */}

                  <Grid item container direction='column' sm={4} md alignItems='center' spacing={3} xs={6} justify="center">
                        <Grid item> 
                              <Typography variant="subtitle1" color="initial" className={classes.subFont}>Followers</Typography>
                              <Typography variant="h6" color="initial">{followers}</Typography>
                        </Grid>
                        <Grid item> 
                              <Typography variant="subtitle1" color="initial" className={classes.subFont}>Following</Typography>
                              <Typography variant="h6" color="initial">{following}</Typography>
                        </Grid>
                        <Divider orientation='vertical' className={classes.divider}/>                        
                  </Grid>
                          {/* Divider */}

                  <Grid item container direction='column' sm={4} md spacing={3} xs alignItems='flex-start'  wrap='nowrap' justify='center'>
                              <Grid item>
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Total Tournaments Played</Typography>
                                    <Typography variant="h6" color="initial">{played}</Typography>

                              </Grid>
                              <Grid item>
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Total Money Won</Typography>
                                    <Typography variant="h6" color="initial">{won}</Typography>
                              </Grid>                  
                  </Grid>
           </Grid>
           </Paper>
            )
}
