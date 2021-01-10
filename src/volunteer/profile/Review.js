import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// style
const useStyles = makeStyles((theme) => ({
    line:{
        borderBottom: "solid 0.5px black",
    },
  }));
  

const Review = ({id, evaluate, comment, create_at}) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="body2" display="block">
            評価：{evaluate}<br/>
            コメント：{comment}<br/>
            (投稿日：{create_at})
            </Typography>
            <div className={classes.line}></div>
        </>
    )
}

export default Review
