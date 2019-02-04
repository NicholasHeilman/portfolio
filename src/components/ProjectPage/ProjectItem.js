// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import PropTypes from 'prop-types';
// // import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



// class ProjectItem extends Component {


//     // conditional render for image if Null
//     imageDisplay = () => {
//         if (this.props.project.thumbnail === null) {
//             return <img src="./images/goat_small.jpg" alt="" />;
//         } else {
//             return <img src={this.props.project.thumbnail} alt="screenshot" />;
//         }  
//     }
    
//     render() {

//         function MediaCard(props) {
//         const { classes } = props;
//         return (
//             <Card className={classes.card}>
//             <CardActionArea>
//               <CardMedia
//                 className={classes.media}
//                 image={this.imageDisplay()}
//                 title="Contemplative Reptile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                     {this.props.project.name}
//                 </Typography>
//                 <Typography component="p">
//                     {this.props.project.description}
//                 </Typography>
//                 <Typography>
//                 Uses: {this.props.project.tag_name}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <a href={this.props.project.github}>
//               <Button size="small" color="primary">
//                     GitHub
//               </Button></a>
//               {this.props.project.website &&
//                         <a href={this.props.project.website}>
//               <Button size="small" color="primary">
//                    Website
//               </Button></a>}
//             </CardActions>
//           </Card>
//         )
//     }
// }
// //material-ui component
// // MediaCard.propTypes = {
// //     classes: PropTypes.object.isRequired,
// //   };

// const mapStoreToProps = (reduxStore) => {
//     return { projects: reduxStore.projects }
//     };

// export default withStyles(styles)(connect(mapStoreToProps)(ProjectItem));