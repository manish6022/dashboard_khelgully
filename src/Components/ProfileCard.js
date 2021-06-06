import ProfilePic from "./ProfilePic"
import { makeStyles, Divider, Paper, Grid, Typography, ButtonBase, GridList, Card, Hidden } from "@material-ui/core"

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
      paddinfLeft:theme.spacing(4)
   },
   cardMargin:{
      marginLeft:theme.spacing(5)
   }
   
}))

export default function ProfileCard() {
      const classes = useStyles();
      return (
            <Paper variant='outlined' className={classes.root}>
           <Grid container direction='row' spacing={3} justify='center'>
                  <Grid item container xs={12} sm={12} md={5} alignItems='center' justify='center' spacing={3} >
                   <Grid container item sm  alignItems='center'>
                              <ProfilePic size='large'/>
                        <Grid container direction='column' xs spacing={0} className={classes.cardMargin}>
                              <Grid item xs>
                              
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Name</Typography>
                                    <Typography variant="h6" color="initial" >Raman</Typography>
                              
                              </Grid>
                              <Grid item>
                              
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Email</Typography>
                                    <Typography variant="h6" color="initial">raman@gmail.com</Typography>
                              
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
                              
                              <Typography variant="subtitle1" color="initial" className={classes.subFont}>Abc</Typography>
                              <Typography variant="h6" color="initial">12554</Typography>
                              
                        

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
                              <Typography variant="subtitle1" color="initial" className={classes.subFont}>Def</Typography>
                              <Typography variant="h6" color="initial">654655</Typography>
                        </Grid>
                        <Grid item> 
                              <Typography variant="subtitle1" color="initial" className={classes.subFont}>Raafafa</Typography>
                              <Typography variant="h6" color="initial">545464</Typography>
                        </Grid>
                        <Divider orientation='vertical' className={classes.divider}/>                        
                  </Grid>
                          {/* Divider */}

                  <Grid item container direction='column' sm={4} md spacing={3} xs={6} alignItems='center' >
                              <Grid item>
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Ghi</Typography>
                                    <Typography variant="h6" color="initial">+654654</Typography>

                              </Grid>
                              <Grid item>
                                    <Typography variant="subtitle1" color="initial" className={classes.subFont}>Jkl</Typography>
                                    <Typography variant="h6" color="initial">535353</Typography>
                              </Grid>                  
                  </Grid>
           </Grid>
           </Paper>
            )
}
